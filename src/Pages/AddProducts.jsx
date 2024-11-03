import React from "react";
import Overlay from "../Components/AddProducts/Overlay";
import Navbar from "../Components/SubComponents/Navbar";
import Form from "../Components/AddProducts/Form";
function AddProducts() {
  return (
    <div className="h-[200vh] relative ">
      <Overlay />
      <Navbar colorPrimary={"white"} colorSecondary={"white"} />
      <Form />
      <div className="absolute bottom-10 w-screen flex justify-center z-10">
      <div className=" p-3 border-2 text-white rounded-2xl bg-[rgba(0,100,0,0.5)] cursor-pointer duration-500 hover:bg-[rgba(0,100,0,0.7)]">Add Product</div>
      </div>
    </div>
  );
}

export default AddProducts;
