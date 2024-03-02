import React, { useState } from 'react'
import Input from '../../components/UI/Input'
import SmtpPagesFormat from '../../components/home/smtp/SmtpPagesFormat';
import { MdDone } from "react-icons/md";
import { Link } from 'react-router-dom';

const Smtp = () => {
  const [step, setStep] = useState(0)
  const [loading, setLoading] = useState(false);


  const [formDataOne, setFormDataOne] = useState({
    email: "",
  });

  const [formDataTwo, setFormDataTwo] = useState({
    password: "",
  });

  const handleChangeOne = (e) => {
    setFormDataOne({ ...formDataOne, [e.target.name]: e.target.value });
  };

  const handleChangeTwo = (e) => {
    setFormDataTwo({ ...formDataTwo, [e.target.name]: e.target.value });
  };

  return (
    <div className='w-screen h-screen overflow-hidden flex items-center justify-center'>
        {step === 0 ? <SmtpPagesFormat step={step} setStep={setStep}>
            <div className="flex flex-col flex-start w-[100%] gap-[1.5vh]">
                    <p className="font-medium text-Typo">Email</p>
                    <Input
                    value={formDataOne.email}
                    name="email"
                    onChange={handleChangeOne}
                    type="email"
                    placeholder="Email Adress"
                    width="100%"
                    display={"none"}
                    />
                </div>
            </SmtpPagesFormat> : (
                step === 1 ? <SmtpPagesFormat step={step} setStep={setStep}>
                    <div className="flex items-center w-[100%] justify-between">
                        <input type='text' className='font-medium text-center w-[6vw] h-[5vw] border-2 border-[#BFB7F1] rounded-full text-[2rem] flex items-center justify-center' />
                        <input type='text' className='font-medium text-center w-[6vw] h-[5vw] border-2 border-[#BFB7F1]  rounded-full text-[2rem] flex items-center justify-center' />
                        <input type='text' className='font-medium text-center w-[6vw] h-[5vw] border-2 border-[#BFB7F1]  rounded-full text-[2rem] flex items-center justify-center' />
                        <input type='text' className='font-medium text-center w-[6vw] h-[5vw] border-2 border-[#BFB7F1]  rounded-full text-[2rem] flex items-center justify-center' />
                    </div>
                    </SmtpPagesFormat> : (step===2 ? <SmtpPagesFormat step={step} setStep={setStep}>
                    <div className="flex gap-[12px] flex-col w-[100%]">
                        <p className="font-medium text-Typo">Password</p>
                        <Input
                        value={formDataTwo.password}
                        name="password"
                        onChange={handleChangeTwo}
                        label="Password"
                        type="password"
                        placeholder="Password"
                        width="100%"
                        />
                        <p className="font-medium text-Typo">Confirm Password</p>
                        <Input
                        value={formDataTwo.password}
                        name="password"
                        onChange={handleChangeTwo}
                        label="Password"
                        type="password"
                        placeholder="Confirm Password"
                        width="100%"
                        />
                    </div>
                    </SmtpPagesFormat> : <div className='flex flex-col gap-[4vh] items-center'>
                        <div className='flex items-center justify-center rounded-full w-[8vw] h-[8vw] bg-Green100'>
                            <MdDone className='text-white text-[64px]'/>
                        </div>
                        <div className="flex flex-col gap-[4vh] items-center">
                            <h2 className="text-[2.6rem] font-bold text-Typo text-center">
                            Password Updated Successfully
                            </h2>
                            <p className="text-[1.5rem] font-medium text-center w-[50vw] mx-auto text-Gray100">
                            Your password has been updated successfully, you can always reset your password for more security
                            </p>
                        </div>
                        <Link className=" w-[30vw] mx-auto h-[7vh] bg-Green100 rounded-[24px] text-white font-bold flex justify-center text-[1.5rem] items-center" to="/login">
                            {loading ? <div className="spinner "></div> : "Connexion"}
                        </Link>
                    </div>)
            )
        }
    </div>
  )
}

export default Smtp