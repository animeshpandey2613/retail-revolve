import React, { useEffect, useState, useRef } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import "./ResultArea.css";
function ResultArea({data}) {
  const SliderRef = useRef();
  const CardRef = useState();
  const LeftRef = useState();
  const RightRef = useState();
  const LeftRef2 = useState();
  const RightRef2 = useState();
  const [index, setIndex] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);
  
  useEffect(() => {
    setCardHeight(CardRef.current.offsetHeight);
  }, [CardRef]);

  useEffect(() => {
    SliderRef.current.style.transform = `translateX(-${
      (CardRef.current.offsetWidth + 24) * index
    }px)`;
    if (index === 0){
      LeftRef.current.style.display = "none";
      LeftRef2.current.style.opacity = "0";

    } 
    else{
      LeftRef.current.style.display = "block";
      LeftRef2.current.style.opacity = "1";

    }
    if (index === data.length - 4){
      RightRef.current.style.display = "none";
      RightRef2.current.style.opacity = "0";

    } 
    else{
      RightRef.current.style.display = "block";
      RightRef2.current.style.opacity = "1";

    } 
  }, [index, CardRef, LeftRef, RightRef]);

  return (
    <div className=" select-none w-screen flex items-center justify-center relative">
      <div className=" w-[85vw] overflow-x-hidden ">
        <div className="text-white text-3xl">Featured -</div>
        <div
          className=" grid grid-flow-col gap-6 duration-700 ml-5"
          ref={SliderRef}
        >
          {data.map((ele) => {
            return (
              <div
                className="p-2 text-lightColor mt-10 mb-10 cursor-pointer bg-darkestColorAdjust2 hover:shadow-[0_0_30px_2px_rgba(59,130,246,0.7)] hover:bg-darkestColor rounded-2xl  border-2 hover:border-white hover:border-2  hover:scale-105 duration-500"
                ref={CardRef}
              >
                <div className=" w-70 h-70">
                  <img
                    draggable="false"
                    src={ele.image}
                    alt="productImage"
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
                <div className="flex mt-4 mb-4 justify-between gap-5">
                  <div className="flex flex-col w-3/4 overflow-x-hidden whitespace-nowrap">
                    <div className="text-md text-ellipsis overflow-x-hidden">
                      {ele.wholeSeller}
                    </div>
                    <div className="text-xl text-ellipsis overflow-x-hidden">
                      {ele.name}
                    </div>
                  </div>
                  <div className="text-3xl">{ele.price}/-</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        ref={LeftRef}
        onClick={() => {
          setIndex((ele) => ele - 1);
        }}
        className="absolute top-[15.5rem] left-[4rem] text-4xl hover:shadow-[0_0_30px_2px_rgba(59,130,246,0.7)] rounded-full hover:scale-110 duration-500 cursor-pointer text-white"
      >
        <FaArrowAltCircleLeft />
      </div>
      <div
        ref={RightRef}
        onClick={() => {
          setIndex((ele) => ele + 1);
        }}
        className="absolute top-[15.5rem] right-[4rem] text-4xl hover:shadow-[0_0_30px_2px_rgba(59,130,246,0.7)] rounded-full hover:scale-110 duration-500 cursor-pointer text-white"
      >
        <FaArrowAltCircleRight />
      </div>
      <div
        style={{ height: `${cardHeight + 5}px` }}
        ref={RightRef2}
        className="absolute top-[4.5rem] right-[6.7rem] w-[10rem] z-50 modifyBlur duration-1000"
      ></div>
      <div
        style={{ height: `${cardHeight + 5}px` }}
        ref={LeftRef2}
        className="absolute top-[4.5rem] left-[6.5rem] w-[1.1rem] z-50 duration-1000  modifyBlur"
      ></div>
    </div>
  );
}

export default ResultArea;
