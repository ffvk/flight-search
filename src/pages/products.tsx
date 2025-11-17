import React, { useState } from "react";
import { ProductDataType } from "../data/productData";
import { products } from "../data/index-json";

const Products = () => {
  const [selectedUser, setSelectedUser] = useState<ProductDataType | null>(
    null
  );
  const [modalType, setModalType] = useState<string | null>(null);
  const closeModal = () => setModalType(null);

  const openModalHandler = (data: ProductDataType, type: string) => {
    setSelectedUser(data);
    setModalType(type);
  };

  return (
    <div className=" gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((data, index) => (
        <div className="">
          <div className="w-60  p-2 bg-white rounded-xl shadow-xl py-11 vertical-align justify-between">
            <img className="w-50 h-32 object-cover" src={data.pic}></img>
            <div className="font-bold text-lg">{data.name}</div>
            <div className="text-sm">{data.price}</div>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Add to Cart
            </button>
            <button>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
