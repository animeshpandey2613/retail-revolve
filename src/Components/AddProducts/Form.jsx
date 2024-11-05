import React, { useEffect, useRef } from "react";

function Form({ Heading, Data, SetData }) {
  const PageRef = useRef();
  const ContentRef = useRef();

  useEffect(() => {
    const ScrollTrigger = () => {
      if (PageRef.current && ContentRef.current && ContentRef.current) {
        PageRef.current.style.transform = `translateX(-${
          (window.scrollY / document.documentElement.scrollHeight) *
          ContentRef.current.offsetWidth
        }px)`;
      }
    };

    document.addEventListener("scroll", ScrollTrigger);

    return () => {
      document.removeEventListener("scroll", ScrollTrigger);
    };
  }, []);

  const KeyHandler = (e) => {
    SetData((temp) => ({
      ...temp,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div
      ref={PageRef}
      className="fixed z-10 text-white h-screen flex items-center"
    >
      <div className="w-[25vw] ml-10 color-white flex items-center justify-center ">
        <div className="text-9xl">{Heading}</div>
      </div>
      <div
        ref={ContentRef}
        className="h-[60vh] ml-72 w-[120vw] backdrop-blur-lg rounded-3xl"
      >
        <div className="grid grid-cols-5 m-20">
          <div className="flex flex-col gap-5">
            <div>
              <div>Product Name</div>
              <div>
                <input
                  placeholder={Data.productName || "Enter Product Name"}
                  onKeyUpCapture={KeyHandler}
                  name="productName"
                  type="text"
                  className="px-3 py-2 bg-white rounded-3xl text-black outline-none"
                />
              </div>
            </div>
            <div>
              <div>Product Price</div>
              <div>
                <input
                  placeholder={Data.productPrice || "Enter Product Price"}
                  onKeyUpCapture={KeyHandler}
                  name="productPrice"
                  type="text"
                  className="px-3 py-2 bg-white rounded-3xl text-black outline-none"
                />
              </div>
            </div>
            <div>
              <div>Discount Percentage</div>
              <div>
                <input
                  placeholder={
                    Data.discountPercentage || "Enter Discount Percentage"
                  }
                  onKeyUpCapture={KeyHandler}
                  name="discountPercentage"
                  type="text"
                  className="px-3 py-2 bg-white rounded-3xl text-black outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <div>Brand Name</div>
              <div>
                <input
                  placeholder={Data.brandName || "Enter Brand Name"}
                  onKeyUpCapture={KeyHandler}
                  name="brandName"
                  type="text"
                  className="px-3 py-2 bg-white rounded-3xl text-black outline-none"
                />
              </div>
            </div>
            <div>
              <div>Diet Type</div>
              <div>
                <input
                  placeholder={Data.dietType || "Enter Diet Type"}
                  onKeyUpCapture={KeyHandler}
                  name="dietType"
                  type="text"
                  className="px-3 py-2 bg-white rounded-3xl text-black outline-none"
                />
              </div>
            </div>
            <div>
              <div>Stock Size</div>
              <div>
                <input
                  placeholder={Data.stockSize || "Enter Stock Size"}
                  onKeyUpCapture={KeyHandler}
                  name="stockSize"
                  type="text"
                  className="px-3 py-2 bg-white rounded-3xl text-black outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <div>Flavour Name</div>
              <div>
                <input
                  placeholder={Data.flavourName || "Enter Flavour Name"}
                  onKeyUpCapture={KeyHandler}
                  name="flavourName"
                  type="text"
                  className="px-3 py-2 bg-white rounded-3xl text-black outline-none"
                />
              </div>
            </div>
            <div>
              <div>Net Content Volume</div>
              <div>
                <input
                  placeholder={
                    Data.netContentVolume || "Enter Net Content Volume"
                  }
                  onKeyUpCapture={KeyHandler}
                  name="netContentVolume"
                  type="text"
                  className="px-3 py-2 bg-white rounded-3xl text-black outline-none"
                />
              </div>
            </div>
            <div>
              <div>Special Feature</div>
              <div>
                <input
                  placeholder={Data.specialFeature || "Enter Special Feature"}
                  onKeyUpCapture={KeyHandler}
                  name="specialFeature"
                  type="text"
                  className="px-3 py-2 bg-white rounded-3xl text-black outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <div>Liquid Volume</div>
              <div>
                <input
                  placeholder={Data.liquidVolume || "Enter Liquid Volume"}
                  onKeyUpCapture={KeyHandler}
                  name="liquidVolume"
                  type="text"
                  className="px-3 py-2 bg-white rounded-3xl text-black outline-none"
                />
              </div>
            </div>
            <div>
              <div>Product Type</div>
              <div>
                <input
                  placeholder={Data.productType || "Enter Product Type"}
                  onKeyUpCapture={KeyHandler}
                  name="productType"
                  type="text"
                  className="px-3 py-2 bg-white rounded-3xl text-black outline-none"
                />
              </div>
            </div>
            <div>
              <div>Image Url</div>
              <div>
                <input
                  placeholder={Data.imageUrl || "Enter Image Url"}
                  onKeyUpCapture={KeyHandler}
                  name="imageUrl"
                  type="text"
                  className="px-3 py-2 bg-white rounded-3xl text-black outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <div>Description</div>
              <div>
                <textarea
                  placeholder={Data.description || "Enter Description"}
                  name="description"
                  rows={5}
                  cols={30}
                  className="px-3 py-2 bg-white rounded-3xl text-black outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
