import React from "react";
import Overlay from "../Components/ViewOrders/Overlay";
import Navbar from "../Components/SubComponents/Navbar2";
import Content from "../Components/ViewOrders/Content";

function ViewOrders() {
  return (
    <div>
      <Navbar colorPrimary={"white"} colorSecondary={"white"} />
      <Content />
      <Overlay />
    </div>
  );
}

export default ViewOrders;
