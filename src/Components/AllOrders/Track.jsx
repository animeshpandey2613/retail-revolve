import React, { useState, useRef, useEffect } from "react";

function Track({ setTrackerVisible }) {
  const ContainerRef = useRef();
  useEffect(() => {
    const mouseTracer = (e) => {
      
      if (ContainerRef.current && !ContainerRef.current.contains(e.target)) {
        setTrackerVisible(false);
      }
    };
    document.addEventListener("mousedown", mouseTracer);
    return () => {
      document.removeEventListener("mousedown", mouseTracer);
    };
  }, [setTrackerVisible]);
  const [orderStatus, setOrderStatus] = useState(3);
  const barRef = useRef();
  const pointRef = useRef();
  useEffect(() => {
    const Height = barRef.current.clientHeight;
    
    pointRef.current.style.transform = `translateY(${
      (Height * orderStatus) / 4
    }px)`;
  }, [orderStatus]);
  return (
    <div className="fixed w-screen flex justify-center items-center h-screen top-0 left-0 z-50 text-white">
      <div
        ref={ContainerRef}
        className="w-2/3 h-4/5 p-3 backdrop-blur-2xl bg-[rgba(0,0,0,0.2)] rounded-lg border-white border-2 text-xl flex justify-between"
      >
        <div className="h-full flex flex-col justify-around w-2/5">
          <div className="text-2xl">Tracking Details</div>
          <div className="ml-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="">Dilevery Status:</div>
              <div className="text-green-400">Order Shipped</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="">Wholeseller Name:</div>
              <div>Ajanta and Sons</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="">Order ID:</div>
              <div>#FPK651FD4564</div>
            </div>
          </div>
          <div>
            <div className=" cursor-pointer hover:text-white hover:bg-red-600 duration-700 rounded-md text-red-300 p-3 border-3 flex justify-center items-center border-red-500">
              Cancel Order
            </div>
          </div>
        </div>
        <div className="w-3/5 flex items-center justify-center">
          <div
            ref={barRef}
            className="h-5/6 text-sm text-nowrap flex justify-between flex-col bg-blue-400 w-1 relative border-2 border-blue-600"
          >
            <div
              ref={pointRef}
              className="duration-700 h-4 w-4 absolute left-[-0.40rem] top-[-0.1rem] bg-blue-500 border-2 border-blue-600 rounded-full"
            ></div>
            <div className="relative left-8 top-[-0.5rem]">Order Recieved</div>
            <div className="relative left-8">Confirmed by Wholeseller</div>
            <div className="relative left-8">Dispatched from Warehouse</div>
            <div className="relative left-8 bottom-[-0.7rem]">
              Out for Dilevery
            </div>
            <div className="relative left-8 bottom-[-1rem]">Order Dilvered</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Track;
