import React, { useState } from 'react'
import { UserDataType } from '../data';
import { Link } from 'react-router-dom';
import DetailModel from '../model/detail-model';
import DeleteModel from '../model/delete-model';
import EditModel from '../model/edit-model';
import { StaffDataType } from '../data/stf';
import StaffDetailsModel from '../model/staffDetails-model';
// import StaffDeleteModel from '../model/teacherDelete-Model';
import StaffEditModel from '../model/staffEdit-model';
import StaffDeleteModel from '../model/staffDelete-model';

const StaffPage = () => {
  const [selectedUser, setSelectedUser] = useState<StaffDataType | null>(null);
  const [modalType, setModalType] = useState<string | null>(null);
  const closeModal = () => setModalType(null);

    // Sample JSON Data (this can be fetched from an API)
const datas: StaffDataType[] = [
  {
    "id": 1,
    "name": "John Doe",
    "role": "Math Teacher",
    "email": "johndoe@example.com",
    "phone": "+1 123-456-7890"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "role": "Principal",
    "email": "janesmith@example.com",
    "phone": "+1 987-654-3210"
  },
  {
    "id": 3,
    "name": "Emily Johnson",
    "role": "Science Teacher",
    "email": "emilyjohnson@example.com",
    "phone": "+1 555-123-4567"
  }
];
    



  const openModalHandler = (data: StaffDataType, type: string) => {
    setSelectedUser(data);
    setModalType(type);
  };
 
  return (
    <div className="flex justify-center h-screen items-center">
        <table className="border-collapse border border-gray-400">
            <thead>
            <tr className="border-collapse border border-gray-400 gap-4">
                <th>ID</th>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Info</th>
                <th>Action</th>
                <th>Edit</th>
            </tr>
            </thead>
           {
            datas.map((data,index) => 
            (
                <tr className="border-collapse border border-gray-400">
                <td className="px-4">{data.id}</td>
                <td className="px-4">{data.name}</td>
                <td className="px-4">{data.role}</td>
                <td className="px-4">{data.email}</td>
                <td className="px-4">{data.phone}</td>
                <td className="px-4">
                         <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"  
                          onClick={() => openModalHandler(data, "details")}>Details</button>
                </td>
                <td className="px-4">
                         <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600" 
                          onClick={() => openModalHandler(data, "delete")}>Delete</button>
                </td>
                <td className="px-4">
                         <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                           onClick={() => openModalHandler(data, "edit")}>Edit</button>
                </td>

              </tr>
            )
            )
           }
        </table>
         {modalType === "details" && <StaffDetailsModel data={selectedUser} isOpen={true} onClose={closeModal} />}
         {modalType === "delete" && <StaffDeleteModel data={selectedUser} isOpen={true} onClose={closeModal} />} 
         {modalType == "edit" &&  <StaffEditModel data={selectedUser} isOpen={true} onClose={closeModal}/>}  
    </div>
  )
}

export default StaffPage