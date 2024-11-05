import React from "react";
import Overlay from "../Components/ManageProducts/Overlay";
import Navbar from "../Components/SubComponents/Navbar2";
import Items from "../Components/ManageProducts/Items";

function ManageProducts() {
  return (
    <div>
      <Overlay />
      <Items />
      <Navbar colorPrimary={"white"} />
    </div>
  );
}

export default ManageProducts;
