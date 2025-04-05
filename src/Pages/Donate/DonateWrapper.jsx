
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Donate from "./Donate";

// const stripePromise = loadStripe("pk_test_51NEmoNFWPYSADqPOA8WN4gvRXSpYzViS35uuxdGAPfhrIGat7E0xrDNLKjpcqHfnlagelzz4shuD1V26iyDKzCcf00qqLbIWUO");
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const DonateWrapper = () => {
    return (
        <Elements stripe={stripePromise}>
            <Donate />
        </Elements>
    );
};

export default DonateWrapper;
