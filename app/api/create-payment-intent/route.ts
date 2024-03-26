import { useStore } from "@/app/store/stripeStore";
import dotenv from "dotenv";
dotenv.config();
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
  typescript: true,
  apiVersion: "2023-10-16",
});

export async function POST(req: NextRequest) {
  const { data } = await req.json();
  const { amount } = data;
  //console.log(cusName)
  try {
    // const customer = await stripe.customers.create(
    //   {
    //     name: cusName,
    //     email: cusEmail 

    //   }
    // )
    const paymentIntent: any = await stripe.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: "gbp",
      //customer: customer.id,
    });

    return new Response(paymentIntent.client_secret);
  } catch (error: any) {
    return new NextResponse(error, {
      status: 400,
    });
  }
}
