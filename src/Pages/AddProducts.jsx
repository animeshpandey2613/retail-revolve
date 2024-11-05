import React, { useState } from "react";
import Overlay from "../Components/AddProducts/Overlay";
import Navbar from "../Components/SubComponents/Navbar";
import Form from "../Components/AddProducts/Form";
import axios from "axios";
function AddProducts() {
  const [data, setData] = useState({
    productId:Math.random()*1000,
    productName: "",
    productPrice: "",
    discountPercentage: "",
    brandName: "",
    dietType: "",
    stockSize: "",
    flavourName: "",
    NetContentVolume: "",
    specialFeature: "",
    liquidVolume: "",
    Description: "",
    productType: "",
    imageUrl: "",
  });
  const heading = "Add Product";
  const SubmitHandler = async () => {
    const response = await axios(
      "http://localhost:2020/finaldemo/AddProduct",
      data
    );
    console.log(response);
  };
  return (
    <div className="h-[200vh] relative ">
      <Overlay />
      <Navbar colorPrimary={"white"} colorSecondary={"white"} />
      <Form Data={data} Heading={heading} />
      <div className="absolute bottom-10 w-screen flex justify-center z-10">
        <div
          onClick={SubmitHandler}
          className=" p-3 border-2 text-white rounded-2xl bg-[rgba(0,100,0,0.5)] cursor-pointer duration-500 hover:bg-[rgba(0,100,0,0.7)]"
        >
          Add Product
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
