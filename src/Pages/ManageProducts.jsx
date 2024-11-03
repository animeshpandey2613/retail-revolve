import React from "react";
import Overlay from "../Components/ManageProducts/Overlay";
import Navbar from "../Components/SubComponents/Navbar";
import Items from "../Components/ManageProducts/Items";

function ManageProducts() {
  return (
    <div>
      <Overlay />
      <Navbar colorPrimary={"white"} />
      <Items />
    </div>
  );
}

export default ManageProducts;
