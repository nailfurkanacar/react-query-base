import axios from "axios";

const axiosClient = ({ baseURL }) => {
  const client = axios.create({ baseURL: baseURL });

  const request = async ({ ...options }) => {
    const onSuccess = (response) => response;
    const onError = (error) => {
      return error;
    };

    return await client(options).then(onSuccess).catch(onError);
  };
  return { request };
};

export default axiosClient;
