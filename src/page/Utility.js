import React from "react";
import utilityimg1 from "../assets/images/utilityimg1.png";
import utilityimg2 from "../assets/images/utilityimg2.png";

const Utility = () => {
  return (
<div className=" w-full" id="utility">
      <div className="text-[25px] sm:text-[43px] md:text-[52px] lg:text-[72px] leading-tight font-extrabold mt-14 mb-5 px-11">
        <span className="text-[#00F4F9]">THE</span> <span className="text-white">UTILITY</span>                
      </div>
      <div className="flex w-full px-11">
        <div className="w-full lg:w-4/5 text-white font-extrabold text-[16px] sm:text-[22px] md:text-[24px] lg:text-[28px]">
          <div className="flex mb-5">
            OWNING A MOONSTA, GIVES YOU THE KEY TO OUR UNIVERSE, AND ALL ITS BENEFITS, WHICH YOU WILL BE ABLE TO COLLECT AS IT MATURES AND GROWS.
          </div>
          <div className="flex mb-5">
            THE FIRST BENEFIT THAT THE HOLDERS WILL BE ABLE TO CLAIM, WILL BE THE DELIVERY OF THE HOLDER PACK OF THE PHYSICAL TGC GAME, THIS WILL BE ABLE TO BE CLAIMED AT THE MOMENT THE GAME IS LAUNCHED.
          </div>
          <div className="flex">
              THE HOLDER PACK WILL CONSIST OF THE FOLLOWING;
          </div>
          <div className="flex">
              - 1 SEALED BOX OF THE FIRST EDITION OF THE MOONSTAS "GENESIS" WITH 36 PACKS IN IT.
          </div>
          <div className="flex">
              - 2 GENESIS BOOSTER PACKS
          </div>
          <div className="flex mb-5">
              WE ESTIMATE A PRODUCT VALUE IN TERMS OF MARKET PRICE OF ABOUT 80$.
          </div>
          <div className="flex mb-5">
              THE SECOND BENEFIT THAT HOLDERS WILL BE ABLE TO CLAIM, WILL BE THE AIRDROP OF THEIR PORTION OF THE TOKEN POOL, TO WHICH A MINIMUM OF 100.000 DOLLARS WILL BE INJECTED.
          </div>
          <div className="flex mb-5">
              THE SECOND BENEFIT THAT HOLDERS WILL BE ABLE TO CLAIM, WILL BE THE AIRDROP OF THEIR PORTION OF THE TOKEN POOL, TO WHICH A MINIMUM OF 100.000 DOLLARS WILL BE INJECTED.
          </div>
          <div className="flex">
              IN ADDITION TO THIS, HOLDERS WILL HAVE BENEFITS IN THE YET TO BE ANNOUNCED P2E GAME, AND MUCH MORE.
          </div>
        </div>
        <div className="hidden lg:grid place-content-between w-full lg:w-1/5">
            <img src={utilityimg1} alt="utilityimg1"/>
            <img src={utilityimg2} alt="utilityimg2"/>
        </div>
      </div>
    </div>
  );
};
export {Utility};