import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentDetailsModal = ({ loanId, modalRef }) => {
  const axiosSecure = useAxiosSecure();
  const { data: paymentDetails = [], isLoading } = useQuery({
    queryKey: ["paymentDetail", loanId],
    enabled: !!loanId,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment-details/${loanId}`);
      return res.data;
      
    },
  });
  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box max-w-2xl">
        <h3 className="font-bold text-2xl mb-5">Payment Details</h3>

        {isLoading ? (
          <div className="bg-base-300 min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <span className="loading loading-spinner loading-xl text-indigo-600"></span>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="bg-base-200 p-4 rounded-lg">
              <p>
                <strong>Loan Title:</strong> {paymentDetails.loanTitle}
              </p>
            </div>

            <div className="bg-base-200 p-4 rounded-lg">
              <p>
                <strong>application ID:</strong> {paymentDetails.applicationId}
              </p>
            </div>
            <div className="bg-base-200 p-4 rounded-lg">
              <p>
                <strong>Transaction ID:</strong> {paymentDetails.transactionId}
              </p>
            </div>

            <div className="bg-base-200 p-4 rounded-lg">
              <p>
                <strong>Paid At:</strong>{" "}
                {paymentDetails?.paidAt ? new Date(paymentDetails.paidAt).toLocaleString() : 'No Date'}
              </p>
            </div>

            <div className="bg-base-200 p-4 rounded-lg">
              <p>
                <strong>Email:</strong> {paymentDetails.borrowerEmail}
              </p>
            </div>
          </div>
        )}

        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-outline">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default PaymentDetailsModal;
