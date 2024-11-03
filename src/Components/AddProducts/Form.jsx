import React, { useEffect, useRef } from "react";

function Form() {
  const PageRef = useRef();
  const ContentRef = useRef();
  useEffect(() => {
    const ScrollTrigger = () => {
      if (PageRef.current && ContentRef.current) {
        PageRef.current.style.transform = `translateX(-${
          (window.scrollY / document.documentElement.scrollHeight) *
          ContentRef.current.offsetWidth
        }px)`;
        console.log(window.scrollX);
      }
    };

    document.addEventListener("scroll", ScrollTrigger);

    return () => {
      document.removeEventListener("scroll", ScrollTrigger);
    };
  }, []);

  return (
    <div
      ref={PageRef}
      className="fixed z-10 text-white h-screen flex items-center"
    >
      <div className="w-[25vw] ml-10 color-white flex items-center justify-center ">
        <div className="text-9xl">Add Product</div>
      </div>
      <div
        ref={ContentRef}
        className="h-[60vh] ml-72 w-[120vw] backdrop-blur-lg rounded-3xl"
      >
        <div className="grid grid-cols-4 m-20">
          <div className=" flex flex-col gap-5">
            <div>
              <div>Product Name</div>
              <div className=" ">
                <input type="text" className=" px-3 py-2 bg-white rounded-3xl text-black outline-none border-none focus:outline-none focus:border-none" />
              </div>
            </div>
            <div >
              <div>Product Price</div>
              <div>
                <input type="text" className=" px-3 py-2 bg-white rounded-3xl text-black outline-none border-none focus:outline-none focus:border-none" />
              </div>
            </div>
            <div>
              <div>Discount Percentage</div>
              <div>
                <input type="text" className=" px-3 py-2 bg-white rounded-3xl text-black outline-none border-none focus:outline-none focus:border-none" />
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-5">
            <div>
              <div>Brand Name</div>
              <div>
                <input type="text" className=" px-3 py-2 bg-white rounded-3xl text-black outline-none border-none focus:outline-none focus:border-none" />
              </div>
            </div>
            <div>
              <div>Diet Type</div>
              <div>
                <input type="text" className=" px-3 py-2 bg-white rounded-3xl text-black outline-none border-none focus:outline-none focus:border-none" />
              </div>
            </div>
            <div>
              <div>Stock Size</div>
              <div>
                <input type="text" className=" px-3 py-2 bg-white rounded-3xl text-black outline-none border-none focus:outline-none focus:border-none" />
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-5">
            <div>
              <div>Flavour Name</div>
              <div>
                <input type="text" className=" px-3 py-2 bg-white rounded-3xl text-black outline-none border-none focus:outline-none focus:border-none" />
              </div>
            </div>
            <div>
              <div>Net Content Volume</div>
              <div>
                <input type="text" className=" px-3 py-2 bg-white rounded-3xl text-black outline-none border-none focus:outline-none focus:border-none" />
              </div>
            </div>
            <div>
              <div>Special Feature</div>
              <div>
                <input type="text" className=" px-3 py-2 bg-white rounded-3xl text-black outline-none border-none focus:outline-none focus:border-none" />
              </div>
            </div>
          </div>
          <div  className=" flex flex-col gap-5">
            <div>
              <div>Liquid Volume</div>
              <div>
                <input type="text" className=" px-3 py-2 bg-white rounded-3xl text-black outline-none border-none focus:outline-none focus:border-none" />
              </div>
            </div>
            <div>
              <div>Description</div>
              <div>
                <textarea rows={5} cols={30} className=" px-3 py-2 bg-white rounded-3xl text-black outline-none border-none focus:outline-none focus:border-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
