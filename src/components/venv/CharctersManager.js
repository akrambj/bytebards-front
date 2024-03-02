class charactersManager {
  constructor(scene, socket) {
    this.socket = socket;
    this.scene = scene;
    this.characters = [];

    this.characterToScreenWidthRatio = 15 / 361;
    this.characterToScreenHeightRatio = 75 / 1043;

    this.arrowToScreenWidthRatio = this.characterToScreenWidthRatio * 0.3;
    this.arrowToScreenHeightRatio = this.characterToScreenHeightRatio * 0.3;

    window.addEventListener("roomClickedEvent", (e) => {
      this.onPointerDown(e.detail);
    });
  }

  createMainCharacter() {
    // Create a polygon sprite
    this.character = this.addPolygon("Pink");
    this.profilePic = this.addProfilePic(this.scene.userId);

    // Create an arrow image
    this.arrow = this.addArrow("Pink", this.character);

    // this.scene.input.on("pointerdown", this.onPointerDown, this);
    // this.scene.roomsManager.onPointerDown = this.onPointerDown;
  }

  onPointerDown(pointer) {
    // console.log("pointer down", pointer.x, pointer.y);
    // Tween the character to the clicked position
    const clickedX = pointer.x;
    const clickedY = pointer.y;
    this.updatePolygonPosition(
      this.character,
      this.profilePic,
      clickedX,
      clickedY
    );

    this.updateArrowPosition(this.arrow, clickedX, clickedY);

    this.emitUpdatePosition(clickedX, clickedY);
  }

  async addCharacter(color, userId) {
    const profilePic = this.addProfilePic(userId);
    const polygon = this.addPolygon(color);
    const arrow = this.addArrow(color, polygon);

    this.characters.push({ userId, polygon, arrow, profilePic });
    this.emitUpdatePosition(this.character.x, this.character.y);
  }

  addPolygon(color) {
    // Create a character sprite
    const polygon = this.scene.physics.add.sprite(
      this.scene.game.config.width / 2,
      this.scene.game.config.height / 2,
      `polygon${color}`
    );
    const scaleRatio = this.scene.calculateScale(
      polygon.width,
      polygon.height,
      this.characterToScreenWidthRatio,
      this.characterToScreenHeightRatio
    );
    polygon.setScale(scaleRatio.widthRatio, scaleRatio.heightRatio);
    polygon.setCollideWorldBounds(true);
    polygon.setOrigin(0.5);
    polygon.setDepth(1);
    return polygon;
  }

  addProfilePic(picture) {
    const profileToPolygonWidthRatio = 0.6;
    const profileToPolygonHeightRatio = 0.6;

    const profilePic = this.scene.add.image(
      this.scene.game.config.width / 2,
      this.scene.game.config.height / 2,
      picture ? picture : "defaultProfilePic"
    );

    const scaleRatio = this.scene.calculateScale(
      profilePic.width,
      profilePic.height,
      this.characterToScreenWidthRatio,
      this.characterToScreenHeightRatio
    );
    profilePic.setScale(
      scaleRatio.widthRatio * profileToPolygonWidthRatio,
      scaleRatio.heightRatio * profileToPolygonHeightRatio
    );
    profilePic.setOrigin(0.5);
    profilePic.setDepth(0);

    return profilePic;
  }

  addArrow(color) {
    // Create an arrow image
    const arrow = this.scene.add.image(
      this.scene.game.config.width / 2, //   polygon.x + polygon.width / 4,
      this.scene.game.config.height / 2, //   polygon.y + polygon.height / 4,
      `arrow${color}`
    );

    const arrowDimRatio = arrow.width / arrow.height;
    const arrowHeight =
      this.scene.game.config.height * this.arrowToScreenHeightRatio;
    arrow.setDisplaySize(arrowHeight * arrowDimRatio, arrowHeight);
    arrow.setOrigin(0, 0.5);
    // arrow.setScale(0.5);
    return arrow;
  }
  updatePisitionHandler(data) {
    const characterIndex = this.characters.findIndex(
      (character) => character.userId === data.userId
    );
    if (characterIndex !== -1) {
      const x = this.scene.game.config.width * (data.x / data.width);
      const y = this.scene.game.config.height * (data.y / data.height);
      this.updateCharaterPosition(
        this.characters[characterIndex],
        x, //   Math.random() * this.game.config.width,
        y //   Math.random() * this.game.config.height
      );
    }
  }

  updateCharaterPosition(character, newPositionX, newPositionY) {
    const polygon = character.polygon;
    const arrow = character.arrow;
    const profilePic = character.profilePic;
    this.updatePolygonPosition(polygon, profilePic, newPositionX, newPositionY);
    this.updateArrowPosition(arrow, newPositionX, newPositionY);
  }

  updatePolygonPosition(polygon, profilePic, newPositionX, newPositionY) {
    this.scene.tweens.add({
      targets: [polygon, profilePic],
      x: newPositionX,
      y: newPositionY,
      duration: 500, // Duration of the tween in milliseconds
      ease: "Linear", // Easing function for smooth movement (Linear for constant speed)
    });
  }

  updateArrowPosition(arrow, newPositionX, newPositionY) {
    // Calculate angle and distance offset from the character to the arrow
    var angle;
    if (newPositionX === arrow.x && newPositionY !== arrow.y) {
      angle = newPositionY > arrow.y ? Math.PI / 2 : 0;
    } else if (newPositionY === arrow.y && newPositionX !== arrow.x) {
      angle = newPositionX > arrow.x ? Math.PI / 4 : -Math.PI / 4;
    } else if (newPositionX === arrow.x && newPositionY === arrow.y) {
      angle = 0;
    } else {
      angle = Math.atan(
        Math.abs(newPositionY - arrow.y) / Math.abs(newPositionX - arrow.x)
      );
      if (newPositionY < arrow.y && newPositionX > arrow.x) {
        angle = -angle;
      } else if (newPositionY < arrow.y && newPositionX < arrow.x) {
        angle = arrow.rotation < 0 ? angle - Math.PI : angle + Math.PI;
      } else if (newPositionY > arrow.y && newPositionX < arrow.x) {
        angle = arrow.rotation < 0 ? -angle - Math.PI : -angle + Math.PI;
      }

      if (Math.abs(Math.abs(angle) - Math.abs(arrow.rotation)) > Math.PI) {
        angle = angle - 2 * Math.PI;
      }
    }

    // Set the new position and rotation for the arrow
    this.scene.tweens.add({
      targets: arrow,
      rotation: angle,
      duration: 100, // Duration of the tween in milliseconds
      ease: "Linear", // Easing function for smooth movement (Linear for constant speed)
    });

    this.scene.tweens.add({
      targets: arrow,
      x: newPositionX,
      y: newPositionY,
      duration: 500, // Duration of the tween in milliseconds
      ease: "Linear", // Easing function for smooth movement (Linear for constant speed)
    });
  }

  deleteCharacter(userId) {
    const characterIndex = this.characters.findIndex(
      (character) => character.userId === userId
    );
    if (characterIndex !== -1) {
      this.characters[characterIndex].polygon.destroy();
      this.characters[characterIndex].arrow.destroy();
      this.characters[characterIndex].profilePic.destroy();
      this.characters.splice(characterIndex, 1);
    }
  }

  emitUpdatePosition(clickedX, clickedY) {
    this.socket.emit("updatePosition", {
      virtualEnvId: this.scene.virtualEnvId,
      x: clickedX,
      y: clickedY,
      width: this.scene.game.config.width,
      height: this.scene.game.config.height,
      userId: this.scene.userId,
    });
  }
}

export default charactersManager;
