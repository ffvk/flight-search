import React, { useState } from "react";
import { UserDataType } from "../data";
import { toast, ToastContainer } from "react-toastify";
import { z } from "zod";
import EditForm from "../form/EditForms";
import EditForms from "../form/EditForms";
import { TeacherDataType } from "../data/tec";
import TeacherEditForms from "../form/teacherEditForms";
import { StaffDataType } from "../data/stf";
import StaffEditForms from "../form/staffEditForms";




interface ModalProps {
  data: StaffDataType | null;
  isOpen: boolean;
  onClose: () => void;
}

const StaffEditModel = ({ data, isOpen, onClose }: ModalProps) => {

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
        <h1 className="text-xl font-bold mb-4">Staff Info EDIT</h1>
      <StaffEditForms data={data}  isOpen={isOpen} onClose={onClose} />
       
      </div>
      <ToastContainer />
    </div>
  );
};

export default StaffEditModel