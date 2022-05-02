import React from "react";
import logo from "../assets/images/logo.png"
import Background from "../assets/images/Background.png";
import HomeImg from "../assets/images/HomeImg.png";
const Home = () => {

  return (
    <div>
      <div className="min-h-screen flex w-full relative" id="home">
        <div className="min-h-screen h-full w-full flex justify-center mt-[72px] lg:mt-[20px] z-20">
            <div className=" text-white ">
                <div className="flex w-full justify-center">
                    <a href='/' className="m-auto w-[160px] sm:w-[250px] lg:w-[323px] ">
                      <img src={logo} alt="logo"/>
                    </a>
                </div>
                <div className="flex w-full justify-center">
                  <div className="w-[263px] sm:w-[500px] md:w-[530px] lg:w-[755px]  text-center text-[14px] sm:text-[19px] md:text-[22px] lg:text-[32px] font-bold">
                      ARE YOU READY TO DISCOVER A NEW <span className="text-[#00F4F9]">UNIVERSE?</span>                    
                  </div>
                </div>
                <div className="flex w-full justify-center">
                   <div className="w-[350px] sm:w-[596px] md:w-[663px] lg:w-[996px] text-center text-[25px] sm:text-[43px] md:text-[52px] lg:text-[72px] leading-tight font-extrabold">
                      JOIN <span className="customFont">US</span>, BE A<span className="text-[#00F4F9]"> MOONSTA</span>                    
                   </div>
                </div>
                <div className="flex w-full justify-center">
                  <div className="w-[263px] sm:w-[447px] md:w-[530px] lg:w-[755px]  text-center text-[14px] sm:text-[19px] md:text-[22px] lg:text-[24px]  font-extrabold">
                    A MOONSTA IS A <span className="customFont">KEY</span> INTO THE <span className="customFont">DEEPEST</span> NFT UNIVERSE
                  </div>
                </div>
                <div className="flex w-full justify-center mt-8">
                    <a
                        href={"https://discord.gg/themoonstars"}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="customButton flex  justify-center w-[150px] sm:w-[218px]  px-[6px] sm:px-8 py-3 text-[12px] sm:text-[16px] font-bold text-black bg-[#4EFBDF]  rounded-md">
                          JOIN OUR DISCORD
                        </button>
                    </a>
                </div>
                <div>
                  <img src={HomeImg} alt="HomeImg" className="m-auto" />
                </div>
            </div>
        </div>
        <div className="absolute z-10 w-auto min-w-full min-h-full max-w-none overflow-hidden flex justify-center">
          <img src={Background} alt="Background" className=" absolute  w-auto min-w-full min-h-full max-w-none overflow-hidden" />
        </div>
      </div>
    </div>
  );
};
export { Home };
