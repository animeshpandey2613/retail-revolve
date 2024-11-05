import React, { useState } from "react";
import Overlay from "../Components/AddProducts/Overlay";
import Navbar from "../Components/SubComponents/Navbar";
import Form from "../Components/AddProducts/Form";
import axios from "axios";

function EditProducts() {
  const [data, setData] = useState({
    productName: "SoyaBean Oil",
    productPrice: "5600",
    discountPercentage: "36",
    brandName: "Saffola",
    dietType: "Vegiterian",
    stockSize: "12",
    flavourName: "Refined",
    netContentVolume: "5 Litre",
    specialFeature: "Refined",
    liquidVolume: "5 Litre",
    description: "Aabra kadabra",
    productType:"Oil",
    imageUrl:""
  });
  const heading = "Edit Product";
  const SubmitHandler = async()=>{
    const response = await axios("http://localhost:2020/finaldemo/UpdateProductDetails", data);
    console.log(response);
  }
  return (
    <div className="h-[200vh] relative ">
      <Overlay />
      <Navbar colorPrimary={"white"} colorSecondary={"white"} />
      <Form Data={data} Heading={heading} SetData = {setData} />
      <div className="absolute bottom-10 w-screen flex justify-center z-10">
        <div onClick={SubmitHandler} className=" p-3 border-2 text-white rounded-2xl bg-[rgba(0,100,0,0.5)] cursor-pointer duration-500 hover:bg-[rgba(0,100,0,0.7)]">
          Edit Product
        </div>
      </div>
    </div>
  );
}

export default EditProducts;
