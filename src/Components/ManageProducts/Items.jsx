import React from "react";
import Product from "../../images/item Image.jpg";

function Items() {
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
    <div className="absolute w-screen flex justify-center z-20 top-20">
      <div className="w-[90vw] p-10 backdrop-blur-md text-white mt-20">
        <div className="w-full text-center text-3xl">All Products</div>
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
                <div className="flex mt-4 mb-2 justify-between gap-5">
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
                <div className=" w-full flex justify-around gap-2">
                  <div className="px-4 py-2 border-2 border-red bg-[rgba(100,0,0,0.3)] duration-500 rounded-lg hover:bg-[rgba(100,0,0,0.6)]">
                    Remove Product
                  </div>
                  <div className="px-4 py-2 border-2 border-red bg-[rgba(0,100,0,0.3)] duration-500 rounded-lg hover:bg-[rgba(0,100,0,0.6)]">
                    Edit Product
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Items;
