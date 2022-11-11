import axiosClient from "../lib/axios";

const { request } = axiosClient({ baseURL: "https://catfact.ninja" });

export const getCatFact = () => {
  return request({ url: "/fact", method: "get" });
};
