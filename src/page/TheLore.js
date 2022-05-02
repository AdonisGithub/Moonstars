import React from "react";
import newspaper from "../assets/images/newspaper 1.png";

const TheLore = () => {
  return (
    <div className=" w-full" id="lore">
      <div className="text-[25px] sm:text-[43px] md:text-[52px] lg:text-[72px] leading-tight font-extrabold mt-14 mb-5 px-11">
        <span className="text-[#00F4F9]">THE</span> <span className="text-white">LORE</span>                
      </div>
      <div className="flex w-full justify-center px-11">
        <img src={newspaper} alt="newspaper"/>
      </div>
      <div className="text-[#00F4F9] text-[25px] sm:text-[43px] md:text-[52px] lg:text-[72px] leading-tight font-extrabold mb-5 px-11">
        WANT TO KNOW MORE?
      </div>
      <div className="text-white text-[20px]  md:text-[27px] lg:text-[47px] leading-tight font-extrabold mb-5 px-11">
        JOIN THE COMMUNITY TO SEE MORE 
      </div>
      <div className="text-white text-[20px]  md:text-[27px] lg:text-[47px] leading-tight font-extrabold mb-5 px-11">
        CHAPTERS OF THE LORE 
      </div>
    </div>
    
  );
};
export { TheLore };
