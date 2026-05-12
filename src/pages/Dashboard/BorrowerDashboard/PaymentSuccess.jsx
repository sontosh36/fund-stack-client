import React from "react";
import { Link } from "react-router";

const PaymentSuccess = () => {
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
