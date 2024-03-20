import React from "react";

const Category = ({ Category, setCat }) => {
  let cat =
    Category.length >= 1 ? (
      Category.map((val, ind) => {
        return (
          <li
            onClick={() => {
              setCat(val);
            }}
            className="hover:shadow-xl hover:underline  p-[7px] cursor-pointer sm:text-[20px] text-[15px] font-serif font-semibold mb-2"
            key={ind}
          >
            {val.toUpperCase()}
          </li>
        );
      })
    ) : (
      <l-spiral size="150" speed="0.9" color="black"></l-spiral>
    );
  return (
    <div>
      <h3 className="font-bold p-[10px]">Product Category</h3>

      <ul>{cat}</ul>
    </div>
  );
};

export default Category;
