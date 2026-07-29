// Create a Concrete Class Amazon that inherits CanaraBank, implementing methods. 

import { CanaraBank } from "./CanaraBank";

class Amazon extends CanaraBank{
    cashOnDelivery(): void {
        console.log("Cash on Delivery payment method is available in Amazon.");
    }
    upiPayments(): void {
        console.log("UPI payment method is available in Amazon.");
    }
    cardPayments(): void {
        console.log("Card payment method is available in Amazon.");
    }
    internetBanking(): void {
        console.log("Internet banking payment method is available in Amazon.");
    }
}

const amazonPayment = new Amazon();
amazonPayment.cashOnDelivery();
amazonPayment.upiPayments();
amazonPayment.cardPayments();
amazonPayment.internetBanking();
amazonPayment.recordPaymentDetails();