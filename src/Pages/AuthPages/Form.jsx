import React from "react";
import Navbar from "../../Components/SubComponents/Navbar";
import Overlay from "../../Components/FormPage/Overlay";
import FormArea from "../../Components/FormPage/FormArea";
function Form({ data, heading, submitHandler, setter }) {
  return (
    <div className="font-sans">
      <Overlay />
      <Navbar colorPrimary="lightColor" colorSecondary="darkestColor" />
      <FormArea data={data} heading={heading} submitHandler={submitHandler} setter={setter}/>
    </div>
  );
}

export default Form;
