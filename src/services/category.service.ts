import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import { ICategory } from "@/types/Category";

const categoryServices = {
  getCategories: (params?: string) => instance.get(`${endpoint.CATEGORY}?${params}`),
  getCategory: (id: string) => instance.get(`${endpoint.CATEGORY}/${id}`),
  createCategory: (payload: ICategory) => instance.post(`${endpoint.CATEGORY}`, payload),
  updateCategory: (id: string, payload: ICategory) => instance.put(`${endpoint.CATEGORY}/${id}`, payload),
  deleteCategory: (id: string) => instance.delete(`${endpoint.CATEGORY}/${id}`),
};

export default categoryServices;
