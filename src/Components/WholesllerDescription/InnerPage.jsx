import React, { useState } from "react";
import Product from "../../images/item Image.jpg";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import "@coreui/coreui/dist/css/coreui.min.css";

function InnerPage() {
  const data = [
    {
      wholeSeller: "Ajanta wholeseller",
      image: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      image: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      image: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      image: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      image: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      image: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      image: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      image: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      image: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      image: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
  ];
  return (
    <div className="w-screen flex justify-center text-white mb-14">
      <div className=" flex flex-col items-center w-[85vw] min-h-[100vh] bg-[rgba(255,255,255,0.1)] overflow-hidden rounded-3xl backdrop-blur-lg">
        <div className="mt-5 text-3xl">Ajanta Wholesale</div>
        <div className="mt-8 flex items-center flex-col gap-10 w-full">
          <div className="text-2xl p-2 underline">Contact Details</div>
          <div className="w-full grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center">
              <div className="font-semibold">Email Address:</div>
              <div className="ml-2">ajantawholesale@gmail.com</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="font-semibold">Category:</div>
              <div className="ml-2">Groceries</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="font-semibold">Phone number:</div>
              <div className="ml-2">+91 93021 06411</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="font-semibold">License Number:</div>
              <div className="ml-2">#546122</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="font-semibold">Number of products available:</div>
              <div className="ml-2">64</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="font-semibold">Address:</div>
              <div className="ml-2">Chappri Nagar, Vidisha</div>
            </div>
          </div>
        </div>
        <div className="mt-8 p-2 rounded-md cursor-pointer hover:bg-green-900 duration-500 hover:scale-105 border-green-600 border-2">
          Enquire Wholeseller?
        </div>
        <div className="mt-16 text-2xl underline">Products</div>
        <div className="m-5 gap-10 flex flex-wrap">
          {data.map((ele) => {
            return (
              <div className="p-2 w-64 text-lightColor mt-10 mb-10 cursor-pointer bg-darkestColorAdjust2 hover:shadow-[0_0_30px_2px_rgba(59,130,246,0.7)] hover:bg-darkestColor rounded-2xl  border-2 hover:border-white hover:border-2  hover:scale-105 duration-500">
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
    </div>
  );
}

export default InnerPage;
