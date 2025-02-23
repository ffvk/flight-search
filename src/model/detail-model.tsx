import React from 'react'
import { UserDataType } from '../data';

interface ModalProps {
    data: UserDataType | null;
    isOpen: boolean;
    onClose: () => void;
  }
const DetailModel = ({data, isOpen, onClose}:ModalProps) => {
  
    if (!isOpen || !data) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
          <div className="bg-white p-6 rounded shadow-lg w-96" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold mb-4">User Details</h2>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Phone:</strong> {data.phone}</p>
            <p><strong>Role:</strong> {data.role}</p>
            <p><strong>Company:</strong> {data.company}</p>
            <p><strong>Branch:</strong> {data.branch}</p>

           
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={onClose}
            >
              close
            </button>
          </div>
        </div>
      );
}

export default DetailModel