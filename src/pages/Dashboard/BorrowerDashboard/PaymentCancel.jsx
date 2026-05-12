import React from 'react';
import { Link } from 'react-router';

const PaymentCancel = () => {
    return (
        <div>
            <h2>payment cencelled . try agin</h2>
            <Link to={'/dashboard/my-loans'}>Go to Dashboard Page</Link>
        </div>
    );
};

export default PaymentCancel;