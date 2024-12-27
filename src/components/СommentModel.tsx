import React, { useContext } from 'react'
import like from "../assets/svg/like.svg"
import rame from "../assets/image/rame.png"
import { ProductContext } from '../contexts/ProductContext'

const СommentModel: React.FC = () => {
    const {pModel,setPModel,cModel,setCModel} = useContext(ProductContext)
    
  return (
    <div className='px-3 bg-[#fff] rounded-[20px] py-3 h-[400px] w-full'>
        <div className='w-full flex items-center mb-4 justify-between'>
            <p className='text-[24px]'>Izohlar 5</p>
            <div onClick={()=>setCModel(false)} className='w-[30px] h-[30px] bg-[#fff] rounded-full flex items-center justify-center drop-shadow-md'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentcolor" d="M14.5 3.27 12.73 1.5 8 6.23 3.27 1.5 1.5 3.27 6.23 8 1.5 12.73l1.77 1.77L8 9.77l4.73 4.73 1.77-1.77L9.77 8z"></path></svg>
            </div>
        </div>
        <div className='flex gap-2 flex-col'>
            <div className='flex gap-2 w-full pb-2 border-b'>
                <div className=' w-[40px]'>
                    <img src={rame} alt=""  className="w-[30px] h-[30px] rounded-full bg-[rgba(0,0,0,.4)]"/>
                </div>
                <div className='flex flex-auto flex-col gap-5'>
                    <p className="text-[14px] leading-[15px] h-[30px] overflow-hidden line-clamp-4 text-ellipsis">Qayta topshirishni o'tkazib yuborishga qaror qilganim bejiz emas</p>
                    <div className="flex text-[12px] gap-1 items-end -mt-3">
                        <button>
                            <img src={like} alt="thumbs" className='w-[20px] h-[20px]'/>
                        </button>
                        <p>23</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default СommentModel