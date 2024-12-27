import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import stars from "../assets/svg/Stars.svg"
import errors from "../assets/svg/Error.svg"

const ShippedPage = () => {
  const [product,setProduct] = useState<boolean>(false)

  if (!product) {
      return(
      <div className='w-full h-screen flex items-center px-5 text-[24px]'>
          <div className='w-full flex items-center flex-col gap-3'>
              <img src={errors} alt="" className='w-[300px] h-[266px]'/>
              <p className='text-center mt-[55px]'>Kechirasiz, xatolik yuz berdi, yordam uchun xodimlarga murojaat qiling.</p>
              <p className='text-[30px] text-[red] text-center'>Buyurtma xatosi</p>
              <Link to={'/category'} className='w-full'> 
              <button className='w-full bg-[#000] rounded-[20px] mt-2 h-[56px] text-[#fff]'>Menu</button>
              </Link>
          </div>
      </div>
      )
  }
  return (
    <div className='w-full h-screen flex items-center px-5 text-[24px]'>
      <div className='w-full flex items-center flex-col gap-3'>
        <img src={stars} alt="" className='w-[250px] h-[330px]'/>
        <p className='text-center mt-[25px]'>Xavotir olmang, buyurtmangizni ofitsiantlar olib kelishadi.</p>
        <p className='text-[30px] text-[#008000] text-center'>Omadli yuborildi</p>
        <Link to={'/category'} className='w-full'>
          <button className='w-full bg-[#000] rounded-[20px] mt-2 h-[56px] text-[#fff]'>Menu</button>
        </Link>
      </div>
    </div>
  )
}

export default ShippedPage