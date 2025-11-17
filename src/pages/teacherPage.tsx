import { useState } from 'react';
import { TeacherDataType } from '../data/tec';
import TeacherDeleteModel from '../model/teacherDelete-Model';
import TeacherEditModel from '../model/teacherEdit-model';
import TeacherDetailModel from '../model/techerDetail-model';
import { teacherData } from '../data/index-json';

const TeacherPage = () => {
  const [selectedUser, setSelectedUser] = useState<TeacherDataType | null>(null);
  const [modalType, setModalType] = useState<string | null>(null);
  
  const closeModal = () => setModalType(null);

    // Sample JSON Data (this can be fetched from an API)
// const datas: UserDataType[] = [
//     { name: "Nandini", email: "abc@gmail.com", phone: "654567", role: "Customer", company: "Amazon", branch: "A" },
//     { name: "Rahul", email: "rahul@example.com", phone: "987654", role: "Admin", company: "Google", branch: "B" },
//     { name: "Priya", email: "priya@example.com", phone: "123456", role: "Manager", company: "Microsoft", branch: "C" },
//     { name: "Vikram", email: "vikram@example.com", phone: "789123", role: "Staff", company: "Apple", branch: "D" },
//     { name: "Aditi", email: "aditi@example.com", phone: "456789", role: "HR", company: "Meta", branch: "E" }
//   ];

  const openModalHandler = (data: TeacherDataType, type: string) => {
    setSelectedUser(data);
    setModalType(type);
  };
 
  return (
    <div className="flex justify-center h-screen items-center">
        <table className="border-collapse border border-gray-400">
            <thead>
            <tr className="border-collapse border border-gray-400 gap-4">
                <th> Teacher's Name</th>
                <th>Subject</th>
                <th>Experience</th>
                <th>Email</th>
                <th>Rating</th>
                <th>Info</th>
                <th>Action</th>
                <th>Edit</th>
            </tr>
            </thead>
           {
            teacherData.map((data,index) => 
            (
                <tr className="border-collapse border border-gray-400">
                <td className="px-4">{data.name}</td>
                <td className="px-4">{data.subject}</td>
                <td className="px-4">{data.experience}</td>
                <td className="px-4">{data.email}</td>
                <td className="px-4">{data.rating}</td>
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
        {modalType === "details" && <TeacherDetailModel data={selectedUser} isOpen={true} onClose={closeModal} />}
        {modalType== "delete" && <TeacherDeleteModel data={selectedUser} isOpen={true} onClose={closeModal}/>} 
        {modalType == "edit" &&  <TeacherEditModel data={selectedUser} isOpen={true} onClose={closeModal}/>} 

    </div>
  )
}

export default TeacherPage