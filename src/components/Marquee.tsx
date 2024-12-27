import React from "react"
import money from "../assets/svg/money.svg"
import emoji_smile from "../assets/svg/emoji-smile.svg"

const Marquee: React.FC = () => {
    return (
        <div className="h-[50px] w-full bg-[#EDEDED] flex items-center relative">
            <div className="marquee-text text-[12px] h-full leading-4 flex items-center gap-3 font-normal ">
                <p>NEW menu</p>
                <img src={emoji_smile} alt="" />
                <p>Restaurant system 500</p>
                <img src={money} alt="" />
                <p>Best product</p>
                <img src={emoji_smile} alt="" />
                <p>2025</p>
            </div>
        </div>
    );
}

export default Marquee