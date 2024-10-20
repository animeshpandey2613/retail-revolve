import React from "react";
import ParallexArea from "../Components/introPage/ParallexArea";
import Navbar from "../Components/SubComponents/Navbar";
function Intro() {
  return (
    <div>
      <ParallexArea />
      <Navbar colorPrimary={"lightColor"} colorSecondary={"darkestColor"}/>
    </div>
  );
}

export default Intro;
