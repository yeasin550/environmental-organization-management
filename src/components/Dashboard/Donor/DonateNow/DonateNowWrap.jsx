


import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import DonateNow from "./DonateNow";

// const stripePromise = loadStripe("pk_test_51NEmoNFWPYSADqPOA8WN4gvRXSpYzViS35uuxdGAPfhrIGat7E0xrDNLKjpcqHfnlagelzz4shuD1V26iyDKzCcf00qqLbIWUO");
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const DonateNowWrap = () => {
    return (
        <Elements stripe={stripePromise}>
            <DonateNow />
        </Elements>
    );
};

export default DonateNowWrap;
