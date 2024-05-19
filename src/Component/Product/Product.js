import React, { useContext } from "react";
import { fakeProducts } from "../../Constants/Fake Products";
import StarIcon from "@mui/icons-material/Star";
import ApiIcon from "@mui/icons-material/Api";
import { cartContext } from "../../App";
import { Link } from "react-router-dom";

const Product = () => {
  const [cart, setCart] = useContext(cartContext);

  const addTocart = (product) => {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
    const productInCart = cartFromLocalStorage.find(
      (item) => item.product.id === product.id
    );

    let newCart;
    if (productInCart) {
      newCart = cartFromLocalStorage.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
    } else {
      newCart = [...cartFromLocalStorage, { product: product, quantity: 1 }];
    }

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 gap-10 px-4 mdl:grid-cols-3 md:grid-cols-3 sml:grid-cols-1 xxl:grid-cols-4">
      {fakeProducts.slice(0, 20).map((item) => (
        <div
          key={item.id}
          className="bg-white h-auto border-[1px] border-gray-200 py-8 z-30
                          hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4 rounded-md"
        >
          <span className="text-xs absolute top-2 right-2 text-gray-500">
            {item.category}
          </span>

          <div className="w-full h-auto flex items-center justify-center relative group">
            <img src={item.img} alt="" className="w-55 h-60 object-contain" />

            <ul
              className="w-full h-36 bg-gray-100 absolute bottom-[-135px] flex flex-col
                           items-end justify-center gap-2 font-titleFont px-2 border-1 border-r group-hover:bottom-0 duration-700"
            >
              <li className="productLi">
                Compare{" "}
                <span>
                  <ApiIcon />
                </span>
              </li>
              <li className="productLi">
                <Link to={"/product/" + item.id}>View</Link>
                <span>
                  <ApiIcon />
                </span>
              </li>
              <li className="productLi" onClick={() => addTocart(item)}>
                Add to Cart{" "}
                <span>
                  <ApiIcon />
                </span>
              </li>
            </ul>
          </div>

          <div className="px-4 z-20 bg-white">
            <div className="flex items-center justify-between">
              <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                {item.name.substring(0, 10)}
              </h2>
              <p>${item.price}</p>
            </div>

            <div>
              <p className="text-sm">Addidas shoes</p>
              <div className="text-yellow-500">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <button
              className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200
                          border hover:from-yellow-300 hover:to-yellow border-yellow-500 hover:border-yellow-700 duration-200 py-1.5 rounded-md
                          "
              onClick={() => addTocart(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
