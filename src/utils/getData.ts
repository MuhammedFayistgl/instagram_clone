import { getAxiosinstance } from "./getAxiosinstance";

export const getData = async (url: string) => {
  const data = await getAxiosinstance.get(url);
  return data;
};
