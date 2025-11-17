import React from 'react'
import { UserDataType } from '../data';
import { TeacherDataType } from '../data/tec';

interface ModalProps {
    data: TeacherDataType | null;
    isOpen: boolean;
    onClose: () => void;
  }
const TeacherDetailModel = ({data, isOpen, onClose}:ModalProps) => {
  
    if (!isOpen || !data) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
          <div className="bg-white p-6 rounded shadow-lg w-96" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold mb-4">Teacher Details</h2>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Subject:</strong> {data.subject}</p>
            <p><strong>Experience:</strong> {data.experience}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Rating:</strong> {data.rating}</p>

           
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={onClose}
            >
              close
            </button>
          </div>
        </div>
      );
}

export default TeacherDetailModel