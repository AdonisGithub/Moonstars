import React from "react";
import { Teamcard } from "../components/common/TeamCard";


const TheTeam = () => {
  return (
    <div>
      <div className=" w-full" id="theteam">
        <div className="text-[25px] sm:text-[43px] md:text-[52px] lg:text-[72px] leading-tight font-extrabold mt-14 mb-5 px-11">
          <span className="text-[#00F4F9]">THE</span> <span className="text-white">TEAM</span>                
        </div>
        <div className="w-full grid lg:hidden">
          <Teamcard
            team = {"team1"}
            text1 = {"JAIRO PÉREZ"}
            text2 = {"@JPEREZ.ART"}
            text3 = {"JAIRO IS A 3D GENERALIST AND CRYPTOCURRENCY ENTHUSIAST, WHO AFTER WORKING ON A FEW NFT PROJECTS, GOT TIRED OF SEEING HOW THINGS WORKED AND DECIDED TO CREATE HIS OWN PROJECT."}
            text4 = {"FOUNDER AND ARTISTIC DIRECTOR"}
            link = {"https://www.linkedin.com/in/jairo-perez-0970591a4/"}
          />
          <Teamcard
            team = {"team2"}
            text1 = {"JORDI ROMERO"}
            text2 = {""}
            text3 = {"JORDI ROMERO IS AN ADVERTISING STUDENT AND AN ENTHUSIAST OF CRYPTOCURRENCIES AND THE NFT WORLD, MOTIVATED TO CREATE A COMMUNITY AND SHAPE THE PURPOSE OF THIS PROJECT."}
            text4 = {"FOUNDER AND MARKETING DIRECTOR"}
            link = {"https://www.linkedin.com/in/jordi-romero-vicente-82b58a238/"}
          />
          <Teamcard
            team = {"team3"}
            text1 = {"NÉSTOR CARRETERO"}
            text2 = {""}
            text3 = {"NÉSTOR CARRETERO SPECIALIZES IN INTERNATIONAL TRADE, HIS MAIN MOTIVATION IS TO DEVELOP A SOLID INTERNATIONALIZATION PLAN FOR OUR PRODUCT. HIS GOAL IS TO CONSOLIDATE THE MOONSTAS IN ALL ITS POSSIBLE SCOPE."}
            text4 = {"FOUNDER TEAM, DISTRIBUTION MANAGER"}
            link = {"https://www.linkedin.com/in/n%C3%A9stor-carretero-crespi/"}
          />
          <Teamcard
            team = {"team4"}
            text1 = {"JOAN ALBANI"}
            text2 = {""}
            text3 = {"JOAN ALBANI IS A PASIONAL WRITER WHO LOVES FANTASY, MOREOVER, HIS KNOWLEDGE OF HISTORY ALLOWS HIM TO ELABORATE A UNIVERSE WITH A UNIQUE FRAMEWORK."}
            text4 = {"FOUNDER TEAM AND LORE DIRECTOR"}
            link = {"https://www.linkedin.com/in/joan-pi%C3%B1as-albani-344853189/"}
          />
          <Teamcard
              team = {"team5"}
              text1 = {"WANG QIANJIN"}
              text2 = {""}
              text3 = {"WANG IS A SENIOR BLOCKCHAIN DEVELOPER. AS A SELF-TAUGHT PROGRAMMER, HE HAS DEVELOPED BUNCH OF BLOCKCHAIN PROJECTS."}
              text4 = {""}
              link = {"https://www.linkedin.com/in/"}
            />
        </div>
        <div className="w-full hidden lg:grid lg:grid-cols-2 xl:hidden">
          <Teamcard
            team = {"team1"}
            text1 = {"JAIRO PÉREZ"}
            text2 = {"@JPEREZ.ART"}
            text3 = {"JAIRO IS A 3D GENERALIST AND CRYPTOCURRENCY ENTHUSIAST, WHO AFTER WORKING ON A FEW NFT PROJECTS, GOT TIRED OF SEEING HOW THINGS WORKED AND DECIDED TO CREATE HIS OWN PROJECT."}
            text4 = {"FOUNDER AND ARTISTIC DIRECTOR"}
            link = {"https://www.linkedin.com/in/jairo-perez-0970591a4/"}
          />
          <Teamcard
            team = {"team2"}
            text1 = {"JORDI ROMERO"}
            text2 = {""}
            text3 = {"JORDI ROMERO IS AN ADVERTISING STUDENT AND AN ENTHUSIAST OF CRYPTOCURRENCIES AND THE NFT WORLD, MOTIVATED TO CREATE A COMMUNITY AND SHAPE THE PURPOSE OF THIS PROJECT."}
            text4 = {"FOUNDER AND MARKETING DIRECTOR"}
            link = {"https://www.linkedin.com/in/jordi-romero-vicente-82b58a238/"}
          />
          <Teamcard
            team = {"team3"}
            text1 = {"NÉSTOR CARRETERO"}
            text2 = {""}
            text3 = {"NÉSTOR CARRETERO SPECIALIZES IN INTERNATIONAL TRADE, HIS MAIN MOTIVATION IS TO DEVELOP A SOLID INTERNATIONALIZATION PLAN FOR OUR PRODUCT. HIS GOAL IS TO CONSOLIDATE THE MOONSTAS IN ALL ITS POSSIBLE SCOPE."}
            text4 = {"FOUNDER TEAM, DISTRIBUTION MANAGER"}
            link = {"https://www.linkedin.com/in/n%C3%A9stor-carretero-crespi/"}
          />
          <Teamcard
            team = {"team4"}
            text1 = {"JOAN ALBANI"}
            text2 = {""}
            text3 = {"JOAN ALBANI IS A PASIONAL WRITER WHO LOVES FANTASY, MOREOVER, HIS KNOWLEDGE OF HISTORY ALLOWS HIM TO ELABORATE A UNIVERSE WITH A UNIQUE FRAMEWORK."}
            text4 = {"FOUNDER TEAM AND LORE DIRECTOR"}
            link = {"https://www.linkedin.com/in/joan-pi%C3%B1as-albani-344853189/"}
          />
        </div>
        <div className="w-full hidden lg:grid xl:hidden">
          <Teamcard
              team = {"team5"}
              text1 = {"WANG QIANJIN"}
              text2 = {""}
              text3 = {"WANG IS A SENIOR BLOCKCHAIN DEVELOPER. AS A SELF-TAUGHT PROGRAMMER, HE HAS DEVELOPED BUNCH OF BLOCKCHAIN PROJECTS."}
              text4 = {""}
              link = {"https://www.linkedin.com/in/"}
            />
        </div>
        <div className="w-full hidden xl:grid xl:grid-cols-3">
          <Teamcard
            team = {"team1"}
            text1 = {"JAIRO PÉREZ"}
            text2 = {"@JPEREZ.ART"}
            text3 = {"JAIRO IS A 3D GENERALIST AND CRYPTOCURRENCY ENTHUSIAST, WHO AFTER WORKING ON A FEW NFT PROJECTS, GOT TIRED OF SEEING HOW THINGS WORKED AND DECIDED TO CREATE HIS OWN PROJECT."}
            text4 = {"FOUNDER AND ARTISTIC DIRECTOR"}
            link = {"https://www.linkedin.com/in/jairo-perez-0970591a4/"}
          />
          <Teamcard
            team = {"team2"}
            text1 = {"JORDI ROMERO"}
            text2 = {""}
            text3 = {"JORDI ROMERO IS AN ADVERTISING STUDENT AND AN ENTHUSIAST OF CRYPTOCURRENCIES AND THE NFT WORLD, MOTIVATED TO CREATE A COMMUNITY AND SHAPE THE PURPOSE OF THIS PROJECT."}
            text4 = {"FOUNDER AND MARKETING DIRECTOR"}
            link = {"https://www.linkedin.com/in/jordi-romero-vicente-82b58a238/"}
          />
          <Teamcard
            team = {"team3"}
            text1 = {"NÉSTOR CARRETERO"}
            text2 = {""}
            text3 = {"NÉSTOR CARRETERO SPECIALIZES IN INTERNATIONAL TRADE, HIS MAIN MOTIVATION IS TO DEVELOP A SOLID INTERNATIONALIZATION PLAN FOR OUR PRODUCT. HIS GOAL IS TO CONSOLIDATE THE MOONSTAS IN ALL ITS POSSIBLE SCOPE."}
            text4 = {"FOUNDER TEAM, DISTRIBUTION MANAGER"}
            link = {"https://www.linkedin.com/in/n%C3%A9stor-carretero-crespi/"}
          />
        </div>
        <div className="w-full hidden xl:flex xl:justify-evenly">
          <Teamcard
              team = {"team4"}
              text1 = {"JOAN ALBANI"}
              text2 = {""}
              text3 = {"JOAN ALBANI IS A PASIONAL WRITER WHO LOVES FANTASY, MOREOVER, HIS KNOWLEDGE OF HISTORY ALLOWS HIM TO ELABORATE A UNIVERSE WITH A UNIQUE FRAMEWORK."}
              text4 = {"FOUNDER TEAM AND LORE DIRECTOR"}
              link = {"https://www.linkedin.com/in/joan-pi%C3%B1as-albani-344853189/"}
            />
          <Teamcard
              team = {"team5"}
              text1 = {"WANG QIANJIN"}
              text2 = {""}
              text3 = {"WANG IS A SENIOR BLOCKCHAIN DEVELOPER. AS A SELF-TAUGHT PROGRAMMER, HE HAS DEVELOPED BUNCH OF BLOCKCHAIN PROJECTS."}
              text4 = {""}
              link = {"https://www.linkedin.com/in/"}
            />
        </div>
      </div>
    </div>
  );
};
export {TheTeam };
