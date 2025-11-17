import { apiClient } from "../config/apiClient";

export const fetchPatientsAPI = (): Promise<any> =>
  apiClient<any>("/patients/", "GET");

export const deletePatientAPI = (id: any): Promise<any> =>
  apiClient<any>(`/patients/${id}`, "DELETE");
