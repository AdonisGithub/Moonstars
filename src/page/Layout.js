import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Home } from "./Home";
import { Roadmap } from "./Roadmap";
import { Whatisthemoonstas } from "./Whatisthemoonstas";
import { TheTeam } from "./TheTeam";
import { Utility } from "./Utility";
import { TheLore } from "./TheLore";
const Layout = () => {

  return (
    <div className="bg-[#0B0D17]">
      <Header />
      <Home />
      <Whatisthemoonstas />
      <Roadmap/>
      <TheTeam />
      <Utility/>
      <TheLore/>
      <Footer />
    </div>
  );
};
export { Layout };
