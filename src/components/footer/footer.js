import React  from "react";
import footerimg from "../../assets/images/FootImg.png";
import discmoonimg from "../../assets/images/DISCMOON 2.png";
const Footer = () => {
  return (
    <div className="grid grid-cols-2 gap-3 pl-11 mt-14">
      <div className="flex justify-start items-center">
        <div>
          <div className="flex w-full">
            <div className="flex items-center">
              <a
                  href={"https://discord.gg/eYRHGvze"}
                  target="_blank"
                  rel="noreferrer"
              >
                <button className="customButton flex  justify-center justify-items-center w-[150px] sm:w-[218px]  px-[6px] sm:px-8 py-3 text-[12px] sm:text-[16px] font-bold text-black bg-[#4EFBDF]  rounded-md">
                  JOIN OUR DISCORD
                </button>
              </a>
            </div>
            <img src={discmoonimg} alt="moonimg"/>
          </div>
          <div className="text-white text-[16px] font-bold">
            <a href="/privacypolicy" target="_blank" className="text-white active:text-red-600 hover:text-[#00F4F9]">
              <span>Privacy Policy</span> | <span>Terms & Conditions</span>
            </a>
          </div>
          <div className="text-[#D9DBE1] text-[14px]">
            © 2022 THE MOONSTAS. ALL RIGHT RESERVED
          </div>
        </div>
      </div>
      <div className="flex justify-center items-end">
        <img src={footerimg} alt="img"/>
      </div>

    </div>
  );
}
      
export {Footer};