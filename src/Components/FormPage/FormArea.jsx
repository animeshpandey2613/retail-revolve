import React, { useState } from "react";
function FormArea({ data, heading, submitHandler, setter }) {
  const keyHandler = (e) => {
    setter((ele) => {
      console.log(ele);
      return {
        ...ele,
        [e.target.name]: e.target.value,
      };
    });
  };
  const [focusIndex, setFocusIndex] = useState();
  return (
    <div className="mt-[16vh] flex text-lightColor w-screen flex-col items-center z-30 absolute">
      <div className="text-6xl mt-10">{heading}</div>
      <div className="mt-20 text-2xl gap-10 flex flex-col">
        {data.map((ele, index) => {
          return (
            <div className="flex flex-col gap-4">
              <div>{ele.label}</div>
              <div
                className={`flex gap-5 border-2 border-lightColor items-center p-4 rounded-full duration-700 ${
                  focusIndex === index
                    ? "shadow-[0_0_50px_2px_rgba(59,130,246,0.7)] bg-darkestColorAdjust2 scale-[1.02]"
                    : ""
                }`}
              >
                {ele.logo}
                <input
                  name={ele.name}
                  type={ele.inputType}
                  onFocus={() => {
                    setFocusIndex(index);
                  }}
                  onKeyUpCapture={keyHandler}
                  className="bg-transparent focus:outline-none	w-96"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="mt-20 mb-4 text-3xl text-lightColor px-8 cursor-pointer bg-darkestColorAdjust hover:bg-darkestColor duration-500 hover:text-lightColor py-4 border-darkestColor border-2 hover:border-lightColor rounded-xl transition-all ease-in-out shadow-2xl hover:shadow-[0_0_200px_30px_rgba(59,130,246,0.7)]"
        onClick={submitHandler}
      >
        Let's Go!
      </div>
    </div>
  );
}

export default FormArea;
