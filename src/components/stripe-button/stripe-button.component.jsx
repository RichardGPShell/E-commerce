import React from 'react';
import StripeCheckout  from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JCt2ZCKswTeNY9oFLCrj26b1X4GuoklGUaEaWXEBAxBljO3lodpjKnt93rZ3oEGcmHRfSIxM1zRSfcAtKcwiIfQ00Vt4EIlC9';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}/>
    );
}

export default StripeCheckoutButton;