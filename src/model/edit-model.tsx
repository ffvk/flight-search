import React, { useState } from "react";
import { UserDataType } from "../data";
import { toast, ToastContainer } from "react-toastify";
import { z } from "zod";
import EditForm from "../form/EditForms";
import EditForms from "../form/EditForms";




interface ModalProps {
  data: UserDataType | null;
  isOpen: boolean;
  onClose: () => void;
}

const EditModel = ({ data, isOpen, onClose }: ModalProps) => {

  if (!isOpen || !data) return null;

 
   

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded shadow-lg w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-xl font-bold mb-4">EDIT</h1>
      <EditForms />
       
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditModel;