import React, { useState } from "react";
import Product from "../../images/item Image.jpg";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

function InnerPage() {
  const [Quantity, setQuantity] = useState(1);
  return (
    <div className="w-screen flex justify-center text-white mb-14">
        <div className=" flex flex-col items-center w-[85vw] min-h-[100vh] bg-[rgba(255,255,255,0.1)] overflow-hidden rounded-3xl backdrop-blur-lg">
            
      <div className="flex justify-between">
        <div className="w-1/2 flex justify-center">
          <div className="px-10 py-10">
            <InnerImageZoom
              src={Product}
              className=" object-contain rounded-xl"
            />
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="py-10 w-full flex gap-6 flex-col">
            <div>
              <div className="text-3xl">
                Saffola Gold Refined Oil|Blend of Rice Bran Oil & Sunflower
                Oil|Cooking Oil| Pro Healthy Lifestyle Edible Oil
              </div>
              <div className="mt-2 text-xl">Ashok Wholesale</div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-4">
                
                <div className="max-w-72">
                  <div>Description: </div>
                  <ul className="text-xs list-disc">
                    <li>
                      Saffola Gold’s Dual Seed Technology with goodness of 2
                      oils in 1, rice bran oil and sunflower oil, ensures a good
                      balance of MUFA, PUFA for better heart health in
                      comparison to single seed oils
                    </li>
                    <li>
                      Saffola Gold multisource edible oil helps manage your
                      cholesterol
                    </li>
                    <li>
                      With specially designed anti-oxidant system that helps
                      improve immunity
                    </li>
                    <li>
                      With Oryzanol that helps maintain cholesterol levels.
                      Saffola Gold now with 15% increased Oryzanol
                    </li>
                    <li>
                      With LOSORB Technology so that food absorbs upto 33% less
                      oil as compared to other commonly used cooking oils, basis
                      frying studies on potato, 2021
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="mr-2 ml-2 border-white border-2 rounded-xl p-3 bg-[rgba(0,0,0,0.5)]">
                  <div className="text-3xl flex items-center gap-2">
                    <div className="text-xl text-red-500">
                      {"("}-37%{")"}
                    </div>
                    <div className="flex items-center">
                      ₹499.<sub>99</sub>/-
                    </div>
                  </div>
                  <div className="flex gap-2">
                    Dilevery Expected Date:{" "}
                    <div className="text-green-300">Tomorrow</div>
                  </div>
                  <div>Free Dilevery starting from orders over ₹249.99/-</div>
                  <div className="flex gap-2">
                    Order Within:{" "}
                    <div className="text-green-300">8hr 24min</div>{" "}
                  </div>
                  <div className="text-xl text-green-600">In Stock</div>
                  <div className="flex gap-2 items-center mt-2">
                    Quantity:{" "}
                    <div>
                      <CDropdown>
                        <CDropdownToggle color="secondary">
                          {Quantity}
                        </CDropdownToggle>
                        <CDropdownMenu>
                          <CDropdownItem
                            onClick={() => {
                              setQuantity(1);
                            }}
                          >
                            1
                          </CDropdownItem>
                          <CDropdownItem
                            onClick={() => {
                              setQuantity(2);
                            }}
                          >
                            2
                          </CDropdownItem>
                          <CDropdownItem
                            onClick={() => {
                              setQuantity(3);
                            }}
                          >
                            3
                          </CDropdownItem>
                          <CDropdownItem
                            onClick={() => {
                              setQuantity(4);
                            }}
                          >
                            4
                          </CDropdownItem>
                          <CDropdownItem
                            onClick={() => {
                              setQuantity(5);
                            }}
                          >
                            5
                          </CDropdownItem>
                          <CDropdownItem
                            onClick={() => {
                              setQuantity(6);
                            }}
                          >
                            6
                          </CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
                    </div>
                  </div>
                  <div className="w-full duration-700 border-green-700 b-2 py-1 border-2 mt-2 rounded-3xl text-center hover:bg-green-100 text-lg cursor-pointer hover:text-green-700">
                    Add to Cart
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <table className="table-auto w-full text-white border-collapse text-nowrap">
                <tbody>
                  <tr className="border-b">
                    <td className="font-bold p-2">Brand:</td>
                    <td className="p-2">Saffola</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-bold p-2">Diet Type:</td>
                    <td className="p-2">Vegetarian</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-bold p-2">Flavour:</td>
                    <td className="p-2">Sunflower, Rice Bran</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-bold p-2">Net Content Volume:</td>
                    <td className="p-2">5 Litres, 5000 Millilitres</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-bold p-2">Special Feature:</td>
                    <td className="p-2">Blended</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-bold p-2">Liquid Volume:</td>
                    <td className="p-2">5 Litres</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xl mb-4 duration-700 border-yellow-700 b-2 p-2 border-2 mt-2 rounded-xl text-center hover:bg-yellow-100 cursor-pointer hover:text-yellow-700">Go to Cart</div>
      </div>
    </div>
  );
}

export default InnerPage;
