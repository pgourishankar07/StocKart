import React from "react";
import Product from "./Product";

export default function ProductList({ productList, incQty, decQty, del }) {
  return productList.map((product, i) => {
    return (
      <Product
        product={product}
        key={i}
        incQty={incQty}
        index={i}
        decQty={decQty}
        del={del}
      />
    );
  });
}
