import React from 'react'
import { Link } from 'react-router-dom';
import { UserDataType } from '../data';

const ItemDetails = () => {
    const datas: UserDataType[] = [
        { name: "Nandini", email: "abc@gmail.com", phone: "654567", role: "Customer", company: "Amazon", branch: "A" },
        { name: "Rahul", email: "rahul@example.com", phone: "987654", role: "Admin", company: "Google", branch: "B" },
        { name: "Priya", email: "priya@example.com", phone: "123456", role: "Manager", company: "Microsoft", branch: "C" },
        { name: "Vikram", email: "vikram@example.com", phone: "789123", role: "Staff", company: "Apple", branch: "D" },
        { name: "Aditi", email: "aditi@example.com", phone: "456789", role: "HR", company: "Meta", branch: "E" }
      ];
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
                 
  
    
    
                </tr>
              )
              )
             }
          </table>
      </div>
    )
}

export default ItemDetails