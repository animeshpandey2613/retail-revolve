import React from "react";
import Overlay from "../Components/AllOrders/Overlay";
import Navbar from "../Components/SubComponents/Navbar2"
import Content from "../Components/AllOrders/Content";
function AllOrders() {
  return <div>
    <Navbar colorPrimary={"white"} colorSecondary={"white"}/>
    <Content />
    <Overlay />
  </div>;
}

export default AllOrders;
