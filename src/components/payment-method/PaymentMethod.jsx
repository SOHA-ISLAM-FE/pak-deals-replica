import React from 'react'
import { Link } from "react-router-dom";
import visa from "../../assets/images/visa.png";
import applePay from "../../assets/images/applePay.png";
import discover from "../../assets/images/discover.png";
import dashPay from "../../assets/images/dashPay.png";
import amex from "../../assets/images/amex.png";
import payPal from "../../assets/images/payPal.png";

function PaymentMethod() {
  return (
    <>
    <Link to="#" className="text-gray-600">
    <img src={visa} alt="alsd" className="w-5 h-5" />
    </Link>
    <Link to="#" className="text-gray-600">
    <img src={applePay} alt="alsd" className="w-5 h-5" />
    </Link>
    <Link to="#" className="text-gray-600">
    <img src={discover} alt="alsd" className="w-5 h-5" />
    </Link>
    <Link to="#" className="text-gray-600">
    <img src={dashPay} alt="alsd" className="w-5 h-5" />
    </Link>
    <Link to="#" className="text-gray-600">
    <img src={amex} alt="alsd" className="w-5 h-5" />
    </Link>
    <Link to="#" className="text-gray-600">
    <img src={payPal} alt="alsd" className="w-5 h-5" />
    </Link>
  </>
  )
}

export default PaymentMethod