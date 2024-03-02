import bg from "/imgs/venv/virtualEnvBg.png";
import polygonPink from "/imgs/venv/polygons/polygonPink.png";
import arrowPink from "/imgs/venv/arrows/arrowPink.png";
import polygonPurple from "/imgs/venv/polygons/polygonPurple.png";
import arrowPurple from "/imgs/venv/arrows/arrowPurple.png";
import polygonGreen from "/imgs/venv/polygons/polygonGreen.png";
import arrowGreen from "/imgs/venv/arrows/arrowGreen.png";
import polygonOrange from "/imgs/venv/polygons/polygonOrange.png";
import arrowOrange from "/imgs/venv/arrows/arrowOrange.png";
import polygonBlue from "/imgs/venv/polygons/polygonBlue.png";
import arrowBlue from "/imgs/venv/arrows/arrowBlue.png";
import polygonSkyBlue from "/imgs/venv/polygons/polygonSkyBlue.png";
import arrowSkyBlue from "/imgs/venv/arrows/arrowSkyBlue.png";
import socket from "../../Core/Services/socketIO";
import defaultProfilePic from "/imgs/venv/defaultProfilePic.png";
import profilePic1 from "/imgs/venv/profilePic1.png";
import CharactersManager from "./CharctersManager";
import RoomsManager from "./RoomsManager";

// src/GameScene.js
import Phaser from "phaser";

class GameScene extends Phaser.Scene {
  constructor(virtualEnvId, profilePic, userId, members) {
    super({ key: "GameScene" });
    this.CharacterColors = {
      PINK: "Pink",
      GREEN: "Green",
      BLUE: "Blue",
      ORANGE: "Orange",
      PURPLE: "Purple",
      SKY_BLUE: "SkyBlue",
    };
    this.charactersManager = new CharactersManager(this, socket);
    this.virtualEnvId = virtualEnvId;
    this.pictureUrl = profilePic;
    this.members = members;
    this.userId = userId;
    socket.on("newUser", (data) => this.newUserHandler(data));
    socket.on("connectedSuccessfuly", (data) =>
      this.connectedSuccessfullyHandler(data)
    );
    socket.on("userLeft", (data) => this.userLeftHandler(data));
    socket.on("updatePosition", (data) =>
      this.charactersManager.updatePisitionHandler(data)
    );
  }

  randomColorGenerator() {
    const colorsArray = Object.values(this.CharacterColors);
    const randomIndex = Math.floor(Math.random() * (colorsArray.length - 1));
    return colorsArray[randomIndex];
  }

  preload() {
    this.points = [
      {
        x: 506,
        y: 103,
      },
      {
        x: 769,
        y: 309,
      },
      {
        x: 502,
        y: 503,
      },
      {
        x: 213,
        y: 300,
      },
    ];
    this.characters = [];

    this.load.image("background", bg);
    this.load.image("profilePic1", profilePic1);
    this.load.image("defaultProfilePic", defaultProfilePic);
    this.load.image("profilePic", this.pictureUrl);
    this.load.image("polygonPink", polygonPink);
    this.load.image("arrowPink", arrowPink);
    this.load.image("polygonPurple", polygonPurple);
    this.load.image("arrowPurple", arrowPurple);
    this.load.image("polygonGreen", polygonGreen);
    this.load.image("arrowGreen", arrowGreen);
    this.load.image("polygonOrange", polygonOrange);
    this.load.image("arrowOrange", arrowOrange);
    this.load.image("polygonBlue", polygonBlue);
    this.load.image("arrowBlue", arrowBlue);
    this.load.image("polygonSkyBlue", polygonSkyBlue);
    this.load.image("arrowSkyBlue", arrowSkyBlue);

    for (var member of this.members) {
      this.load.image(member.id, member.imageSrc);
    }
  }

  create() {
    this.roomsManager = new RoomsManager(this);
    this.cameras.main.setBackgroundColor(0xdae9fc);
    // Create a fixed background
    const background = this.add.image(
      this.game.config.width / 2,
      this.game.config.height / 2,
      "background"
    );

    background.setDisplaySize(this.game.config.width, this.game.config.height);

    background.setOrigin(0.5);
    background.setDepth(-1);

    this.charactersManager.createMainCharacter();

    window.addEventListener("gameScenceDestroyed", (e) => {
      this.emitLeaveVirtualEnv();
    });

    socket.emit("connectToVirtualEnv", {
      virtualEnvId: this.virtualEnvId,
      userId: this.userId,
    });
  }

  calculateScale(
    currentWidth,
    currentHeight,
    targetWidthRatio,
    targetHeightRatio
  ) {
    const targetWidth = this.game.config.width * targetWidthRatio;
    const targetHeight = this.game.config.height * targetHeightRatio;
    return {
      widthRatio: targetWidth / currentWidth,
      heightRatio: targetHeight / currentHeight,
    };
  }

  newUserHandler(data) {
    this.charactersManager.addCharacter(
      this.randomColorGenerator(),
      data.userId
    );
  }

  connectedSuccessfullyHandler(data) {
    for (var user of data.connectedClients) {
      this.charactersManager.addCharacter(
        this.randomColorGenerator(),
        user.userId
      );
    }
  }

  userLeftHandler(data) {
    console.log("user left: ", data.leftUser);
    this.charactersManager.deleteCharacter(data.leftUser);
  }
  emitLeaveVirtualEnv() {
    socket.emit("leaveVirtualEnv", {
      virtualEnvId: this.virtualEnvId,
    });
  }
}

export default GameScene;
