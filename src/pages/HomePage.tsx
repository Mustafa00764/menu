import React, { useState, useEffect, useContext } from 'react';
import Marquee from '../components/Marquee';
import minilogo from '../assets/svg/minilogo.svg'
import iphone from '../assets/svg/iphone-x.svg'
import qr_code from '../assets/svg/qr-code.svg'
import qr_code2 from '../assets/svg/qr-code2.svg'
import terminal1 from '../assets/svg/terminal1.svg'
import terminal2 from '../assets/svg/terminal2.svg'
import img from '../assets/image/Frame.png'
import Cloud from '../assets/svg/Cloud.svg'
import fork_and_knife_with_plate from '../assets/svg/fork-and-knife-with-plate.svg'
import shopping_cart from '../assets/svg/shopping-cart.svg'
import user_avatar_filled from '../assets/svg/user-avatar-filled.svg'



import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    EffectFade,
    Autoplay,
    Mousewheel,
  } from "swiper/modules";
  
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import MenuCard from '../elements/MenuCard';
import { NavLink } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';

interface Category {
    id: number;
    name: string;
}

const HomePage: React.FC = () =>{
    const [terminals,setTerminals] = useState<boolean>(true)
    const [text,setText] = useState<string>("")
    const {menu,setMenu} = useContext(ProductContext)
    


    const categories: Category[] = [
        {id:1,name:"chay."},
        {id:2,name:"salatlar."},
        {id:3,name:"sho'rvalar."},
        {id:4,name:"issiq ovqatlar."},

    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setTerminals(!terminals)
        }, 1000);
    
        // Cleanup to prevent memory leaks
        return () => clearInterval(interval);
      }, [terminals]);

    //   useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTerminals(!terminals)
    //     }, 1000);
    
    //     // Cleanup to prevent memory leaks
    //     return () => clearInterval(interval);
    //   }, []);

    return(
        <div>
            <Marquee/>
            <header className='flex h-[50px] w-full items-center justify-between px-3'>
                <div>
                    <img src={minilogo} alt="logo" />
                </div>
                <div>
                    <button className='py-[3px] px-[6px] bg-[#000] rounded-[5px] text-[#fff] text-[13px] leading-4 font-normal'>
                        log in.
                    </button>
                </div>
            </header>
            <div>
                <div className='max-w-[295px] flex items-center w-full mx-auto mt-[80px]'>
                    <img src={iphone} alt="iphone" className='mr-[62px]'/>
                    <img src={qr_code} alt="qr_code" className='mr-[33px]'/>
                    <img src={qr_code2} alt="qr_code2" />
                </div>
                <div className='mx-auto flex text-center flex-col justify-center max-w-[237px] w-full mt-[44px] gap-[36px]'>
                    <p className='text-[24px] '>NEW. <span className='font-extralight border-b'>Menu</span>. 2025.</p>
                    <p className='text-[30px] '>New.</p>
                    <div className='flex gap-4 items-center justify-center'>
                        <p className='text-[35px]'><span className='border-b'>System</span>.</p>
                        <img src={terminals?terminal1:terminal2} alt="terminal" />
                    </div>
                </div>
            </div>
            <div className="container mt-[50px]">
                <Swiper
                    modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}>
                        <SwiperSlide>
                            <img src={img} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img} alt="" />
                        </SwiperSlide>

                </Swiper>
                <div className='flex items-center justify-between w-full mt-[74px]'>
                    {
                        categories.map((item)=>{
                            return (
                                <div key={item.id}>
                                    <NavLink to={"/category"}>
                                        <button className='py-[3px] px-[6px] bg-[#000] rounded-[5px] text-[#fff] text-[13px] leading-4 font-normal'>
                                            {item.name}
                                        </button>
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='mt-[74px] flex flex-col gap-[74px] mb-[160px]'>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                </div>
                <div onClick={()=>setMenu(!menu)} className={menu?'bg-[rgba(76,77,77,1)] shadow-lg max-w-[calc(100vw-39px)] z-10 transition-all duration-300 w-full flex justify-between fixed overflow-hidden bottom-4 rounded-[10px] h-[70px] p-[5px] items-center':'bg-[#4C4D4D] z-10 w-[140px] shadow-lg flex duration-300 justify-between fixed bottom-4 overflow-hidden transition-all rounded-[10px] h-[70px] p-[5px] items-center'}>
                    <div className='flex items-center gap-[6px]'>
                        <img src={Cloud} alt="Cloud" />
                        <p className='text-[17px] text-[#fff]'>Cloud.</p>
                    </div>
                    <div className={menu?'flex items-center opacity-[1] relative transition-all duration-500 gap-[14px] pr-[7px]':"flex relative w-0 opacity-0 ml-[82px] items-center gap-[14px] pr-[7px]"}>
                        <NavLink to={"/registration"}>
                        <button onClick={()=>setMenu(true)} className='w-[50px] h-[50px] rounded-full border border-[#000] flex justify-center items-center'>
                            <img src={user_avatar_filled} alt="" />
                        </button>
                        </NavLink>
                        <button onClick={()=>setMenu(true)} className='w-[50px] h-[50px] rounded-full border border-[#000] flex justify-center items-center'>
                            <img src={fork_and_knife_with_plate} alt="" />
                        </button>
                        <NavLink to={"/basket"}>
                        <button onClick={()=>setMenu(true)} className='w-[50px] h-[50px] rounded-full border border-[#000] flex justify-center items-center'>
                            <img src={shopping_cart} alt="" />
                        </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage