import { apiClient } from "../config/apiClient";
import { apiClients } from "../config/apiClients";

export const fetchProductAPI = (): Promise<any> =>
  apiClient<any>("/products/", "GET");

export const createProductAPI = (data: any): Promise<any> =>
  apiClients<any>("/products/", "POST", data);

export const deleteProductAPI = (id: any): Promise<any> =>
  apiClient<any>(`/products/{product_id}?products_id=${id}`, "DELETE");

export const createLoanAPI = (data: any): Promise<any> =>
  apiClients<any>("/loans/", "POST", data);

export const fetchCartItemAPI = (): Promise<any> =>
  apiClient<any>("/cartItems/", "GET");

export const CreateCartItemAPI = (data: any): Promise<any> =>
  apiClients<any>("/cart_items/", "POST", data);

export const updatebulkCartItemAPI = (data: any): Promise<any> =>
  apiClients<any>("/cart_items/", "PUT", data);
