import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const { users } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: role = "user", isLoading: roleLoading } = useQuery({
    queryKey: ["user-role", users?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${users?.email}/role`);
      return res.data?.role || "user";
    },
  });
  return { role, roleLoading };
};

export default useRole;
