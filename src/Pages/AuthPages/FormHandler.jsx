import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { TbLicense } from "react-icons/tb";
import { RiLockPasswordLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { MdOutlineCategory } from "react-icons/md";
import axios from "axios";
import Form from "./Form";
function FormHandler() {
  const params = useParams();
  const type = params.type;

  //

  const [loginInfo, setLoginInfo] = useState({
    aadhar_no: "",
    password: "",
  });

  const [wholesellerInfo, setWholesellerInfo] = useState({
    full_name: "",
    category: "",
    email: "",
    aadhar_card: "",
    phone: "",
    address: "",
    license_no: "",
    password: "",
    confirm_password: "",
  });

  const [retailerInfo, setRetailerInfo] = useState({
    full_name: "",
    email: "",
    aadhar_card: "",
    phone: "",
    address: "",
    license_no: "",
    password: "",
    confirm_password: "",
  });

  //

  const dataLogin = [
    {
      label: "Aadhar",
      inputType: "text",
      name: "aadhar_no",
      logo: <AiOutlineMail />,
      eye: false,
    },
    {
      label: "Password",
      name: "password",
      inputType: "text",
      logo: <RiLockPasswordLine />,
      eye: false,
    },
  ];
  const dataWholeseller = [
    {
      label: "Full Name",
      inputType: "text",
      name: "full_name",
      logo: <CiUser />,
      eye: false,
    },
    {
      label: "Category",
      inputType: "text",
      name: "category",
      logo: <MdOutlineCategory />,
      eye: false,
    },
    {
      label: "Email Address",
      inputType: "text",
      name: "email_address",
      logo: <AiOutlineMail />,
      eye: false,
    },
    {
      label: "Aadhar Card Number",
      inputType: "text",
      name: "adhaar_card",
      logo: <FaRegAddressCard />,
      eye: true,
    },
    {
      label: "Phone Number",
      name: "phone_number",
      inputType: "text",
      logo: <CiPhone />,
      eye: false,
    },
    {
      label: "Address",
      name: "address",
      inputType: "text",
      logo: <IoLocationOutline />,
      eye: false,
    },
    {
      label: "License Number",
      inputType: "text",
      name: "license_no",
      logo: <TbLicense />,
      eye: false,
    },
    {
      label: "Password",
      name: "password",
      inputType: "text",
      logo: <RiLockPasswordLine />,
      eye: false,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      inputType: "password",
      logo: <RiLockPasswordLine />,
      eye: true,
    },
  ];
  const dataRetailer = [
    {
      label: "Full Name",
      inputType: "text",
      logo: <CiUser />,
      name: "full_name",
      eye: false,
    },
    {
      label: "Email Address",
      inputType: "text",
      name: "email_address",
      logo: <AiOutlineMail />,
      eye: false,
    },
    {
      label: "Aadhar Card Number",
      inputType: "text",
      logo: <FaRegAddressCard />,
      name: "adhaar_card",
      eye: true,
    },
    {
      label: "Phone Number",
      inputType: "text",
      name: "phone_number",
      logo: <CiPhone />,
      eye: false,
    },
    {
      label: "Address",
      inputType: "text",
      name: "address",
      logo: <IoLocationOutline />,
      eye: false,
    },
    {
      label: "License Number",
      inputType: "text",
      name: "license_no",
      logo: <TbLicense />,
      eye: false,
    },
    {
      label: "Password",
      inputType: "text",
      name: "password",
      logo: <RiLockPasswordLine />,
      eye: false,
    },
    {
      label: "Confirm Password",
      inputType: "password",
      name: "confirm_password",
      logo: <RiLockPasswordLine />,
      eye: true,
    },
  ];

  //

  const headingWholeseller = "Partner as Wholeseller";
  const headingRetailer = "Explore as Retailer";
  const headingLogin = "Welcome Back!!";

  //

  const submitHandlerRetailer = async () => {
    const resp = await axios.post(
      "http://localhost:2020/finaldemo/RegistrationServlet",
      { ...dataRetailer, user_type: "retailer" }
    );
    console.log(resp);
  };
  const submitHandlerWholeseller = async () => {
    const resp = await axios.post(
      "http://localhost:2020/finaldemo/RegistrationServlet",
      { ...dataWholeseller, user_type: "wholeseller" }
    );
    console.log(resp);
  };
  const submitHandlerLogin = async () => {
    const resp = await axios.post(
      "http://localhost:2020/finaldemo/LoginServlet",
      { ...dataLogin }
    );
    console.log(resp);
  };

  //

  if (type === "signup1") {
    return (
      <Form
        data={dataWholeseller}
        heading={headingWholeseller}
        setter={setWholesellerInfo}
        submitHandler={submitHandlerWholeseller}
      />
    );
  }
  if (type === "signup2") {
    return (
      <Form
        data={dataRetailer}
        heading={headingRetailer}
        setter={setRetailerInfo}
        submitHandler={submitHandlerRetailer}
      />
    );
  } else {
    return (
      <Form
        data={dataLogin}
        heading={headingLogin}
        setter={setLoginInfo}
        submitHandler={submitHandlerLogin}
      />
    );
  }
}

export default FormHandler;
