import axiosClient from "../lib/axios";

const { request } = axiosClient({ baseURL: "https://api.github.com" });

export const getUsersWithPage = (q, per_page, page) => {
  return request({
    url: "/users",
    method: "get",
    params: { q, per_page, page },
  });
};
