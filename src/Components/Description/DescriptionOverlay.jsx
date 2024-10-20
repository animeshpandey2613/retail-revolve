import React, { useState, useRef, useEffect } from "react";
import Navbar from "../SubComponents/Navbar";
import InnerPage from "./InnerPage";
import Back from "../../images/Retailer Clipart.jpeg";
function DescriptionOverlay() {
  return (
    <div className="h-screen bg-black">
      <div className="absolute h-screen w-screen  z-0 duration-1000 bg-black">
        <div
          className=" fixed w-screen bg-black top-0  left-0 z-0"
        >
          <img
            src={Back}
            alt="Back"
            className=" h-screen w-full object-cover brightness-100 blur-sm opacity-40"
          />
        </div>
        <div className="absolute z-10 ">
          <Navbar colorPrimary={"lightColor"} />
          <div className="mt-24">
            <InnerPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescriptionOverlay;
