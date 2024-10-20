import React, { useEffect, useState, useRef } from "react";
import WholesellerImg from "../../images/Wholeseller2.jpeg";
import Temp from "../../images/Temp.jpg"
import Form from "./Form";
import "./Style.css";
function ParallexArea() {
  const HeadingRef = useRef();
  const FormRef = useRef();
  const BackRef = useRef();
  const ClickHandler = () => {
    HeadingRef.current.style.transform = "translateY(-100vh)";
    FormRef.current.style.transform = "translateY(-100vh)";
    BackRef.current.style.filter = "brightness(0.3)"
  };
  return (
    <div>
      <div className=" w-screen absolute top-0 z-10 h-screen overflow-y-hidden">
        <div
          className=" text-headingColor font-sans  flex justify-center items-center w-screen h-screen duration-1000"
          ref={HeadingRef}
        >
          <div className=" flex-col flex items-center gap-5">
            <div className="text-6xl">Retailers. Meet. Wholesellers.</div>
            <div
              onClick={ClickHandler}
              className="text-3xl text-lightColor border-lightColor border-2 p-2 rounded-md cursor-pointer hover:bg-darkestColor duration-500"
            >
              Get Aboard
            </div>
          </div>
        </div>
        <div ref={FormRef} className=" duration-700">
          <Form />
        </div>
      </div>
      <div className=" fixed top-0 z-0 brightness-50 overflow-y-hidden h-screen">
        <img src={WholesellerImg} alt="Wholeseller" className="w-screen duration-[1000ms]" ref={BackRef}/>
      </div>
    </div>
  );
}

export default ParallexArea;
