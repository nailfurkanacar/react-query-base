import axiosClient from "../lib/axios";

const { request } = axiosClient({ baseURL: "https://reqres.in/api" });

export const getUsersWithPage = (page) => {
  return request({ url: "/users", method: "get", params: { page } });
};
