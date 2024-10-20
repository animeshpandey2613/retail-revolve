import React, { useEffect, useState, useRef } from "react";
import style from "./Form.module.css";
import background from "../../images/LoginFormBack.webp";
function Overlay() {
  const BackRef = useRef();
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (BackRef.current) {
        BackRef.current.style.transform = `translateY(${window.scrollY}px)`;
        BackRef.current.style.filter = `brightness(${
          0.35 -
          (0.35 * window.scrollY) /
            (document.documentElement.scrollHeight - window.innerHeight + 500)
        })`;
      }
    });
  });
  return (
    <div className="w-screen absolute top-0">
      <img
        ref={BackRef}
        src={background}
        alt="background"
        className="w-screen h-screen object-cover brightness-[0.35]"
      />
      {/* <div className={style.FormOverlay}>
      </div> */}
    </div>
  );
}

export default Overlay;
