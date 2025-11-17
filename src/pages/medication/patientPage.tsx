import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import { fetchPatientsAPI } from "../../service/patient-api";
// import DeletePatientModel from "./DeletePatientModel";
import { PatientPageDataType } from "./patientPageData";
import DeletePatientModel from "./deletePatient-model";

const PatientPage = () => {
  const [modelType, setModelType] = useState<string | null>(null);
  const [selectedData, setSelectedData] = useState<PatientPageDataType | null>(
    null
  );
  const [selectedPatient, setSelectedPatient] =
    useState<PatientPageDataType | null>(null);

  const closeModel = () => setModelType(null);

  const {
    data = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["QueryUsers"],
    queryFn: async () => {
      try {
        const response = await fetchPatientsAPI();
        return response || [];
      } catch (error: any) {
        toast.error(error.message || "Error fetching patients");
        throw error;
      }
    },
  });

  const openModel = (type: string, data: PatientPageDataType) => {
    setModelType(type);
    setSelectedData(data);
  };

  return (
    <div>
      <ToastContainer />

      <div className="flex justify-center">
        <p className="text-5xl font-bold text-blue-600 p-2 font-Poppins">
          PATIENT DETAILS
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {data.map((patient: any) => (
          <div
            key={patient.id}
            className="bg-pink-50 border border-pink-300 rounded-2xl shadow-xl p-6 transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl font-bold text-pink-600 mb-2">
              PATIENT ID: {patient.id}
            </h2>
            <p className="text-gray-700">
              <span className="font-semibold">Name:</span> {patient.name}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span> {patient.email}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">DOB:</span> {patient.dob}
            </p>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => openModel("edit", data)}
                className="bg-gradient-to-r from-pink-300 to-pink-400 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200"
              >
                ✨ Update
              </button>
              <button
                onClick={() => openModel("delete", patient)}
                className="bg-gradient-to-r from-red-300 to-red-400 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200"
              >
                ❌ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {modelType == "delete" && (
        <DeletePatientModel
          data={selectedData}
          isOpen={true}
          onClose={closeModel}
        />
      )}
    </div>
  );
};

export default PatientPage;
