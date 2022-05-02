import React from "react";
import roadmapimg1 from "../assets/images/roadmap1.png"
import roadmapimg2 from "../assets/images/roadmap2.png"
import roadmapimg3 from "../assets/images/roadmap3.png"
import roadmapimg4 from "../assets/images/roadmap4.png"
import roadmapimg5 from "../assets/images/roadmap5.png"
import roadmapimg6 from "../assets/images/roadmap6.png"
import vectorimg from "../assets/images/Vector.png";
const Roadmap = () => {

  return (
    <div className=" w-full background_vector" id="roadmap">
      <div className="text-[25px] sm:text-[43px] md:text-[52px] lg:text-[72px] leading-tight font-extrabold mt-14 mb-5 px-11">
        <span className="text-[#00F4F9]">ROAD</span> <span className="text-white">MAP</span>                
      </div>
      <div className="absolute z-10 hidden xl:flex w-full ">
          <img src={vectorimg} alt="Background" className="w-full h-[1440px]" />
      </div>
      <div className="flex xl:hidden w-full mb-5 px-11">
        <div className="hidden sm:contents ">
            <img src={roadmapimg1} alt="roadmapimg1" className="w-[130px] lg:w-[206px] h-fit"/>
        </div>
        <div className="text-white text-[50px] lg:text-[80px] leading-tight font-extrabold mr-5">1</div>
        <div className="text-white text-[16px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-extrabold">
          DURING THIS PHASE WE WANT TO ENSURE THE <span className="customFont">CONSOLIDATION OF THE COMMUNITY</span>, AS WELL AS ESTABLISH A <span className="customFont">PERFECT COLLECTION</span> BOTH TECHNICALLY AND ARTISTICALLY, IN ADDITION OUR GOAL IS TO ACHIEVE THE SOLDOUT OF THE WHITELIST, WE WILL ALSO <span className="customFont">PROMOTE</span> THE APPEARANCE IN NFT MAGAZINES AND WE WILL BE <span className="customFont">SHARING ADVANCES OF THE PHYSICAL CARD GAME.</span>
        </div>
      </div>
      <div className="flex xl:hidden w-full mb-5 px-11">
        <div className="hidden sm:contents ">
            <img src={roadmapimg2} alt="roadmapimg2" className="w-[130px] lg:w-[206px] h-fit"/>
        </div>
        <div className="customFont text-[50px] lg:text-[80px] leading-tight font-extrabold mr-5">2</div>
        <div className="text-white text-[16px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-extrabold">
          DURING THIS PHASE WE HOPE TO ACHIEVE <span className="customFont">THE SOLDOUT</span> OF THE ENTIRE SUPPLY, AND <span className="customFont">DONATE 5%</span> TO THE ONG <span className="customFont">CHOSEN BY THE COMMUNITY.</span>
        </div>
      </div>
      <div className="flex xl:hidden w-full mb-5 px-11">
        <div className="hidden sm:contents ">
            <img src={roadmapimg3} alt="roadmapimg3" className="w-[130px] lg:w-[206px] h-fit"/>
        </div>
        <div className="text-white text-[50px] lg:text-[80px] leading-tight font-extrabold mr-5">3</div>
        <div className="text-white text-[16px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-extrabold">
          WE WILL <span className="customFont">REVEAL</span> THE NFT ART, AND THROUGHOUT THIS PHASE <span className="customFont">SNEAK PEEKS</span> WILL BE SHARED AND CONTESTS WILL BE HELD, AMONG MANY OTHER THINGS, TO KEEP THE <span className="customFont">COMMUNITY ALIVE.</span>
        </div>
      </div>
      <div className="flex xl:hidden w-full mb-5 px-11">
        <div className="hidden sm:contents ">
            <img src={roadmapimg4} alt="roadmapimg4" className="w-[130px] lg:w-[206px] h-fit"/>
        </div>
        <div className="customFont text-[50px] lg:text-[80px] leading-tight font-extrabold mr-5">4</div>
        <div className="text-white text-[16px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-extrabold">
          LAUNCH OF THE <span className="customFont">PHYSICAL TGC GAME</span> AND THROUGHOUT THIS PHASE WE WILL SHARE THE PROGRESS MADE IN THE <span className="customFont">P2E DIGITAL GAME.</span>
        </div>
      </div>
      <div className="flex xl:hidden w-full mb-5 px-11">
        <div className="hidden sm:contents ">
            <img src={roadmapimg5} alt="roadmapimg5" className="w-[130px] lg:w-[206px] h-fit"/>
        </div>
        <div className="text-white text-[50px] lg:text-[80px] leading-tight font-extrabold mr-5">5</div>
        <div className="text-white text-[16px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-extrabold">
          WE WILL TAKE <span className="customFont">THE MOONSTAS</span> TO AS MANY CONVENTIONS AS POSSIBLE, BOTH DIGITAL GAMES AND TGC, OUR MAXIMUM GOAL WOULD BE TO REACH <span className="customFont">THE GDC</span>, ALSO IN THIS PHASE WILL BE THE <span className="customFont">LAUNCH OF THE TOKEN.</span>
        </div>
      </div>
      <div className="flex xl:hidden w-full px-11">
        <div className="hidden sm:contents ">
            <img src={roadmapimg6} alt="roadmapimg6" className="w-[130px] lg:w-[206px] h-fit"/>
        </div>
        <div className="customFont text-[50px] lg:text-[80px] leading-tight font-extrabold mr-5">6</div>
        <div className="text-white text-[16px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-extrabold">
          AT THIS POINT THE <span className="customFont">P2E GAME</span> WILL HAVE ADVANCED ENOUGH TO LAUNCH AN <span className="customFont">ALPHA TEST</span> SO THAT OUR PLAYERS CAN START EXPERIMENTING WITH THE GAMEPLAY AND HELP US BUILD THE <span className="customFont">PERFECT GAME.</span>
        </div>
      </div>
      <div className="hidden xl:flex relative z-20  w-full mb-5 px-11">
        <div className="hidden sm:contents">
            <img src={roadmapimg1} alt="roadmapimg1" className="w-[130px] lg:w-[206px] h-fit"/>
        </div>
        <div className="text-white text-[50px] lg:text-[80px] leading-tight font-extrabold mr-5">1</div>
        <div className="text-white text-[16px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-extrabold mt-3">
          DURING THIS PHASE WE WANT TO ENSURE THE <span className="customFont">CONSOLIDATION OF THE COMMUNITY</span>, AS WELL AS ESTABLISH A <span className="customFont">PERFECT COLLECTION</span> BOTH TECHNICALLY AND ARTISTICALLY, IN ADDITION OUR GOAL IS TO ACHIEVE THE SOLDOUT OF THE WHITELIST, WE WILL ALSO <span className="customFont">PROMOTE</span> THE APPEARANCE IN NFT MAGAZINES AND WE WILL BE <span className="customFont">SHARING ADVANCES OF THE PHYSICAL CARD GAME.</span>
        </div>
      </div>
      <div className="hidden xl:flex relative z-20  w-full mb-5 px-11">
        <div className="hidden sm:contents">
            <img src={roadmapimg2} alt="roadmapimg2" className="w-[130px] lg:w-[206px] h-fit ml-[43%]"/>
        </div>
        <div className="customFont text-[50px] lg:text-[80px] leading-tight font-extrabold mr-5">2</div>
        <div className="text-white text-[16px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-extrabold mt-3">
          DURING THIS PHASE WE HOPE TO ACHIEVE <span className="customFont">THE SOLDOUT</span> OF THE ENTIRE SUPPLY, AND <span className="customFont">DONATE 5%</span> TO THE ONG <span className="customFont">CHOSEN BY THE COMMUNITY.</span>
        </div>
      </div>
      <div className="hidden xl:flex relative z-20  w-full mb-5 px-11">
        <div className="text-white text-[16px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-extrabold mt-3">
          WE WILL <span className="customFont">REVEAL</span> THE NFT ART, AND THROUGHOUT THIS PHASE <span className="customFont">SNEAK PEEKS</span> WILL BE SHARED AND CONTESTS WILL BE HELD, AMONG MANY OTHER THINGS, TO KEEP THE <span className="customFont">COMMUNITY ALIVE.</span>
        </div>
        <div className="text-white text-[50px] lg:text-[80px] leading-tight font-extrabold">3</div>
        <div className="hidden sm:contents ">
            <img src={roadmapimg3} alt="roadmapimg3" className="w-[130px] lg:w-[206px] h-fit mr-[17%]"/>
        </div>
      </div>
      <div className="hidden xl:flex relative z-20  w-full mb-5 px-11">
        <div className="text-white text-[16px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-extrabold mt-3">
          LAUNCH OF THE <span className="customFont">PHYSICAL TGC GAME</span> AND THROUGHOUT THIS PHASE WE WILL SHARE THE PROGRESS MADE IN THE <span className="customFont">P2E DIGITAL GAME.</span>
        </div>
        <div className="customFont text-[50px] lg:text-[80px] leading-tight font-extrabold">4</div>
        <div className="hidden sm:contents ">
            <img src={roadmapimg4} alt="roadmapimg4" className="w-[130px] lg:w-[206px] h-fit mr-[11%]"/>
        </div>
      </div>
      <div className="hidden xl:flex relative z-20  w-full mb-5 px-11">
        <div className="text-white text-[16px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-extrabold mt-3">
          WE WILL TAKE <span className="customFont">THE MOONSTAS</span> TO AS MANY CONVENTIONS AS POSSIBLE, BOTH DIGITAL GAMES AND TGC, OUR MAXIMUM GOAL WOULD BE TO REACH <span className="customFont">THE GDC</span>, ALSO IN THIS PHASE WILL BE THE <span className="customFont">LAUNCH OF THE TOKEN.</span>
        </div>
        <div className="text-white text-[50px] lg:text-[80px] leading-tight font-extrabold">5</div>
        <div className="hidden sm:contents ">
            <img src={roadmapimg5} alt="roadmapimg5" className="w-[130px] lg:w-[206px] h-fit mr-[8%]"/>
        </div>
      </div>
      <div className="hidden xl:flex relative z-20  w-full px-11">
        <div className="text-white text-[16px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-extrabold mt-3">
          AT THIS POINT THE <span className="customFont">P2E GAME</span> WILL HAVE ADVANCED ENOUGH TO LAUNCH AN <span className="customFont">ALPHA TEST</span> SO THAT OUR PLAYERS CAN START EXPERIMENTING WITH THE GAMEPLAY AND HELP US BUILD THE <span className="customFont">PERFECT GAME.</span>
        </div>
        <div className="customFont text-[50px] lg:text-[80px] leading-tight font-extrabold mt-3">6</div>
        <div className="hidden sm:contents ">
            <img src={roadmapimg6} alt="roadmapimg6" className="w-[130px] lg:w-[206px] h-fit"/>
        </div>
      </div>
    </div>
  );
};
export { Roadmap };
