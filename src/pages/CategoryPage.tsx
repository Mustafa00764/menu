import React, { useContext, useState } from "react";
import Marquee from "../components/Marquee";
import minilogo from '../assets/svg/minilogo.svg'
import arrowLeft from "../assets/svg/arrowLeft.svg"
import searchIcon from "../assets/svg/searchIcon.svg"
import stick from "../assets/svg/stick.svg"
import heart from "../assets/svg/heart.svg"
import MenuCard from "../elements/MenuCard";
import { NavLink } from "react-router-dom";
import Cloud from '../assets/svg/Cloud.svg'
import fork_and_knife_with_plate from '../assets/svg/fork-and-knife-with-plate.svg'
import shopping_cart from '../assets/svg/shopping-cart.svg'
import user_avatar_filled from '../assets/svg/user-avatar-filled.svg'
import ProductModel from "../components/ProductModel";
import { ProductContext } from "../contexts/ProductContext";
interface Category {
    id: number;
    name: string;
}

const CategoryPage: React.FC = () => {
    const {pModel,setPModel,menu,setMenu} = useContext(ProductContext)
    

    const categories: Category[] = [
        {id:1,name:"chay."},
        {id:2,name:"salatlar."},
        {id:3,name:"sho'rvalar."},
        {id:4,name:"issiq ovqatlar."},

    ]

    return(
        <div>
            <Marquee/>
            <header className='flex h-[50px] w-full items-center justify-between px-3'>
                <div>
                    <img src={minilogo} alt="logo" />
                </div>
            </header>
            <div className="container">
                <div className="flex items-center w-full gap-3 mt-6">
                    <div className="w-10 h-10 rounded-full bg-[#4C4D4D] flex justify-center items-center">
                        <img src={arrowLeft} alt="" />
                    </div>
                    <div className="rounded-full flex items-center h-10 gap-2 flex-auto pl-[5px] pr-3 bg-[#4C4D4D]">
                        <img src={searchIcon} alt="" />
                        <input type="text"  className=" outline-none pt-1 leading-4 flex items-center placeholder:text-[#fff] bg-transparent w-full text-[#fff]" placeholder="Search"/>
                    </div>
                </div>
                <div className="w-full flex flex-col">
                    <div className="w-full flex justify-evenly">
                        <img src={stick} alt="" />
                        <img src={stick} alt="" />
                    </div>
                    <div className="max-w-[348px] w-full -mt-[1px] mx-auto bg-[#353434] rounded-[20px] p-[7px] h-[89px]">
                        <div className="rounded-[15px] bg-[#fff] w-full h-full px-3 flex gap-4 items-center">
                            <div>
                                <img src={heart} alt="" className="heart_anim"/>
                            </div>
                            <div className=" flex-auto overflow-hidden">
                                <div className="marquee_title">
                                    <p className="text-[30px]">menyumizga xush kelibsiz</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between w-full mt-[147px]'>
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
            <ProductModel/>
        </div>
    )
}

export default CategoryPage