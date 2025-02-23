import React, { useState } from 'react'
import { UserDataType } from '../data';
import { Link } from 'react-router-dom';
import DetailModel from '../model/detail-model';
import DeleteModel from '../model/delete-model';
import EditModel from '../model/edit-model';

const HomePage = () => {
  const [selectedUser, setSelectedUser] = useState<UserDataType | null>(null);
  const [modalType, setModalType] = useState<string | null>(null);
  const closeModal = () => setModalType(null);

    // Sample JSON Data (this can be fetched from an API)
const datas: UserDataType[] = [
    { name: "Nandini", email: "abc@gmail.com", phone: "654567", role: "Customer", company: "Amazon", branch: "A" },
    { name: "Rahul", email: "rahul@example.com", phone: "987654", role: "Admin", company: "Google", branch: "B" },
    { name: "Priya", email: "priya@example.com", phone: "123456", role: "Manager", company: "Microsoft", branch: "C" },
    { name: "Vikram", email: "vikram@example.com", phone: "789123", role: "Staff", company: "Apple", branch: "D" },
    { name: "Aditi", email: "aditi@example.com", phone: "456789", role: "HR", company: "Meta", branch: "E" }
  ];

  const openModalHandler = (data: UserDataType, type: string) => {
    setSelectedUser(data);
    setModalType(type);
  };
 
  return (
    <div className="flex justify-center h-screen items-center">
        <table className="border-collapse border border-gray-400">
            <thead>
            <tr className="border-collapse border border-gray-400 gap-4">
                <th className=""> Name</th>
                <th className="">Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Company</th>
                <th>Branch</th>
                <th>Info</th>
                <th>Action</th>
                <th>Edit</th>
            </tr>
            </thead>
           {
            datas.map((data,index) => 
            (
                <tr className="border-collapse border border-gray-400">
                <td className="px-4">{data.name}</td>
                <td className="px-4">{data.email}</td>
                <td className="px-4">{data.phone}</td>
                <td className="px-4">{data.role}</td>
                <td className="px-4">{data.company}</td>
                <td className="px-4">{data.branch}</td>
                <td className="px-4">
                         <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded"  
                          onClick={() => openModalHandler(data, "details")}>Details</button>
                </td>
                <td className="px-4">
                         <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded" 
                          onClick={() => openModalHandler(data, "delete")}>Delete</button>
                </td>
                <td className="px-4">
                         <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
                           onClick={() => openModalHandler(data, "edit")}>Edit</button>
                </td>

              </tr>
            )
            )
           }
        </table>
        {modalType === "details" && <DetailModel data={selectedUser} isOpen={true} onClose={closeModal} />}
        {modalType== "delete" && <DeleteModel data={selectedUser} isOpen={true} onClose={closeModal}/>}
        {modalType == "edit" &&  <EditModel data={selectedUser} isOpen={true} onClose={closeModal}/>}
    </div>
  )
}

export default HomePage