import React, { useState } from "react";
import Overlay from "../Components/AddProducts/Overlay";
import Navbar from "../Components/SubComponents/Navbar2";
import Form from "../Components/AddProducts/Form";
import axios from "axios";
function AddProducts() {
  const [data, setData] = useState({
    productId: Math.floor(Math.random() * 1000).toString(),
    productName: "",
    productPrice: "",
    wholeseller_aadhar: "758494029384",
    discountPercentage: "",
    brandName: "",
    dietType: "",
    stockSize: "",
    flavourName: "",
    netContentVolume: "",
    specialFeature: "",
    liquidVolume: "",
    description: "",
    productType: "",
    imageUrl: "",
  });
  const heading = "Add Product";
  const SubmitHandler = async () => {
    const response = await axios.post(
      "http://localhost:2020/finaldemo/AddProduct",
      data
    );
    console.log(response);
    // console.log(data);
  };
  return (
    <div className="h-[200vh] relative ">
      <Overlay />
      <Navbar colorPrimary={"white"} colorSecondary={"white"} />
      <Form Data={data} Heading={heading} SetData={setData} />
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
