import { useState, useEffect, useRef } from "react";
import img from "../../../public/imgs/venv/Frame.png";
import { useParams } from "react-router-dom";
import "@livekit/components-styles";
import axios from "axios";
import VirtualEnv from "../VirtualEnv";
import {
  ControlBar,
  GridLayout,
  LiveKitRoom,
  ParticipantTile,
  RoomAudioRenderer,
  VideoConference,
} from "@livekit/components-react";

let listenerAdded = false;

function Venv() {
  const [token, setToken] = useState(null);
  const [tokens, setTokens] = useState(null);
  const [members, setMembers] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { projectID } = useParams();
  const serverUrl = "wss://hoffice-svuyj7ly.livekit.cloud";
  const baseUrl = "https://436d-41-111-189-195.ngrok-free.app";
  // "https://0b02-41-111-189-195.ngrok-free.app";

  // Change this to your own project ID
  //   const projectID = localStorage.getItem('projectID');W
  const authToken = localStorage.getItem("access_token");
  console.log("authToken", authToken);

  const backendRoute =
    // "https://ghack-backend.onrender.com/projects/" +
    // "http://localhost:3000/projects/"
    baseUrl + "/projects/" + projectID + "/chatrooms";

  async function fetchMembers() {
    const projectMembers = await axios.get(
      // `https://ghack-backend.onrender.com/projects/`
      // "http://localhost:3000/projects/"
      baseUrl + "/projects/" + projectID,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "ngrok-skip-browser-warning": true,
          "Access-Control-Allow-Origin": true,
        },
      }
    );
    return projectMembers.data.project.members;
  }
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const res = await axios.get(backendRoute, {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "ngrok-skip-browser-warning": true,
            "Access-Control-Allow-Origin": true,
          },
        });

        // await fetch(backendRoute, {
        //   method: "GET",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: "Bearer " + authToken,
        //   },
        // });
        console.log("res", res.data);
        const data = res.data;
        setTokens(data.chatroomsTokens);
        setToken(data.chatroomsTokens.workSpace);
        setMembers(await fetchMembers());
        setUserId(
          (
            await axios.get(baseUrl + "/user/profile", {
              headers: {
                Authorization: `Bearer ${authToken}`,
                "ngrok-skip-browser-warning": true,
                "Access-Control-Allow-Origin": true,
              },
            })
          ).data.user.id
        );
        // setIsLoading(false);
      } catch (err) {
        console.error("Error fetching", err);
      }
    };
    fetchToken();
  }, []);

  function joinRoom(roomId) {
    setToken(tokens[roomId]);
  }

  if (tokens && !listenerAdded) {
    window.addEventListener("roomClickedEvent", (e) => {
      joinRoom(e.detail.name);
    });
    listenerAdded = true;
  }
  return (
    <div className="flex">
      <aside className="bg-[#ACD3FA] h-screen flex flex-col justify-between w-64 ">
        {/* <aside id="deault-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar"> */}
        <div className="bg-[#ACD3FA] text-center flex flex-col justify-around flex-1 px-3">
          <div className="mx-auto">
            <img src={img} alt="" />
          </div>
          <div>
            <p className="text-white font-bold text-2xl"> Participant</p>
            {/* <div className="flex flex-wrap justify-center gap-5 mt-2">
              {people.map((ele, index) =>
                index <= 10 ? (
                  <div key={ele}>
                    {ele}
                  </div>
                ) : index === 11 ? (
                  <div key={ele}>+{people.length}</div>
                ) : (
                  ""
                )
              )}
            </div> */}
          </div>
          <div>
            <p className="text-white font-bold text-2xl">In Progress</p>
            <button className="text-red-400">WTFF</button>
          </div>
          <div>
            <p className="text-white font-bold text-2xl">Activity</p>
            <p className="text-green-700 font-bold text-2xl">2h 50m 10s</p>
          </div>
        </div>
        <div className="text-center py-6 bg-[#7DB6F0]">
          <p className="text-white font-bold text-xl">LOGOUT</p>
        </div>
      </aside>
      <div>
        <div className="relative bg-red-300">
          {!token || !tokens || !members || !userId ? (
            <h1>Loading...</h1>
          ) : (
            <VirtualEnv
              userId={userId}
              members={members}
              projectId={projectID}
            />
          )}
        </div>
        <div className="bg-red-300 w-full h-screen ">
          <LiveKitRoom
            key={token}
            video={false}
            audio={true}
            token={token}
            serverUrl={serverUrl}
            connectOptions={{ autoSubscribe: true }}
            // Use the default LiveKit theme for nice styles.
            data-lk-theme="default"
            style={{ height: "100vh" }}
          >
            <RoomAudioRenderer />
          </LiveKitRoom>
        </div>
      </div>
    </div>
  );
}

export default Venv;
