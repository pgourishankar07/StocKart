import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import AddItem from "./components/AddItem";

function App() {
  const products = [
    { price: 413, name: "ITC", qty: 0 },
    { price: 99, name: "IDFC", qty: 0 },
  ];

  const [productList, setProductList] = useState(products);

  const incQty = (index) => {
    let newProductList = [...productList];
    newProductList[index].qty++;
    setProductList(newProductList);
  };

  const decQty = (index) => {
    let newProductList = [...productList];
    newProductList[index].qty > 0
      ? newProductList[index].qty--
      : (newProductList[index].qty = 0);
    setProductList(newProductList);
  };

  let totAmt = 0;
  for (let i = 0; i < productList.length; i++) {
    totAmt += productList[i].price * productList[i].qty;
  }

  const onClear = () => {
    setProductList(products);
  };

  const del = (name) => {
    const newProductList = productList.filter((i) => i.name !== name);

    setProductList(newProductList);
  };

  const onAdd = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      qty: 0,
    });
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem onAdd={onAdd} />
        <ProductList
          productList={productList}
          incQty={incQty}
          decQty={decQty}
          del={del}
        />
      </main>
      <Footer totAmt={totAmt} onClear={onClear} />
    </>
  );
}

export default App;
