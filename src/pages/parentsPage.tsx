import React, { useState } from 'react'
import { ParentDataType } from '../data/parent';
import {  parentData } from '../data/index-json';

const ParentsPage = () => {
const [selectedUser, setSelectedUser] = useState<ParentDataType | null>(null);
  const [modalType, setModalType] = useState<string | null>(null);
  const closeModal = () => setModalType(null);

const openModalHandler = (data: ParentDataType, type: string) => {
    setSelectedUser(data);
    setModalType(type);
  };

  return (
    <div className=' gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
         parentData.map((data,index) => 
         (
          <div className="">
            <div className= 'w-60 p-2 bg-white rounded-xl shadow-xl py-11 vertical-align justify-between'>
              <img className="" src={data.pic}></img>  
              <div className="font-bold text-lg">{data.name}</div>  
              <div className="text-gray-600">{data.email}</div>  
              <div className="text-sm">{data.description}</div>  
            </div>
          </div>
         )
         )
         }

    </div>
  )
}

export default ParentsPage