import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Phaser from "phaser";
import GameScene from "../components/venv/GameScene";
import axios from "axios";

const VirtualEnv = ({ members, userId, projectId }) => {
  const [loading, setLoading] = useState(true);
  // const { userId } = useParams();

  async function fetchMembers() {
    const projectMembers = await axios.get(
      `https://4e32-41-111-189-195.ngrok-free.app/projects/${projectId}`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRhYTg3Mzg1LTlkN2YtNDhlMy05YWMxLWMwMGE1NzZkYzhiZiIsImV4cCI6NTMwOTMxMjczM30.a88Q1OlymrkA9w0VfF2igV8-GzDxKiuYKPk82cOfwwY`,
        },
      }
    );
    return projectMembers.data.project.members;
  }

  useEffect(() => {
    // const screenWidth =
    //   window.innerWidth ||
    //   document.documentElement.clientWidth ||
    //   document.body.clientWidth;
    const screenHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    const membersList = [
      {
        lastName: "YEKENE",
        email: "lm_yekene@esi.dz",
        id: "87301124-a20b-48ea-bbd8-b5299edfd118",
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ghack-cf0c2.appspot.com/o/picture.png?alt=media&token=a14a189f-e550-4660-9f40-fe20e65dc99b",
        firstName: "Sepia",
      },
      {
        lastName: "YEKENE",
        firstName: "sofiane",
        id: "daa87385-9d7f-48e3-9ac1-c00a576dc8bf",
        imageSrc:
          "https://storage.googleapis.com/ghack-cf0c2.appspot.com/1709157923Group%201000003516.png",
        email: "ln_yekene@esi.dz",
        color: 5,
      },
      {
        lastName: "YEKENE",
        firstName: "sofiane",
        id: "4885661d-8afa-41ff-9e34-0ea6507696a3",
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/ghack-cf0c2.appspot.com/o/picture.png?alt=media&token=a14a189f-e550-4660-9f40-fe20e65dc99b",
        email: "ls_yekene@esi.dz",
      },
      {
        lastName: "YEKENE",
        firstName: "sofiane",
        id: "201759be-a930-4f59-bf58-381febdd054c",
        imageSrc:
          "https://storage.googleapis.com/ghack-cf0c2.appspot.com/1709157923Group%201000003516.png",
        email: "lv_yekene@esi.dz",
        color: 5,
      },
    ];

    var returnFunc = () => {};
    // fetchMembers()
    //   .then((members) => {
    //     const config = {
    //       type: Phaser.AUTO,
    //       width: screenHeight * 1.77777, //1600 / 2,
    //       height: screenHeight, //((1600 / 1920) * 1080) / 2,
    //       test: "VirtualEnv",
    //       scene: new GameScene(
    //         projectId,
    //         "https://firebasestorage.googleapis.com/v0/b/ghack-cf0c2.appspot.com/o/picture.png?alt=media&token=a14a189f-e550-4660-9f40-fe20e65dc99b",
    //         userId,
    //         members
    //       ),
    //       physics: {
    //         default: "arcade",
    //         arcade: {
    //           gravity: { y: 0 },
    //           debug: false,
    //         },
    //       },
    //     };

    //     const game = new Phaser.Game(config);

    //     returnFunc = () => {
    //       // clearInterval(interval);
    //       game.destroy(true);
    //     };
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log("error fetching members: ", error);
    //   });
    // const interval = setInterval(moveRandomCharacter, 2000);

    const config = {
      type: Phaser.AUTO,
      width: screenHeight * 1.77777, //1600 / 2,
      height: screenHeight, //((1600 / 1920) * 1080) / 2,
      test: "VirtualEnv",
      scene: new GameScene(
        projectId,
        "https://firebasestorage.googleapis.com/v0/b/ghack-cf0c2.appspot.com/o/picture.png?alt=media&token=a14a189f-e550-4660-9f40-fe20e65dc99b",
        userId,
        members
      ),
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0 },
          debug: false,
        },
      },
    };

    const game = new Phaser.Game(config);
    setLoading(false);
    return () => {
      // returnFunc();

      game.destroy(true);
      window.dispatchEvent(new CustomEvent("gameScenceDestroyed"));
    };
  }, []);
  return (
    <>
      {/* <button
        className="text-4xl text-black border"
        onClick={() => {
          //   const colorsArray = Object.values(CharacterColors);
          //   const randomIndex = Math.floor(Math.random() * colorsArray.length);
          //   const randomColor = colorsArray[randomIndex];
          window.dispatchEvent(new CustomEvent("addCharacter"));
        }}
      >
        {"Add random character (green, blue or yellow)"}
      </button> */}
      {/* <button
        className="text-4xl text-black border ml-4"
        onClick={() => {
          window.dispatchEvent(
            new CustomEvent("updateRandomCharacterPosition", {
              detail: { newPositionX: 536, newPositionY: 348 },
            })
          );
        }}
      >
        Move random character
      </button> */}

      {/* <h4 className=" text-black">
        Move the purple character by clicking on the desired place{" "}
      </h4> */}
      {loading ? <h1>Loading...</h1> : <div id="phaser-game" />}
    </>
  );
  //   return (
  //     <div>
  //       <h1 className="text-4xl text-black">VirtualEnv</h1>
  //     </div>
  //   );
};

export default VirtualEnv;
