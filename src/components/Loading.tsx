import { useEffect, useState } from "react"
import logo from "../assets/svg/logo.svg"
import logoIcon from "../assets/svg/logoIcon.svg"
import logoName from "../assets/svg/logoName.svg"

const Loading: React.FC = () => {
  const [text, setText] = useState<string>(""); // Текущее состояние текста
  const textCloud:string = "Cloud"
  const fullText:string = "Developed by Cloud"; // Полный текст
  const typingSpeed:number = 100; // Скорость набора (в миллисекундах)

  useEffect(() => {
    let index:number = 0;

    const interval = setInterval(() => {
      setText((prev) => prev + fullText[index]); // Добавляем символ
      index++;

      if (index === fullText.length-1) {
        clearInterval(interval); // Очищаем интервал, когда текст полностью написан
      }
    }, typingSpeed);

    return () => clearInterval(interval); // Очищаем интервал при размонтировании
  }, []);

  return (
    <div className='bg-[#fff] w-full h-screen flex justify-center items-center'>
      <div className="logo">
        <img src={logoIcon} alt="" className="logoIcon"/>
        <img src={logoName} alt="" className="logoName"/>
      </div>
      <div className=" absolute bottom-5 text-black">
        <p className=" text-[14px]">
          {
            text
          }
          </p>
      </div>
    </div>
  )
}

export default Loading
