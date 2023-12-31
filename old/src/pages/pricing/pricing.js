import React from 'react'
import './pricing.css'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function PricingPage() {
  const initialOptions = {
    "client-id": "test",
    currency: "USD",
    intent: "capture",
    "data-client-token": "abc123xyz==",
  };
  return (
    <div className='pricing-page-header'><PayPalScriptProvider options={{ "client-id": "test" }}>
    <PayPalButtons
        createOrder={(data, actions) => {
            return actions.order.create({
                purchase_units: [
                    {
                        amount: {
                            value: "1.99",
                        },
                    },
                ],
            });
        }}
        onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
                const name = details.payer.name.given_name;
                alert(`Transaction completed by ${name}`);
            });
        }}
    />
</PayPalScriptProvider>
    </div>
  )
}

export default PricingPage