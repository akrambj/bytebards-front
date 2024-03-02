import Phaser from "phaser";

class RoomsManager {
  constructor(scene) {
    this.scene = scene;
    console.log("Scene: ", scene);
    const calculatePoints = (x, y) => {
      return new Phaser.Geom.Point(
        (this.scene.game.config.width * x) / 800,
        (this.scene.game.config.height * y) / 450
      );
    };
    this.points = [
      calculatePoints(21, 219),
      calculatePoints(148, 142),
      calculatePoints(289, 62),
      calculatePoints(400, 16),
      calculatePoints(77, 262),
      calculatePoints(212, 179),
      calculatePoints(352, 98),
      calculatePoints(423, 117),
      calculatePoints(525, 74),
      calculatePoints(400, 434),
      calculatePoints(536, 362),
      calculatePoints(714, 262),
      calculatePoints(632, 222),
      calculatePoints(457, 316),
      calculatePoints(323, 398),
      calculatePoints(785, 221),
    ];
    this.privateReunion1 = this.createRoom(
      [this.points[0], this.points[1], this.points[5], this.points[4]],
      "privateReunion1"
    );
    this.privateReunion2 = this.createRoom(
      [this.points[14], this.points[13], this.points[10], this.points[9]],
      "privateReunion2"
    );

    this.directionRoom = this.createRoom(
      [this.points[1], this.points[2], this.points[6], this.points[5]],
      "directionRoom"
    );
    this.restSpace = this.createRoom(
      [
        this.points[2],
        this.points[3],
        this.points[8],
        this.points[7],
        this.points[6],
      ],
      "restSpace"
    );
    this.meetingRoom = this.createRoom(
      [this.points[13], this.points[12], this.points[11], this.points[10]],
      "meetingRoom"
    );
    this.workSpace = this.createRoom(
      [
        this.points[4],
        this.points[5],
        this.points[6],
        this.points[7],
        this.points[8],
        this.points[15],
        this.points[11],
        this.points[12],
        this.points[13],
        this.points[14],
      ],
      "workSpace"
    );

    // this.mainRoom = this.createRoom(
    //   [
    //     this.points[0],
    //     this.points[1],
    //     this.points[2],
    //     this.points[3],
    //     this.points[8],
    //     this.points[15],
    //     this.points[10],
    //     this.points[9],
    //     this.points[14],
    //     this.points[4],
    //   ],
    //   "mainRoom",
    //   0
    // );

    // Set up input event listener
    this.scene.input.on("gameobjectdown", this.onGraphicClicked, this);
  }

  onGraphicClicked(pointer, gameObject) {
    // console.log("Graphic clicked!", pointer["downX"], pointer["upY"]);

    window.dispatchEvent(
      new CustomEvent("roomClickedEvent", {
        detail: {
          name: gameObject.name,
          x: pointer.downX,
          y: pointer.downY,
        },
      })
    );

    // Handle the click event
  }

  createRoom(points, name, depeth = 1) {
    // Draw the area formed by the points
    const graphics = this.scene.add.graphics();
    graphics.setDepth(depeth);
    graphics.setName(name);
    graphics.lineStyle(5, 0x00ff00, 0);
    graphics.fillStyle(0x00ff00, 0); // Set fill color (green with 50% opacity)
    graphics.beginPath();
    graphics.moveTo(points[0].x, points[0].y);
    for (const point of points) {
      graphics.lineTo(point.x, point.y);
    }

    graphics.closePath();
    graphics.strokePath();
    graphics.fillPath();

    // Make the graphic interactive
    graphics.setInteractive(
      new Phaser.Geom.Polygon(points),
      Phaser.Geom.Polygon.Contains
    );

    return graphics;
  }

  checkRoomClicked(x, y) {}
}

export default RoomsManager;
