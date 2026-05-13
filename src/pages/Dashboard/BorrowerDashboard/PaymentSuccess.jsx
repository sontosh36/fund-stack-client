import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const axiosSecure = useAxiosSecure();
  const sessionId = searchParams.get("session_id");
  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          if (res.data.paymentInfo.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Congratulations! Your payment received",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  }, [sessionId, axiosSecure]);
  return (
    <div>
      <h2>payment successful</h2>
      <button>
        <Link to={"/dashboard/my-loans"}>Go to Dashboard Page</Link>
      </button>
    </div>
  );
};

export default PaymentSuccess;
