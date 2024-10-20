import React from "react";
import { Link } from "react-router-dom";
function Form() {
  const ClickHandlerWholeseller = () => {};
  const ClickHandlerRetailer = () => {};
  return (
    <div className="flex w-screen h-screen font-sans">
      <div className="w-1/2 h-screen flex">
        <div className="text-lightColor mt-20 ml-16 mr-16 flex flex-col justify-around h-4/5">
          <div className="text-7xl text-headingColor">Wholesellers</div>
          <div className="text-lg gap-8 flex flex-col">
            <div>
              <div className="text-2xl text-headingColor">
                Expand Your Reach:
              </div>{" "}
              Connect with multiple retailers and increase your customer base
              effortlessly.
            </div>
            <div>
              <div className="text-2xl text-headingColor">
                Simplified Order Management:
              </div>{" "}
              Easily manage and confirm orders in one streamlined platform
            </div>
            <div>
              <div className="text-2xl text-headingColor">
                Boost Product Visibility:
              </div>{" "}
              Showcase your products in a searchable marketplace, making it
              easier for retailers to find and purchase from you.
            </div>
          </div>
          <Link to="/form/signup1">
            <div
              onClick={ClickHandlerWholeseller}
              className="text-3xl text-lightColor border-lightColor border-2 p-2 rounded-md cursor-pointer flex justify-center hover:bg-darkestColor duration-500"
            >
              Partner as Wholesaler
            </div>
          </Link>
        </div>
      </div>
      <div className="w-1/2 bg-darkestColorAdjust h-screen flex">
        <div className="text-lightColor mt-20 ml-16 mr-16 flex flex-col justify-around h-4/5 w-full">
          <div className="text-7xl text-headingColor">Retailers</div>
          <div className="text-lg  gap-8 flex flex-col">
            <div>
              <div className="text-2xl text-headingColor">
                Access Multiple Wholesalers:
              </div>{" "}
              Browse and compare products from a variety of wholesalers all in
              one place.
            </div>
            <div>
              <div className="text-2xl text-headingColor">
                Streamlined Ordering:
              </div>{" "}
              Easily place and track orders with a simplified process for
              seamless procurement.
            </div>
            <div>
              <div className="text-2xl text-headingColor">
                Efficient Product Discovery:
              </div>{" "}
              Use advanced search and filters to quickly find the best products
              for your needs.
            </div>
          </div>
          <Link to="/form/signup2">
            <div
              onClick={ClickHandlerRetailer}
              className="text-3xl w-full text-lightColor border-lightColor border-2 p-2 rounded-md cursor-pointer flex justify-center hover:bg-lightColor hover:text-darkestColor duration-500"
            >
              Explore as Retailer
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Form;
