import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { deletePatientAPI } from "../../service/patient-api";

interface ModalProps {
  data: any;
  isOpen: boolean;
  onClose: () => void;
}

const DeletePatientModel = ({ data, isOpen, onClose }: ModalProps) => {
  if (!isOpen || !data) return null;
  console.log("data receiving of patient", data);

  const clickDelete = async () => {
    const response = await deletePatientAPI(data?.id);
    toast.success(response.message || "Patient deleted successfully");

    console.log(" patient deleted successfully");
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded shadow-lg w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Do you want to delete?</h2>

        <p>
          <strong>Name:</strong> {data.name}
        </p>

        <div className="p-6 flex justify-between">
          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            onClick={clickDelete}
          >
            Yes
          </button>

          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            No
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default DeletePatientModel;
