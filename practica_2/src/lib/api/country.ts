import { api } from "@/lib/api/api"

export const getCountryNameBySearch = async (name : string) =>  {
    const response = await api.get(`alpha/${name}?fields=name,flag`);
    return response.data;
}