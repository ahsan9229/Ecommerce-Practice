import "./App.css";
import Category from "./Component/Category";
import ProductItems from "./Component/ProductItems";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  let [finalcategory, setFinalCat] = useState([]);
  let [finalproduct, setFinalPro] = useState([]);
  let [catname, setCatName] = useState("");

  let getCategory = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => res.data)
      .then((finalResponse) => {
        setFinalCat(finalResponse);
      });
  };
  let getProduct = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((proRes) => proRes.data)
      .then((finalResponse) => {
        setFinalPro(finalResponse.products);
      });
  };

  let getSelectedCat = (SearchCat) => {
    setFinalPro("");
    axios
      .get(`https://dummyjson.com/products/category/${SearchCat}`)
      .then((res) => res.data)
      .then((finalresult) => {
        setFinalPro(finalresult.products);
      });
  };

  useEffect(() => {
    getCategory();
    getProduct();
  }, []);
  useEffect(() => {
    if (catname !== "") {
      getSelectedCat(catname);
    }
  }, [catname]);
  return (
    <>
      <div className="py-[40px]">
        <div className="max-w-[1320px] mx-auto">
          <h1 className="text-center font-bold text-[40px] mb-[30px]">
            Our Product
          </h1>
          <div className="grid grid-cols-[30%_auto] gap-[20px]">
            <div className="">
              <Category Category={finalcategory} setCat={setCatName} />
            </div>
            <div>
              <div className="grid sm:grid-cols-3 grid-cols-2 gap-4">
                <ProductItems Products={finalproduct} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
