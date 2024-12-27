import React, { useContext } from "react";
import rame from "../assets/image/rame.png"
import thumbs from "../assets/svg/thumbs.svg"
import like from "../assets/svg/like.svg"
import sms from "../assets/svg/sms.svg"
import { ProductContext } from "../contexts/ProductContext";

const MenuCard: React.FC = () => {
        const {pModel,setPModel,menu,setMenu} = useContext(ProductContext)
        
    
    return (
        <div className="w-full ">
            <div className="w-full text-end text-[23px] pr-5 leading-6">
                <p className="">55.000</p>
            </div>
            <div onClick={()=>setPModel(true)} className="p-[15px] bg-black backdrop-blur relative shadow-[9px_10px_4px_0px_rgba(0,0,0,.4)] rounded-[20px] border border-[rgba(170,170,170,0.30)] w-full h-[253px]">
                <p className="text-[#fff] text-[10px] absolute top-0 left-[34px]">Cloud.</p>
                <img src={rame} alt="rame" className="w-full h-full rounded-[10px]"/>
            </div>
            <div className="flex justify-between ">
                <div className="flex gap-4 items-center text-[15px] leading-[15px]">
                    <div  className="flex items-center">
                        <button>
                            <img src={sms} alt="sms" />
                        </button>
                        <p>23</p>
                    </div>
                    <div className="flex items-end -mt-3">
                        <button>
                            <img src={like} alt="thumbs" />
                        </button>
                        <p>23</p>
                    </div>
                </div>
                <div className="text-end">
                    <p className="text-[29px] pr-4">somsa</p>
                    <button onClick={()=>setMenu(true)} className="text-[19px] px-[19px] py-[10px] bg-[#000] leading-5 rounded-[10px] text-[#fff]">Buyurtma</button>
                </div>
            </div>
        </div>
    )
}

export default MenuCard

