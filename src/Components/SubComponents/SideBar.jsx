import React, { useState, useRef, useEffect } from "react";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import Product from "../../images/item Image.jpg";
function SideBar({ CartView, setCartView }) {
  const handleQuantityChange = (index, newQuantity) => {
    const updatedData = [...data];
    updatedData[index].quantity = newQuantity; // Update quantity for specific item
    setData(updatedData);
  };

  const [isOverflowing, setIsOverflowing] = useState(false);

  const sideRef = useRef();

  const [data, setData] = useState([
    {
      image: Product,
      name: "Saffola Gold Oil",
      quantity: 2,
      Wholeseller: "Ajanta Wholesale",
      price: 499.99,
    },
    {
      image: Product,
      name: "Saffola Gold Oil",
      quantity: 2,
      Wholeseller: "Ajanta Wholesale",
      price: 499.99,
    },
    {
      image: Product,
      name: "Saffola Gold Oil",
      quantity: 2,
      Wholeseller: "Ajanta Wholesale",
      price: 499.99,
    },
    {
      image: Product,
      name: "Saffola Gold Oil",
      quantity: 2,
      Wholeseller: "Ajanta Wholesale",
      price: 499.99,
    },
    {
      image: Product,
      name: "Saffola Gold Oil",
      quantity: 2,
      Wholeseller: "Ajanta Wholesale",
      price: 499.99,
    },
  ]);

  const CartRemoveHandler = (index) => {
    const newData = data.filter((item, i) => i !== index);
    setData(newData);
    console.log(newData);
  };

  useEffect(() => {
    // console.log(CartView);
    if (CartView) {
      sideRef.current.style.transform = `translateX(-${sideRef.current.offsetWidth}px)`;
      console.log(isOverflowing);
      sideRef.current.style.position = "absolute";
    } else {
      sideRef.current.style.transform = `translateX(0px)`;
      sideRef.current.style.position = "fixed";
    }
  }, [CartView, isOverflowing]);
  useEffect(() => {
    const mouseTracer = (e) => {
      if (sideRef.current && !sideRef.current.contains(e.target)) {
        setCartView(false);
      }
    };
    document.addEventListener("mousedown", mouseTracer);
    return () => {
      document.removeEventListener("mousedown", mouseTracer);
    };
  }, [setCartView]);

  useEffect(() => {
    const handleResize = () => {
      if (sideRef.current) {
        const isOverflowingHeight =
          sideRef.current.scrollHeight > window.innerHeight;
        setIsOverflowing(isOverflowingHeight);
        sideRef.current.style.minHeight = `${document.documentElement.scrollHeight}px`;
      }
    };

    // Check on mount and on window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={sideRef}
      className={`duration-700 fixed -right-2/3 w-2/3 top-0 z-[200] min-h-full backdrop-blur-sm  text-white border-l-2 border-white flex flex-col items-center`}
      style={{
        background: "linear-gradient(270deg, rgba(0,0,0,1), rgba(0,0,0,0.2))",
      }}
    >
      <div className="mt-5 w-5/6">
        <div className="text-3xl text-center">Cart Items</div>
        <div className="mt-5 grid grid-cols-2 gap-4">
          {data.map((ele, index) => {
            return (
              <div className="flex justify-between w-96 border-1 p-2 rounded-xl bg-[rgba(0,0,0,0.3)]">
                <div className="w-1/2 overflow-hidden">
                  <img
                    src={ele.image}
                    alt="Product"
                    className="object-contain rounded-xl w-full"
                  />
                  <div className="text-center w-full overflow-hidden whitespace-nowrap overflow-ellipsis">
                    {ele.name}
                  </div>
                </div>
                <div className="w-max gap-3 flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="text-lg">price:</div>
                    <div>{ele.price}/-</div>
                  </div>
                  <div className="flex items-center justify-between gap-1">
                    <div>quantity:</div>
                    <div>
                      <CDropdown>
                        <CDropdownToggle color="secondary">
                          {ele.quantity}
                        </CDropdownToggle>
                        <CDropdownMenu>
                          <CDropdownItem
                            onClick={() => {
                              handleQuantityChange(index, 1);
                            }}
                          >
                            1
                          </CDropdownItem>
                          <CDropdownItem
                            onClick={() => {
                              handleQuantityChange(index, 2);
                            }}
                          >
                            2
                          </CDropdownItem>
                          <CDropdownItem
                            onClick={() => {
                              handleQuantityChange(index, 3);
                            }}
                          >
                            3
                          </CDropdownItem>
                          <CDropdownItem
                            onClick={() => {
                              handleQuantityChange(index, 4);
                            }}
                          >
                            4
                          </CDropdownItem>
                          <CDropdownItem
                            onClick={() => {
                              handleQuantityChange(index, 5);
                            }}
                          >
                            5
                          </CDropdownItem>
                          <CDropdownItem
                            onClick={() => {
                              handleQuantityChange(index, 6);
                            }}
                          >
                            6
                          </CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
                    </div>
                  </div>
                  <div>{ele.Wholeseller}</div>
                  <div
                    onClick={() => CartRemoveHandler(index)}
                    className="p-1 border-2 border-red-700 text-red-700 rounded-lg mt-2 text-center hover:bg-red-950 hover:text-white cursor-pointer duration-700"
                  >
                    Remove
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        onClick={() => {
          setCartView(false);
        }}
        className="mt-5 p-2 mb-5 border-2 border-green-600 text-green-600 rounded-lg cursor-pointer hover:bg-green-900 hover:text-white"
      >
        Place Order
      </div>
    </div>
  );
}

export default SideBar;
