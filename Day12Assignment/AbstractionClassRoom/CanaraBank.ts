// Create an Abstract Class CanaraBank that implements Payments interface and adds
// `recordPaymentDetails()` for payment specifics. 
import { Payments } from "./Payments";
export abstract class CanaraBank implements Payments{
    abstract cashOnDelivery(): void 
    abstract upiPayments(): void
    abstract cardPayments(): void
    abstract internetBanking(): void 
    recordPaymentDetails():void{
        console.log("Recording payment details for Canara Bank.");
    }
}