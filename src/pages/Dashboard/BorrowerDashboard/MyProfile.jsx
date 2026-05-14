import React from "react";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const MyProfile = () => {
  const { users, logOut } = useAuth();
  const navigate = useNavigate();
  const handleLogout =()=>{
    logOut()
    .then(() =>{
        toast.success('LogOut successful')
        navigate('/');
    })
  }
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Cover */}
          <div className="h-40 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500"></div>

          {/* Profile Section */}
          <div className="px-8 pb-8">
            <div className="-mt-16 flex flex-col items-center">
              {/* Avatar */}
              <img
                src={users?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                alt="profile"
                className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-md object-cover bg-white"
              />
              <h3 className="mt-2 text-gray-500 dark:text-gray-400">{users?.displayName || 'Your Name'}</h3>

              {/* Email */}
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                {users?.email}
              </p>

            </div>
            {/* Action Buttons */}
            <div className="flex mt-4 justify-center">
              <button onClick={handleLogout} className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition duration-300">
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
