import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const BorrowerDashboardHome = () => {
     const axiosSecure = useAxiosSecure();
  const { data: pendingApplication = [] } = useQuery({
    queryKey: ["pending"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/pending-application/borrower`);
      return res.data;
    },
  });
    return (
        <div>
            <div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-6">
        <div className="flex flex-col items-center justify-center border rounded-md shadow-sm">
          <h2 className="text-md">Pending Application</h2>
          <p className="text-2xl font-bold mt-2">{pendingApplication.length}</p>
        </div>
        
      </section>
    </div>
        </div>
    );
};

export default BorrowerDashboardHome;