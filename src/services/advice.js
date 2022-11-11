import axiosClient from "../lib/axios";

const { request } = axiosClient({ baseURL: "https://api.adviceslip.com" });

export const getAdvice = () => {
  return request({ url: "/advice", method: "get" });
};
