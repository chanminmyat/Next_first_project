"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import {
  Appearance,
  StripeElementsOptions,
  loadStripe,
} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useStore } from "@/app/store/stripeStore";
import RegisterForm from "./registerComponent/RegisterForm";
import StripeCheckoutForm from "./registerComponent/StripeCheckoutForm";
import Image from "next/image";

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUB_KEY}`);

export default function register() {
  const { count } = useStore();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const registerAcc = async () => {
      const result = await axios.post("/api/create-payment-intent", {
        data: { amount: 50 },
      });
      const data = await result.data;
      setClientSecret(data);
    };
    registerAcc();
  }, []);

  const appearance: Appearance = {
    theme: "stripe",
  };

  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  return (
    <main>
      <div className="relative bg-gradient-to-b from-[#0A0A37] to-[#1D204E] lg:pt-[200px] pt-[100px] overflow-hidden">
        <div className="w-[110%] mb-[-1px] mr-[0px] ml-[-5px] lg:mt-[-200px] md:mt-[-100px] mt-[-50px]">
          <Image
            width={100}
            height={100}
            className="w-[110%] h-auto"
            src="/assets/img/elements/triangle-white.svg"
            alt={""}
          />
        </div>
        <div className="bg-white">
          <div className="flex flex-col items-center pt-[50px] mb-[-60px]">
            <h2 className="caption text-dark-blue">Get Started</h2>
            <span className="caption__underline"></span>
          </div>
          <div className="w-full h-[1000px] md:bg-bg_img bg-right bg-no-repeat bg-white z-10">
            <div className="sm:w-[400px] w-[300px] md:ml-[250px] mx-auto mt-14 mb-3">
              <section className="flex flex-row">
                <div>
                  <div className="step__icon bg-light-blue">
                    <FaUser className="h-[50px] text-white" />
                  </div>
                  <p className="text-light-blue step__text">Account</p>
                </div>
                <div
                  className={`w-full h-[2px] mt-[25px] ${
                    count === 1 ? "bg-[#c2c2c2]" : "bg-light-blue"
                  }`}
                ></div>
                <div>
                  <div
                    className={`step__icon ${
                      count === 1 ? "bg-[#c2c2c2]" : "bg-light-blue"
                    }`}
                  >
                    <FaCreditCard className="h-[60px] w-[25px] text-white" />
                  </div>
                  <p
                    className={`step__text ${
                      count === 1 ? "text-[#c2c2c2]" : "text-light-blue"
                    }`}
                  >
                    Payment
                  </p>
                </div>
              </section>
            </div>
            <div>
              {count === 1 && (
                <motion.div
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="form flex flex-col z-30"
                >
                  <RegisterForm />
                </motion.div>
              )}
              {count === 2 && (
                // Payment Form Begin Here
                <motion.div
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="form flex flex-col z-30"
                >
                  {clientSecret && (
                    <Elements stripe={stripePromise} options={options}>
                      <StripeCheckoutForm />
                    </Elements>
                  )}
                </motion.div>
              )}
            </div>
          </div>
          <div className="w-[110%] mb-[-1px] mr-[0px] ml-[-5px] mt-[-130px] z-0">
            <Image
              width={100}
              height={100}
              className="w-[110%] h-auto"
              src="/assets/img/elements/triangle-dark-blue.svg"
              alt={""}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
