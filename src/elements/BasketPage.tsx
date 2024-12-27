import React, { useState } from 'react'
import divide_circle from "../assets/svg/divide-circle.svg"
import sms from "../assets/svg/sms.svg"
import alternate_trash from "../assets/svg/alternate-trash.svg"
import basket from "../assets/svg/Group.svg"
import { Link } from 'react-router-dom'

const BasketPage: React.FC = () => {
    const [product,setProduct] = useState<boolean>(true)

    if (!product) {
        return(
        <div className='w-full h-screen flex items-center px-5 text-[24px]'>
            <div className='w-full flex flex-col gap-3'>
                <img src={basket} alt="" />
                <p className='text-center'>siz hali buyurtma bermadingiz</p>
                <Link to={'/category'}>
                <button className='w-full bg-[#000] rounded-[20px] mt-2 h-[56px] text-[#fff]'>Menu</button>
                </Link>
            </div>
        </div>
        )
    }

  return (
    <div className='px-5'>
        <div className='w-full flex justify-end items-center'>
            <div className='mt-[6px]'>
                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="23" fill="black"/>
                    <path d="M18 5.75L6 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 5.75L18 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
        <div className='w-full flex justify-between px-3 text-[24px] mt-[30px] border-b'>
            <p>Xizmat</p>
            <p>14.000</p>
        </div>
        <div className='w-full flex justify-between px-3 text-[24px] py-[30px] border-b'>
            <p>Somsa</p>
            <div className='flex items-center gap-5'>
                <p>14.000</p>
                <img src={divide_circle} alt="" className='-mt-1'/>
            </div>
        </div>
        <div className='w-full flex justify-between px-3 text-[24px] py-[30px] border-b'>
            <p>Somsa</p>
            <div className='flex items-center gap-5'>
                <p>14.000</p>
                <img src={divide_circle} alt="" className='-mt-1'/>
            </div>
        </div>
        <div className='fixed w-full z-[2] left-0 bottom-0 '>
            <div className='flex w-full px-5 justify-between items-center'>
                <img src={alternate_trash} alt="" />
                <div className='w-[50px] h-[50px] border border-[#000] rounded-[20px] flex justify-center items-center'>
                    <img src={sms} alt="" />
                </div>
            </div>
            <div className='w-full bg-[#4C4D4D] h-[133px] mt-[12px] pt-[10px] px-5 text-[24px] text-[#fff]'>
                <div className='flex justify-between items-center'>
                    <p>14.000 som</p>
                    <p>Somsa</p>
                </div>
                <Link to={"/shipped"}>
                    <button className='w-full bg-[#000] rounded-[20px] mt-2 h-[56px]'>Yuborish</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default BasketPage