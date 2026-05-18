import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: "https://fund-stack-server.vercel.app",
});
const useAxiosSecure = () => {
  const { users, logOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    // interceptors request
    const reqInterceptor =axiosSecure.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${users?.accessToken}`;
      return config;
    })
    // interceptor response
    const resInterceptor = axiosSecure.interceptors.response.use((response) =>{
        return response;
    }, (error) =>{
        const statusCode = error.status;
        if (statusCode === 401 || statusCode === 403) {
            logOut()
            .then(() =>{
                navigate('/login');
            })
        }
        return Promise.reject(error);
    })
    return () =>{
        axiosSecure.interceptors.request.eject(reqInterceptor);
        axiosSecure.interceptors.response.eject(resInterceptor);
    }
  }, [users, logOut, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
