import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { z } from "zod";
import { UserPageDataType } from "../data/userPageData";
import UserEditForms from "../form/editUserForm";

interface ModalProps {
  data: any | null;
  isOpen: boolean;
  onClose: () => void;
}

const AddUserEditModel = ({ data, isOpen, onClose }: ModalProps) => {
  if (!isOpen || !data) return null;
  console.log("data receiving", data);
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
        <UserEditForms data={data} isOpen={isOpen} onClose={onClose} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddUserEditModel;
