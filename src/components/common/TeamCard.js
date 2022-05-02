import React from "react";
import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team3.png";
import team4 from "../../assets/images/team4.png";
import team5 from "../../assets/images/team5.png";



const Teamcard = (props) => {
    const chooseimg = (e) =>{
        switch(e){
            case "team1": return team1;
            case "team2": return team2; 
            case "team3": return team3; 
            case "team4": return team4;
            case "team5": return team5;
            default: break;
        }
    }

  return (
    <div className="flex justify-center py-4">
        <div>
            <div className=" bg-white p-3 w-[384px] h-[670px]">
            <div className="efct_zom_outline flex">
                <img
                src={chooseimg(props.team)}
                alt="team"
                className="efct_zom_img w-full"
                />
            </div>
            <div className="text-[25px] font-bold mt-2">{props.text1}</div>
            <div className="text-[20px] font-bold mt-2">{props.text2}</div>
            <div className="text-[15px] font-bold mt-2">{props.text3}</div>
            <div className="text-[15px] font-bold mt-2 mb-2">{props.text4}</div>
            </div>
            <div className="flex justify-start">
                <a
                href={props.link}
                target="_blank"
                rel="noreferrer"
                >
                <button className=" w-12 h-12 font-extrabold  border border-transparent hover:border-gray-200 text-[31px] text-white  bg-[#0077B5] rounded-md">
                    in
                </button>
                </a>
            </div>
        </div>
    </div>
  );
};
export { Teamcard };
