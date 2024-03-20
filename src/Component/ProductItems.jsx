import React from "react";
import { spiral } from "ldrs";

const ProductItems = ({ Products }) => {
  // console.log(Products);

  spiral.register();

  // Default values shown
  return (
    <>
      {Products.length >= 1 ? (
        Products.map((product, index) => {
          return (
            <div className="shadow-lg text-center pb-4" key={index}>
              <img
                src={product.thumbnail}
                alt="Bracelet"
                className="w-[100%] h-[220px]"
              />
              <h4>{product.title}</h4>
              <b>{product.price}</b>
            </div>
          );
        })
      ) : (
        <l-spiral size="300" speed="0.9" color="black"></l-spiral>
      )}
    </>
  );
};

export default ProductItems;
