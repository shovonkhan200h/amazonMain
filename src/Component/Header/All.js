import React from "react";
import { allItem } from "../../Constants/Constants";
const All = () => {
  return (
    <div>
      <ul
        className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden
              bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50
              "
      >
        {allItem.map((item) => (
          <li
            className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
            key={item._id}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default All;
