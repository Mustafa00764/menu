import React, { useContext, useEffect, useState } from "react"
import rame from "../assets/image/rame.png"
import camera from "../assets/svg/video-camera.svg"
import cameraOff from "../assets/svg/video-camera-off.svg"
import CommentModel from "../components/СommentModel.tsx"

import { ProductContext } from "../contexts/ProductContext"


const ProductModel: React.FC = () => {
    const {pModel,setPModel,cModel,setCModel} = useContext(ProductContext)
    const [video,setVideo] = useState<boolean>(false)


    const videos = () => {
        setPModel(false)
        setVideo(false)
        setCModel(false)
    }

    useEffect(()=>{

    },[video,pModel])

    return (
        <>
        <div onClick={()=>videos()} className={`w-full h-screen fixed top-0 bg-[rgba(0,0,0,.5)] transition-all z-10 ${pModel?"":"hidden"}`}></div>
        <div className={pModel?" fixed transition-all bottom-0 z-[11] duration-300 translate-y-[0]":"fixed  bottom-0 z-[11]  transition-all duration-300 translate-y-[100%]"}>
            <div onClick={()=>videos()} className="w-[48px] h-[48px] rounded-full bg-[#fff] hover:bg-[hsl(0,0%,96%)] flex justify-center items-center absolute right-2 top-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentcolor" d="M14.5 3.27 12.73 1.5 8 6.23 3.27 1.5 1.5 3.27 6.23 8 1.5 12.73l1.77 1.77L8 9.77l4.73 4.73 1.77-1.77L9.77 8z"></path></svg>
            </div>
            <div onClick={()=>setVideo(!video)} className="w-[48px] z-[2] h-[48px] rounded-full bg-[#fff] hover:bg-[hsl(0,0%,96%)] flex justify-center items-center absolute left-2 top-2">
                <img src={video?cameraOff:camera} alt="" />
            </div>
            <div className="w-full h-auto rounded-t-[20px]">
                <div className="bg-[hsl(0,0%,90%)] rounded-t-[20px]">
                    {
                        video?<iframe width="100%" className="h-[80vw] rounded-t-[20px]" src="https://www.youtube.com/embed/vDV8oiFdMJY" title="МАНЬЯК БЫЛ НЕ ГОТОВ К ТАКОМУ ТРОЛЛИНГУ в КС2! НЫЧКА ИЗ КОТОРОЙ НЕТ ВЫХОДА! МАНЬЯК CS2" ></iframe>:<img src={rame} alt="" className="w-[100vw] h-[80vw] object-cover rounded-t-[20px]"/>
                    }
                </div>
                <div className=" w-full p-3 h-[400px] bg-[#fff] relative rounded-t-[12px] z-[2] -mt-3">
                    <p className="text-[23px]">55.000</p>
                    <p className="text-[24px]">Somsa</p>
                    <p className="text-[20px] text-[hsl(206,7%,58%)]">155 g</p>
                    <p className="mt-1"><span className="font-semibold">Tavsif: </span><span>rice, nori seaweed, cottage cheese, tangerine, salmon, masago caviar</span></p>
                    <div onClick={()=>setCModel(true)} className="w-full cursor-pointer rounded-[12px] mt-3 bg-[rgba(0,0,0,.1)] p-3 h-[80px]">
                        <p>Izohlar 5</p>
                        <div className="w-full flex items-center gap-2">
                            <img src={rame} alt=""  className="w-[30px] h-[30px] rounded-full bg-[rgba(0,0,0,.4)]"/>
                            <p className="text-[14px] leading-[15px] h-[30px] overflow-hidden line-clamp-2 text-ellipsis">Qayta topshirishni o'tkazib yuborishga qaror qilganim bejiz emas</p>
                        </div>
                    </div>
                    <div className="p-3 w-full bg-[#fff] drop-shadow-2xl rounded-t-[15px] bottom-0 left-0 flex fixed h-[64px] justify-end items-center">
                        <button className="text-[19px] px-[19px] py-[10px] bg-[#000] leading-5 rounded-[10px] text-[#fff]">Buyurtma</button>
                    </div>
                </div>
            </div>
            <div className={cModel?"translate-y-0 bottom-0 absolute transition-all z-[2]":"translate-y-[100%] bottom-0 absolute transition-all z-[2]"}>
                <CommentModel/>
            </div>
        </div>
        </>
    )
}

export default ProductModel