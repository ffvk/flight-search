import { apiClient } from "../config/apiClient";
// import { apiClients } from "../config/apiClients";


export const loginAPI = (data: any): Promise<any> =>
  apiClient<any>('/auth/login', 'POST', data,);