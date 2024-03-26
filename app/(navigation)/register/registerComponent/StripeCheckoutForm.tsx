"use client";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useStore } from "../../../store/stripeStore";
import { useEffect, useState } from "react";

const StripeCheckoutForm = () => {
  const { dec,name,setName,email,businessName,password } = useStore();
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC_PLATFORM_NESTJS_URL}/pos/accounts`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        username:"",
        business_name:businessName,
        email_contact:email,
        password: password,
        country_key:"UK",
        language:"eng"
      })
    })

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        
        // Make sure to change this to your payment completion page,
        return_url: "http://localhost:3000",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(`${error.message}`);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const handleOnChange= (e:any) => {
    setName(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} action="">
      <div className="mb-4">
        <label className="form__label" htmlFor="Cardname">
          Name
        </label>
        <input
          className="form__input"
          type="text"
          name="cardName"
          placeholder="Enter Card Name"
          value={name}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <PaymentElement id="payment-element" />
      </div>
      <div className="mb-3">
        <p className="text-sm text-[#5e5e5e]">
          By providing your card information, you allow RingZero Networks
          (Thailand) Co., Ltd to charge your card for future payments in
          accordance with their terms.
        </p>
        <span className="underline"></span>
      </div>
      <div className="mb-3">
        <div className="flex sm:space-x-[280px] space-x-[200px] w-full text-xl font-bold">
          <h3>Monthly Fees</h3>
          <h3>£ 50</h3>
        </div>
        <span className="underline"></span>
      </div>
      <div className="text-right font-bold text-[18px] pb-2 text-[#4C1E51]">
        Join us Now and get 14 days Free Trial !
      </div>
      <div className="mb-1 text-red-500 text-sm font-bold">
        {message && <div id="payment-message">{message}</div>}
      </div>
      <div className="flex justify-end">
        <button onClick={dec} type="button" className="form__btn text-lg">
          Previous
        </button>
        <button
          disabled={isLoading || !stripe || !elements}
          type="submit"
          className="form__btn text-lg ml-3"
        > 
          {isLoading ? "Loading..." : "Register"}
        </button>
      </div>
    </form>
  );
};

export default StripeCheckoutForm;
