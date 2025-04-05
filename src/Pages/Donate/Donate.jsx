/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
import visa from "../../assets/visa-card.png";
import paypal from "../../assets/paypal.png";
import mastercard from "../../assets/mastercard.png";
import strip from "../../assets/stripe.png";
import nogod from "../../assets/nogod.png";
import bkash from "../../assets/bkash.png";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const Donate = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentMessage, setPaymentMessage] = useState("");
    const [customAmount, setCustomAmount] = useState(false);

    const predefinedAmounts = [10, 25, 50, 100, 250];



    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            amount: 250,
            paymentMethod: "test"
        }
    });

    const watchAmount = watch("amount");


    const handleAmountClick = (amount) => {
        setValue("amount", amount);
        setCustomAmount(false);
    };

    const handleCustomAmountClick = () => {
        setCustomAmount(!customAmount);
    };


    // const onSubmit = async (data) => {
    //     console.log(data);
    //     const amount = parseFloat(data.amount);

    //     if (isNaN(amount) || amount <= 0) {
    //         return Swal.fire("Error", "Please provide a valid amount", "error");
    //     }

    //     console.log("Amount being sent:", amount); 

    //     const result = await Swal.fire({
    //         title: "Are you sure?",
    //         text: "Do you want to proceed with this donation?",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, donate!"
    //     });

    //     if (result.isConfirmed) {
    //         try {
    //             console.log("Amount being sent to the backend:", amount);
    //             const res = await fetch("https://management-server-flame.vercel.app/create-payment-intent", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify({ amount }), 
    //             });

    //             const { clientSecret } = await res.json();

    //             if (res.ok) {
    //                 const card = elements.getElement(CardElement);

    //                 if (!stripe || !card || !clientSecret) return;

    //                 const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
    //                     payment_method: {
    //                         card,
    //                         billing_details: {
    //                             name: data.name,
    //                             email: data.email
    //                         }
    //                     }
    //                 });

    //                 if (error) {
    //                     Swal.fire("Error", error.message, "error");
    //                 } else if (paymentIntent.status === "succeeded") {
    //                     Swal.fire("Thank You!", "Your donation has been successfully processed.", "success");


    //                     await fetch("https://management-server-flame.vercel.app/save-donation", {
    //                         method: "POST",
    //                         headers: {
    //                             "Content-Type": "application/json"
    //                         },
    //                         body: JSON.stringify({
    //                             amount: data.amount,
    //                             name: data.name,
    //                             email: data.email,
    //                             paymentIntentId: paymentIntent.id,
    //                         })
    //                     });
    //                 }
    //             } else {
    //                 Swal.fire("Error", "Failed to create payment intent. Please try again.", "error");
    //             }
    //         } catch (err) {
    //             Swal.fire("Error", "Payment failed. Please try again.", "error");
    //         }
    //     }
    // };

    const onSubmit = async (data) => {
        // console.log(data)
        const amount = parseFloat(data.amount);

        if (isNaN(amount) || amount <= 0) {
            return Swal.fire("Error", "Please provide a valid amount", "error");
        }

        const result = await Swal.fire({
            title: "Are you sure?",
            text: `You are donating $${amount}. Proceed?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, donate!"
        });

        if (result.isConfirmed) {
            try {
                const res = await fetch("https://management-server-flame.vercel.app/save-donation", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        amount,
                        name: data.name,
                        email: data.email,
                        address: data.address,
                        city: data.city,
                        paymentMethod: data.paymentMethod,
                        phone: data.phone,
                        zipCode: data.zipCode,
                    })
                });

                if (res.ok) {
                    Swal.fire("Thank You!", "Your donation has been successfully recorded.", "success");
                } else {
                    Swal.fire("Error", "Failed to save donation. Please try again.", "error");
                }
            } catch (err) {
                Swal.fire("Error", "Something went wrong. Please try again.", "error");
            }
        }
    };


    return (
        <div className="w-11/12 mx-auto p-5 bg-white">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 border p-4 rounded-md">
                <div className="flex gap-3">
                    <h2 className="font-bold mb-2">• Select Payment Method : </h2>
                    <div className="flex gap-4 mb-4">
                        <label className="flex items-center gap-2">
                            <input type="radio" {...register("paymentMethod", { required: true })} value="test" defaultChecked />
                            <span>Test Donation</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" {...register("paymentMethod", { required: true })} value="credit" />
                            <span>Credit Donation</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" {...register("paymentMethod", { required: true })} value="offline" />
                            <span>Offline Donation</span>
                        </label>
                    </div>
                </div>

                <div>
                    <div className="relative flex items-center mb-4">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <span className="text-gray-500">$</span>
                        </div>
                        <input
                            type="number"
                            {...register("amount", { required: "Donation amount is required" })}
                            className="pl-8 pr-4 py-2 border rounded w-full"
                            disabled={!customAmount}
                        />
                    </div>
                    {errors.amount && <p className="text-red-500">{errors.amount.message}</p>}
                    <div className="grid grid-cols-6 gap-2">
                        {predefinedAmounts.map((amount) => (
                            <button
                                key={amount}
                                type="button"
                                onClick={() => handleAmountClick(amount)}
                                className={`py-1 rounded ${watchAmount === amount && !customAmount ? "bg-yellow-400" : "bg-gray-200"}`}
                            >
                                ${amount}
                            </button>
                        ))}
                        <button
                            type="button"
                            onClick={handleCustomAmountClick}
                            className={`py-1 rounded ${customAmount ? "bg-yellow-400" : "bg-gray-200"}`}
                        >
                            Custom Amount
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                        <input type="text" {...register("name", { required: "Name is required" })} placeholder="Your Name*" className="w-full p-3 border rounded" />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </div>
                    <div className="relative">
                        <input type="email" {...register("email", { required: "Email is required" })} placeholder="Email Address*" className="w-full p-3 border rounded" />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                        <input type="text" {...register('address', { required: "Address is required" })} placeholder="Address*" className="w-full p-3 border rounded" />
                        {errors.address && <p className="text-red-500">{errors.address.message}</p>}
                    </div>
                    <div className="relative">
                        <input type="number" {...register('phone', { required: "Phone is required" })} placeholder="Phone*" className="w-full p-3 border rounded" />
                        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                        <input type="text" {...register('city', { required: "City is required" })} placeholder="City*" className="w-full p-3 border rounded" />
                        {errors.city && <p className="text-red-500">{errors.city.message}</p>}
                    </div>
                    <div className="relative">
                        <input type="text" {...register('zipCode', { required: "Zip Code is required" })} placeholder="Zip Code*" className="w-full p-3 border rounded" />
                        {errors.zipCode && <p className="text-red-500">{errors.zipCode.message}</p>}
                    </div>
                </div>

                <div className="mb-4">
                    <label className="flex items-center">
                        <input type="checkbox" {...register("termsAgreed", { required: "You must agree to the terms" })} className="mr-2" />
                        <span>I agree with the terms of service.</span>
                    </label>
                    {errors.termsAgreed && <p className="text-red-500">{errors.termsAgreed.message}</p>}
                </div>
                <div className="flex gap-2 mb-4">
                    <button type="button" className="border p-2 rounded">
                        <img src={visa} alt="Visa" className="h-6" />
                    </button>
                    <button type="button" className="border p-2 rounded">
                        <img src={paypal} alt="PayPal" className="h-6" />
                    </button>
                    <button type="button" className="border p-2 rounded">
                        <img src={mastercard} alt="Mastercard" className="h-6" />
                    </button>
                    <button type="button" className="border rounded">
                        <img src={strip} alt="Mastercard" className="h-10" />
                    </button>
                    <button type="button" className="border rounded">
                        <img src={bkash} alt="Mastercard" className="h-10 p-1" />
                    </button>
                    <button type="button" className="border rounded">
                        <img src={nogod} alt="Mastercard" className="h-10 p-1" />
                    </button>

                </div>
                {errors.amount && <p className="text-red-500">{errors.amount.message}</p>}

                {/* Card Element */}
                <CardElement
                    className="p-3 border rounded"
                    onChange={(event) => {
                        if (event.error) {
                            setPaymentMessage(event.error.message);
                        } else {
                            setPaymentMessage("");
                        }
                    }}
                />

                <div className="flex justify-between items-center">
                    <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 rounded flex items-center cursor-pointer">
                        Submit Donation
                    </button>

                    <div className="text-right flex items-center gap-2 py-2 px-3 border rounded-md">
                        <div>Total Donation:</div>
                        <div className="font-bold">${customAmount ? watch("amount") : watchAmount}.00</div>
                    </div>
                </div>
                {paymentMessage && <p className="text-red-500">{paymentMessage}</p>}

            </form>
        </div>
    );
};

export default Donate;
