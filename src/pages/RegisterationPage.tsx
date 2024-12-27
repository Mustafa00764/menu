import React from 'react'
import edit from "../assets/svg/edit-3.svg"
const RegisterationPage = () => {
  return (
    <div className='px-3 h-screen w-full py-3 flex flex-col justify-between'>
        <div className='w-full mt-2 flex flex-col gap-5'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentcolor" d="M14.5 3.27 12.73 1.5 8 6.23 3.27 1.5 1.5 3.27 6.23 8 1.5 12.73l1.77 1.77L8 9.77l4.73 4.73 1.77-1.77L9.77 8z"></path></svg>
            </div>
            <div className=' bg-[#fff] drop-shadow rounded-[20px] p-3 w-full h-[440px]'>
                <div className='w-full flex justify-center items-center'>
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30" cy="30" r="29" fill="black" stroke="white" strokeWidth="2"/>
                        <path d="M42.6663 44.25V41.0833C42.6663 39.4036 41.9991 37.7927 40.8114 36.605C39.6236 35.4173 38.0127 34.75 36.333 34.75H23.6663C21.9866 34.75 20.3757 35.4173 19.188 36.605C18.0003 37.7927 17.333 39.4036 17.333 41.0833V44.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M30.0003 28.4167C33.4981 28.4167 36.3337 25.5811 36.3337 22.0833C36.3337 18.5855 33.4981 15.75 30.0003 15.75C26.5025 15.75 23.667 18.5855 23.667 22.0833C23.667 25.5811 26.5025 28.4167 30.0003 28.4167Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className='w-full  flex mt-8 flex-col gap-7'>
                    <div className='w-full relative edit1 rounded-[15px] border h-[56px] border-[#000] flex gap-3 px-3 items-center'>
                        <input type="text"  className='flex-auto outline-none mt-1'/>
                        <img src={edit} alt="edit" />
                    </div>
                    <div className='w-full relative edit2 rounded-[15px] border h-[56px] border-[#000] flex gap-3 px-3 items-center'>
                        <input type="text"  className='flex-auto outline-none mt-1'/>
                        <img src={edit} alt="edit" />
                    </div>
                    <div className='w-full relative edit3 rounded-[15px] border h-[56px] border-[#000] flex gap-3 px-3 items-center'>
                        <input type="text"  className='flex-auto outline-none mt-1'/>
                        <img src={edit} alt="edit" />
                    </div>
                </div>
            </div>
        </div>
        <div>
            <button className='w-full bg-[#000] rounded-[20px] mt-2 h-[56px] text-[#fff]'>Ro'yxatdan o'tish</button>
        </div>
    </div>
  )
}

export default RegisterationPage