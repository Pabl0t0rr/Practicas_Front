import { api } from "@/lib/api/api"

export const getCountryNameBySearch = async (name : string) =>  {
    const response = await api.get(`name/${name}?fields=name,flag,cca2`);
    return response.data;
}

export const getCountryByFullName= async (code: string) => {
  const response = await api.get(
    `name/${code}?fields=name,flag,capital,region,population,languages`
  );
  return response.data[0];
}