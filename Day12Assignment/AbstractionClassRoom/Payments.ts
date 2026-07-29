// Create an Interface Payments with the following abstract methods:
// - cashOnDelivery()
// - upiPayments()
// - cardPayments()
// - internetBanking() 

export interface Payments{
    cashOnDelivery():void
    upiPayments() :void
    cardPayments():void
    internetBanking(): void
}