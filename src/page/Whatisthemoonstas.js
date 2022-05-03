import React from "react";

import WhatImg from "../assets/images/WhatImg.png";

const Whatisthemoonstas = () => {
  return (
    <div className=" w-full" id="whatisthemoonstas">
        <div className="text-[25px] sm:text-[43px] md:text-[52px] lg:text-[72px] leading-tight font-extrabold mt-14 mb-5 px-11">
            <span className="text-[#00F4F9]"> WHAT IS</span> 
            <div className="text-white">THE MOONSTA?</div>                    
        </div>
        <div className="w-full grid lg:grid-cols-2">
            <div className=" w-full flex justify-start">
                <div>
                    <div className="text-[16px] sm:text-[22px] md:text-[24px] lg:text-[28px] text-white  font-extrabold mb-5 px-11">
                        THIS IS A VISUAL ART PROJECT, ESTABLISHED IN THE <span className="customFont">SOLANA</span> NETWORK, WITH A SUPPLY OF 8888 UNITS.                
                    </div>
                    <div className="text-[16px] sm:text-[22px] md:text-[24px] lg:text-[28px] text-white  font-extrabold mb-5 px-11">
                        EACH MOONSTA IS COMPLETELY UNIQUE BASED ON OVER <span className="customFont">500</span> TRAITS, INCLUDING SKILLS, ACCESSORIES, SKINS, ETC...
                    </div>
                    <div className="text-[16px] sm:text-[22px] md:text-[24px] lg:text-[28px] text-white  font-extrabold mb-5 px-11">
                        WE HAVE 4 <span className="customFont">GENESIS ELEMENTS</span>, AS WELL AS 3 <span className="customFont">INITIAL RACES</span>, OUR GOAL IS TO CREATE A NEW AND RICH UNIVERSE THAT CAN <span className="customFont">THRIVE OVER TIME.</span>                   
                    </div>
                    <div className=" text-[16px] sm:text-[22px] md:text-[24px] lg:text-[28px] text-white  font-extrabold px-11">
                        <div>ENTERING THE MOONSTAS COMMUNITY MEANS GETTING THE <span className="customFont">KEY</span> TO A FULL UNIVERSE OF POSSIBILITIES ALWAYS BASED ON <span className="customFont">TRANSPARENCY</span> AND <span className="customFont">HONESTY.</span></div>   
                    </div>
                </div>
            </div>    
            <div className="w-full px-11 flex items-end justify-center">
                <div>
                    <img
                        src={WhatImg}
                        alt="Whatisthemoonstas Img"
                        className="m-auto "
                    />
                </div>
            </div>
        </div>
        {/* <div className="hidden lg:flex w-full lg:w-5/6 text-[16px] sm:text-[22px] md:text-[24px] lg:text-[28px] text-white  font-extrabold px-11">
            <div>ENTERING THE MOONSTAS COMMUNITY MEANS GETTING THE <span className="customFont">KEY</span> TO A FULL UNIVERSE OF POSSIBILITIES ALWAYS BASED ON <span className="customFont">TRANSPARENCY</span> AND <span className="customFont">HONESTY</span></div>   
        </div> */}
    </div>
  );
};
export { Whatisthemoonstas };
