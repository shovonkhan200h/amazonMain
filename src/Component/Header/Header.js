import React, { useContext, useState } from "react";
import { logo } from "../../assests/index";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HeaderBottom from "./HeaderBottom";
import { Link } from "react-router-dom";
import { Context } from "../Context/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import All from "./All";
import Cart from "../Cart/Cart";
import { cartContext } from "../../App";

const Header = () => {
  const [showAll, setShowAll] = useState(false);
  const [showDropDown, setDropDown] = useState(false);
  const [showCart, setShowCart]=useState(false)
  const { user } = useContext(Context);
  const auth = getAuth();
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  

  const handleSingOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {}
  };

  return (
    <div className="w-full sticky top-0 z-50 font-titleFont">
      <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4 xs:justify-between">
        <Link to="/">
          {" "}
          <div className="headerHover">
            <img src={logo} className="w-24 mt-2" alt="logo" />
          </div>
        </Link>

        <div className="headerHover hidden mdl:inline-flex">
          <LocationOnIcon />
          <p className="text-sm text-lightText font-light flex flex-col">
            Deliver to{" "}
            <span className="text-sm font-semibold -mt-1 text-lightText">
              Shovon
            </span>
          </p>
        </div>

        <div className="h-10 rounded-md hidden mdl:flex flex-grow relative">
          <span
            className="w-12 h-full flex items-center justify-center bg-amazon_yellow
                    hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tl-md rounded-bl-md
                    "
            onClick={() => setShowAll(!showAll)}
          >
            All <span></span>
            <ArrowDropDownIcon />
          </span>

          {showAll && (
            <All/>
          )}

          <input
            type="text"
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
          />

          <span
            className="w-12 h-full flex items-center justify-center bg-amazon_yellow
                    hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md
                    "
          >
            <SearchIcon />
          </span>
        </div>

        <div
          className="flex flex-col items-start justify-center headerHover relative"
          onMouseEnter={() => {
            setDropDown(true);
          }}
          onMouseLeave={() => setDropDown(false)}
        >
          {user ? (
            <p className="text-sm mdl:text-xs text-white mdl:text-lightText font-light">
              {user.email}
            </p>
          ) : (
            <p className="text-sm mdl:text-xs text-white mdl:text-lightText font-light">
              Hello, Sign In
            </p>
          )}
          <p className="text-sm font-semibold -mt-1 text-white hidden mdl:inline-flex">
            Accounts & Lists{" "}
            <span>
              <ArrowDropDownIcon />
            </span>
          </p>
          {showDropDown &&
            (user ? (
              <div
                className="w-80 h-60 top-9 left-0  bg-gray-200 absolute duration-1000 flex rounded"
                onMouseEnter={() => {
                  setDropDown(true);
                }}
                onMouseLeave={() => setDropDown(false)}
              >
                <div className="text-black flex items-center justify-center w-full">
                  <div className="w-30 mx-auto text-center font-titleFont">
                    <p className="text-sm">See Personalided Recommendation</p>
                    <button className="w-full bg-yellow-400 rounded-md py-1 font-semibol cursor-pointer hover:bg-yellow-500 active:bg-yellow-700">
                      Sign Out
                    </button>
                    <p className="text-xs mt-1">
                      New Customer?{" "}
                      <span className="text-blue-600 ml-1 cursor-pointer">
                        Start Here.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="w-80 h-60 top-9 left-0  bg-gray-200 absolute duration-1000 flex rounded"
                onMouseEnter={() => {
                  setDropDown(true);
                }}
                onMouseLeave={() => setDropDown(false)}
              >
                <div className="text-black flex items-center justify-center w-full">
                  <div className="w-30 mx-auto text-center font-titleFont">
                    <p className="text-sm">See Personalided Recommendation</p>
                    <button
                      onClick={handleSingOut}
                      className="w-full bg-yellow-400 rounded-md py-1 font-semibol cursor-pointer hover:bg-yellow-500 active:bg-yellow-700"
                    >
                      Sign In
                    </button>
                    <p className="text-xs mt-1">
                      New Customer?{" "}
                      <span className="text-blue-600 ml-1 cursor-pointer">
                        Start Here.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="hidden lgl:flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-white">& Orders</p>
        </div>

        <div className="flex flex-col items-start justify-center headerHover relative">
          <ShoppingCartIcon onClick={() => setShowCart(true)} />

          {showCart && (
            <Cart showCart={showCart} setShowCart={setShowCart}/>
          )}
          <p className="text-sm font-semibold mt-3 text-white">
            Cart{" "}
            <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex  justify-center items-center">
              {cart.length}
            </span>
          </p>
        </div>
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
