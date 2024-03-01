import React, { useState } from 'react'

const SmtpPagesFormat = ({children, step, setStep}) => {
  const [loading, setLoading] = useState(false);

  return (
        <div className='flex flex-col items-center gap-[4vh]'>
            <div className="flex flex-col gap-[2vh] items-center">
              <h2 className="text-[2.6rem] font-bold text-Typo text-center">
              Reset Your Password
              </h2>
              <p className="text-[1.5rem] font-medium text-center w-[30vw] mx-auto text-Gray100">
              Manage your password using your mail adress.
              </p>
            </div>

            <div className='flex flex-col gap-[3vh] w-[30vw]'>
                {children}
                <button className=" w-[100%] mx-auto h-[7vh] bg-Green100 rounded-[24px] text-white font-bold flex justify-center text-[1.5rem] items-center" onClick={() => setStep(prevstep=>prevstep+1)}>
                    {loading ? <div className="spinner "></div> : "Connexion"}
                </button>
            </div>   
        </div>
  )
}

export default SmtpPagesFormat