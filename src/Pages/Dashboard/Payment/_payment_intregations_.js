/**
 * ----------------Stripe payment method
 * 1.Install stripe and react stripe js
 * 2.create a checkOut form with card element(card element contains: card Number,expiration date,cvs,zip code)
 * 3.create account on stripe and get the publishable key pk
 * 4.get card information
 * 5.create a payment method
 * 6.use test card to test payment
 * 7.on the server side:install stripe: npm install --save stripe
 * 8.create a payments intent api with payment method types:['cards]
 * make sure you provide amount in cents(multiply price with 100)
 * 9.call payment intent api to get client secret and store it in a store
 * 10.use confirmCardPayment api with client secret card info
 * 11.display confirm card error
 * 12.display confirm card success
 * 
 *---------------------------Do things after payment
 */