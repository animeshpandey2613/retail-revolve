import React, { useState } from "react";
import Track from "./Track";
import Product from "../../images/item Image.jpg";
function Content() {
    const [TrackerVisible, setTrackerVisible] = useState(false)
  const [data, setData] = useState([
    {
      image: Product,
      name: "Saffola Gold Oil",
      quantity: 2,
      RetailerName: "Debroglie Wholesale",
      price: 499.99,
    },
    {
      image: Product,
      name: "Saffola Gold Oil",
      quantity: 2,
      RetailerName: "Debroglie Wholesale",
      price: 499.99,
    },
    {
      image: Product,
      name: "Saffola Gold Oil",
      quantity: 2,
      RetailerName: "Debroglie Wholesale",
      price: 499.99,
    },
    {
      image: Product,
      name: "Saffola Gold Oil",
      quantity: 2,
      RetailerName: "Debroglie Wholesale",
      price: 499.99,
    },
    {
      image: Product,
      name: "Saffola Gold Oil",
      quantity: 2,
      RetailerName: "Debroglie Wholesale",
      price: 499.99,
    },
  ]);


  return (
    <>
      {TrackerVisible && <Track setTrackerVisible={setTrackerVisible}/>}
      <div className="absolute z-10 text-white w-screen flex items-center justify-center mt-28 ">
        <div className="w-3/4 backdrop-blur-sm border-2 border-white rounded-lg">
          <div className="w-full flex items-center justify-center p-4 text-2xl border-b-2 bg-[rgba(0,0,0,0.25)]">
            <div>Orders</div>
          </div>
          <div className="flex flex-col items-center gap-4 p-10">
            {data.map((ele, index) => {
              return (
                <div className=" w-full h-96 border-1 p-4 rounded-xl bg-[rgba(0,0,0,0.3)] flex flex-col justify-between">
                  <div className="h-5/6 flex justify-around">
                    <div className="h-full overflow-hidden">
                      <img
                        src={ele.image}
                        alt="Product"
                        className="object-contain rounded-xl h-full"
                      />
                    </div>
                    <div className="w-max justify-between flex">
                      <div>
                        <div className="text-2xl font-bold">
                          Delivered On 7th Oct 2024
                        </div>
                        <div>Package was handled to the wender</div>
                        <div className="mt-4 text-xl">{ele.name}</div>
                        <div onClick={()=>setTrackerVisible(true)} className="text-green-500 bg-[rgba(0,100,0,0.2)] hover:bg-[rgba(0,100,0,0.5)] hover:text-white duration-700  mt-2 p-2 border-2 border-white rounded-xl flex items-center justify-center cursor-pointer">
                          Update Tracking Details
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="p-2 flex items-center justify-center border-2 border-white rounded-xl cursor-pointer">
                        Contact Retailer
                      </div>
                      <div className="p-2 text-red-400 hover:text-white hover:bg-[rgba(100,0,0,0.5)] duration-700 bg-[rgba(100,0,0,0.2)] border-2 border-white rounded-xl flex items-center justify-center cursor-pointer">
                        Decline Order
                      </div>
                    </div>
                  </div>
                  <div className="h-1/6 flex justify-between backdrop-blur-lg rounded-b-lg mt-3 p-2">
                    <div className="flex gap-5 items-center text-center ml-3">
                      <div>
                        <div>Order Placed</div>
                        <div>22-November-2024</div>
                      </div>
                      <div>
                        <div>Total</div>
                        <div>56000/-</div>
                      </div>
                      <div>
                        <div>Ship to</div>
                        <div>Animesh Pandey</div>
                      </div>
                    </div>
                    <div className="mr-5 flex gap-3 items-center">
                      <div className="border-2 border-gray-200 p-2 rounded-lg cursor-pointer">
                        View Order Details
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
