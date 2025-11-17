import React from "react";
import { ToastContainer } from "react-toastify";
import AddPrdctForm from "../form/addPrdctForm";

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const AddProductModel = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 shadow-md">
      <div
        className="bg-white p-6 rounded shadow-lg w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-xl font-bold mb-4">Add Product</h1>
        <AddPrdctForm onClose={onClose} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProductModel;
