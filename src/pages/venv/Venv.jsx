import { useState, useEffect } from 'react'
import img from "../../../public/imgs/venv/Frame.png"
import { useParams } from 'react-router-dom';
import '@livekit/components-styles';
import {
  ControlBar,
  GridLayout,
  LiveKitRoom,
  ParticipantTile,
  RoomAudioRenderer,
  VideoConference,

} from '@livekit/components-react';


function Venv() {
  const [people , setPeople] = useState(["ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali","ali"])
  const [token,setToken] = useState(null);
  const [tokens,setTokens] = useState(null);
  const {projectID} = useParams()
    console.log(projectID)
  const serverUrl = 'wss://hoffice-svuyj7ly.livekit.cloud';

  // Change this to your own project ID
  //   const projectID = localStorage.getItem('projectID');
  const authToken = localStorage.getItem('access_token');

  const backendRoute= 'https://ghack-backend.onrender.com/projects/'+projectID+'/chatrooms';

  useEffect(() => {
    const fetchToken = async () => {
      try {
        fetch(backendRoute, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':"Bearer "+authToken,
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.chatroomsTokens)
        setTokens(data.chatroomsTokens);
        setToken(data.chatroomsTokens['workSpace'])
      });
      }
      catch (err) {
        console.error('Error fetching token', err);
      }
    }
    fetchToken();
    
  }, []);

  function joinRoom(roomId) {
    
    setToken(tokens[roomId]);
  }

    


return (
    <div className='flex' >
        <aside className='bg-[#ACD3FA] h-screen flex flex-col justify-between w-64 '>
            <div className='bg-[#ACD3FA] text-center flex flex-col justify-around flex-1 px-3'>
                <div className='mx-auto'>
                    <img src={img} alt="" srcset="" />

                </div>
                <div>
                    <p className='text-white font-bold text-2xl'> Participant</p>
                    <div className='flex flex-wrap justify-center gap-5 mt-2'>
                        {
                            people.map((ele, index)=>(
                                index <= 10 
                                ?
                                    <div  key={ele} >
                                        {/* should be {ele.img} */}
                                        {ele} 
                                    </div>
                                : index === 11 
                                ?
                                    <div key={ele}>
                                       +{people.length}
                                    </div> 
                                : 
                                    '' 
                            ))
                        }
                    </div>
                </div>
                <div>
                    <p className='text-white font-bold text-2xl'>
                        In Progress
                    </p>
                    <button className='text-red-400'>WTFF</button>
                </div>
                <div>
                    <p className='text-white font-bold text-2xl'>Activity</p>
                    <p className='text-green-700 font-bold text-2xl'>2h 50m 10s</p>
                </div>
            </div>
            <div className='text-center py-6 bg-[#7DB6F0]'>
                <p className='text-white font-bold text-xl'>
                    LOGOUT
                </p>
            </div>

        </aside>  
        <div className='bg-blue-300'>
            {/* VENV */}
            <LiveKitRoom
                key = {token}
                video={false}
                audio={true}
                token={token}
                serverUrl={serverUrl}
                connectOptions={{ autoSubscribe: true}}
                // Use the default LiveKit theme for nice styles.
                data-lk-theme="default"
                style={{ height: '100vh'}}
            >
            {/* UI HERE*/}
            <RoomAudioRenderer />
            {/* Controls for the user to start/stop audio, video, and screen 
            share tracks and to leave the room. */}
            </LiveKitRoom>


        

        </div> 
    </div>
  )
}

export default Venv