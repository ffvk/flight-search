import { apiClient } from "../config/apiClient";
import { apiClients } from "../config/apiClients";

export const fetchUsersAPI = (): Promise<any> =>
  apiClient<any>("/users/", "GET");

export const createUserAPI = (data: any): Promise<any> =>
  apiClients<any>("/users/", "POST", data);

export const updateUserAPI = (data: any, id: number): Promise<any> =>
  apiClients<any>(`/users/${id}`, "PUT", data);

export const deleteUserAPI = (id: any): Promise<any> =>
  apiClient<any>(`/users/${id}`, "DELETE");
