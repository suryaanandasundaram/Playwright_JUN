type paymentMethod = "UPI" | "CreditCard" | "PayPal";

function makePayment(payment: paymentMethod) {
    if (payment === "UPI") {
        console.log("Processing UPI payment...");
    } else if (payment === "CreditCard") {
        console.log("Processing Credit Card payment");
    } else if (payment === "PayPal") {
        console.log("Processing PayPal payment");
    } else {
        console.log("Invalid payment method");
    }
}

makePayment("UPI"); // Output: Processing UPI payment
makePayment("CreditCard"); // Output: Processing Credit Card payment
