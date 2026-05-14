import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: user = [] } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users/borrowers");
      return res.data;
    },
  });
  const handleUpdateRole = (user) => {
    console.log(user);
  };
  return (
    <div className="w-full px-2 py-2">
      <div className="hidden lg:block overflow-x-auto rounded-xl shadow">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {user.map((u, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>
                  <button
                    onClick={() => handleUpdateRole(u)}
                    className="btn btn-sm btn-primary"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* mobile view */}
      <div className="grid grid-cols-1 gap-4 lg:hidden">
        {user.map((u) => (
          <div key={u._id} className="bg-base-200 shadow-md rounded-xl p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="text-sm">
                <p className="">Name</p>
                <h2 className="">{u.name}</h2>
              </div>

              <div className="text-sm">
                <p className="">Role</p>
                <h2>{u.role}</h2>
              </div>
            </div>
            <div className="flex justify-between items-center mb-3">
              <div>
                <p className="text-sm">Email</p>
                <h2>{u.email}</h2>
              </div>

              <button
                onClick={() => handleUpdateRole(u)}
                className="btn btn-sm btn-primary"
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageUsers;
