import React, { useState } from "react";
import { UserDataType } from "../data";
import { userData } from "../data/index-json";
import { fetchUsersAPI } from "../service/user-service";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import AddUserModel from "../model/addUser_model";
import DeleteUserModel from "../model/deleteUser-model";
import { UserPageDataType } from "../data/userPageData";
import AddUserEditModel from "../model/addUserEdit-model";

const UserPage = () => {
  const [popupType, setPopupType] = useState<string | null>(null);
  const [selectedData, setSelectedData] = useState<UserPageDataType | null>(
    null
  );

  const closeModel = () => setPopupType(null);

  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["QuaryUsers"],
    queryFn: async () => {
      try {
        const response = await fetchUsersAPI();
        return response.users || [];
      } catch (error: any) {
        toast.error(error.message || "Error fetching tokenizations");
        throw error;
      }
    },
  });
  console.log("data", data);

  const openPopup = (type: string, data: UserPageDataType) => {
    setPopupType(type);
    setSelectedData(data);
  };

  return (
    <div>
      <div className="flex flex-col justify-center h-screen items-center">
        <div>
          <button
            onClick={() => openPopup("create", data)}
            className="bg-blue-600 hover:bg-blue-700 rounded-full text-white mb-4 p-2 border-b-4 border-blue-700"
          >
            Add user
          </button>
        </div>
        <table className="border-collapse border border-gray-400">
          <thead className="">
            <tr className="border-collapse border border-gray-400">
              <th> Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>Action</th>
            </tr>
          </thead>

          {data.map((data: any) => (
            <tr className=" border-collapse border border-gray-400">
              <td className="px-4">{data.user_name}</td>
              <td className="px-4">{data.email}</td>
              <td className="px-4">{data.phone_number}</td>
              <td className="px-4">{data.company_name}</td>
              <td className="px-4 ">
                <button
                  className="mt-4 bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded mb-4 "
                  onClick={() => openPopup("edit", data)}
                >
                  Edit
                </button>
                <button
                  className="mt-4 bg-purple-400 hover:bg-purple-500 text-white px-4 py-2 rounded ml-2"
                  onClick={() => openPopup("delete", data)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
      {popupType == "create" && (
        <AddUserModel isOpen={true} onClose={closeModel} />
      )}

      {popupType == "delete" && (
        <DeleteUserModel
          data={selectedData}
          isOpen={true}
          onClose={closeModel}
        />
      )}

      {popupType == "edit" && (
        <AddUserEditModel
          data={selectedData}
          isOpen={true}
          onClose={closeModel}
        />
      )}
    </div>
  );
};

export default UserPage;
