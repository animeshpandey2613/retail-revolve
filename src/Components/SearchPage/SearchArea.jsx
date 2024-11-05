import React, { useState, useRef, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import Navbar from "../SubComponents/Navbar";
import ResultArea from "../SubComponents/ResultArea";
import Product from "../../images/item Image.jpg";
import Back from "../../images/Retailer Clipart.jpeg";
import axios from "axios";
function SearchPage() {
  const [focus, setFocus] = useState(false);
  const [SearchStatus, setSearchStatus] = useState(false);
  const disappearRef = useRef();
  const disappearRef2 = useRef();
  const searchBarRef = useRef();
  const BackBlurManager = useRef();
  const BackRef = useState();
  const [seachDetails, setSearchDetails] = useState({
    search_name: "",
    search_type: "product",
  });
  const ClickHandler = () => {
    disappearRef.current.style.opacity = "0";
    disappearRef2.current.style.opacity = "0";
    BackBlurManager.current.style.filter = "blur(0)";
    BackBlurManager.current.style.opacity = "1";
    searchBarRef.current.style.top = "0px";
    searchBarRef.current.style.transform = "scale(0.8)";
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.value !== "") {
        setSearchDetails((temp) => {
          return { ...temp, search_name: e.target.value };
        });
      } else {
        setSearchDetails({ search_name: "Featured" });
      }
      setSearchStatus(true);
    }
  };
  const ExploreProduct = () => {
    setSearchDetails((temp) => {
      return { ...temp, search_name: "Featured" };
    });
    setSearchStatus(true);
  };
  useEffect(() => {
    const requestData = async () => {
      const newData = await axios.post(
        "http://localhost:2020/finaldemo/ProductServlet",
        seachDetails
      );
      setRealData(newData.data);
      console.log(newData);
      ClickHandler();
    };
    if (SearchStatus === true) {
      requestData();
    }
  }, [seachDetails, SearchStatus]);

  const [RealData, setRealData] = useState([
    {
      wholeSeller: "Ajanta wholeseller",
      product_url: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      product_url: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      product_url: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      product_url: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      product_url: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      product_url: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      product_url: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      product_url: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      product_url: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      product_url: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
  ]);
  const Data = [
    {
      wholeSeller: "Ajanta wholeseller",
      product_url: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      product_url: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      product_url: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      product_url: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      product_url: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      product_url: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      product_url: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      product_url: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      product_url: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
    {
      wholeSeller: "Ajanta wholeseller",
      product_url: Product,
      name: "Saffola Gold Oil",
      price: 500,
    },
  ];
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (BackRef.current)
        BackRef.current.style.transform = `translateY(${window.scrollY}px)`;
    });
  }, [BackRef]);
  return (
    <div className="h-screen bg-black">
      <div
        className=" absolute w-screen top-1/3 flex justify-center items-center text-2xl z-10 duration-1000"
        ref={searchBarRef}
      >
        <div className="flex flex-col items-center gap-3">
          <div
            className={`flex gap-3 border-2 border-darkestColor items-center p-4 rounded-full duration-700 bg-[rgba(255,255,255,0.6)]${
              focus
                ? "shadow-[0_0_50px_2px_rgba(59,130,246,0.7)] bg-white scale-[1.02]"
                : ""
            }`}
          >
            <BiSearch />
            <input
              type="text"
              onKeyDown={handleKeyDown}
              placeholder="Search"
              onFocus={() => {
                setFocus(true);
              }}
              className="bg-transparent focus:outline-none	w-96"
            />
          </div>
          <div className="flex gap-5">
            <div className="flex gap-3 items-center">
              <input
                type="radio"
                value="wholeseller"
                name="searchType"
                id="wholesaler"
                onClick={() => {
                  setSearchDetails((e) => {
                    return { ...e, search_type: "wholesaler" };
                  });
                }}
                className="h-4 w-4"
              />
              <label className="text-white" htmlFor="wholeseller">
                Wholeseller
              </label>
            </div>
            <div className="flex gap-3 items-center">
              <input
                type="radio"
                value="product"
                name="searchType"
                defaultChecked="true"
                onClick={() => {
                  setSearchDetails((e) => {
                    return { ...e, search_type: "product" };
                  });
                }}
                id="product"
                className="h-4 w-4"
              />
              <label className="text-white" htmlFor="product">
                Product
              </label>
            </div>
          </div>
          <div className="text-sm text-white" ref={disappearRef}>
            OR
          </div>
          <div
            onClick={ExploreProduct}
            ref={disappearRef2}
            className=" text-3xl text-darkestColor px-4 cursor-pointer bg-white hover:bg-darkestColor duration-500 hover:text-lightColor py-3 border-darkestColor border-2 hover:border-lightColor rounded-xl transition-all ease-in-out shadow-2xl hover:shadow-[0_0_200px_30px_rgba(59,130,246,0.7)]"
          >
            Explore
          </div>
        </div>
      </div>
      <div
        className="absolute h-screen w-screen blur-lg opacity-40 z-0 duration-1000 bg-black"
        ref={BackBlurManager}
      >
        <div
          ref={BackRef}
          className=" fixed w-screen bg-black top-0 left-0 z-0"
        >
          <img
            src={Back}
            alt="Back"
            className=" h-screen w-full object-cover brightness-50 opacity-65 blur-sm"
          />
        </div>
        <div className="absolute z-10 ">
          <div className="mt-44 relative z-20">
            <ResultArea data={RealData} />
            <ResultArea data={Data} />
          </div>
          <div className="absolute z-50 top-0">
            <Navbar colorPrimary={"lightColor"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
