---
sidebar_position: 7
---

# Taking Reservations

Right now, we have the ability to serve products to RezKit. 
These products can already be reserved internally within RezKit, but we don't
have a way to those reservations to come through to our provider and update our inventory.

To take bookings we need to implement two methods:

* Create a new reservation
* Cancel a reservation

Reservations, once created and persisted to your provider are _immutable_. This means that to make
a change to an existing reservation, it must first be cancelled, then re-booked.

For our example we'll use an array to store reservations.

## Creating New Reservations

:::danger Data Persistence

In this example we're using an in-memory array to store the reservations. 
This means the reservations will be lost whenever our provider restarts, and won't scale out.
In a real provider you need to persist reservations permanently.

:::

```javascript title="server.js (Create Reservation)"
// Global array of reservations.
const reservations = [];

// This API method will receive details of a product & passengers being booked.
req.post('/reservations', (req, res) => {
    // First we check the product exists...
    const { productId, passengers } = req.body; 
    
    const product = products.find((p) => p.id === productId);
    
    // If no such product exists, reject the booking...
    if (!product) {
        // Make sure to set a meaningful error message here
        // as it will be shown in the RezKit app to explain
        // why a reservation couldn't be made.
        res.status(422).json({ error: `No product with id ${productId} found.` }); 
        return;
    }
    
    // Check there are enough available spaces to accommodate the passengers.
    if (product.inventory.available < passengers.length) {
        res.status(422).json({ error: 'Not enough spaces available' }); 
        return;
    }
    
    // Here you could add your own business logic as to wheather or not to
    // accept/place the reservation.
    
    // We need to generate a *unique* reference for the reservation.
    // This reference must be globally unique and cannot be re-used between reservations
    // for a given product.
    // Here we're using the current timestamp, and the count of reservations. 
    const reference = Date.now() + '-' + reservations.length;
    
    // In our case the price listed was per-person, so the total price is multiplied
    // by the number of pasengers.
    // You could additionally apply other rules here which affect the price paid for a
    // particular reservation.
    const price = product.pricing.price;
    price.value *= passengers.length;
    
    // Add the reservation to our list.
    reservations.push({ reference, productId, passengers, cancelled: false });
    
    // Tell RezKit we made the reservation, what the reference is, and what the price is.
    res.status(201).json({ reference, price });
});
```

Add this to `server.js` and restart the app. Now you can try making a booking with the following request:

```shell
$ curl -XPOST -H 'Content-Type: application/json' http://localhost:3000/reservations -d \
  '{"productId": "product_1", "passengers": [{"name": "John Smith", "dateOfBrith": "1988-02-02"}]'
```

You should get back a JSON response with a reference, and a price for one passenger.

## Cancelling Reservations

We also need a way to cancel a reservation once made.

```javascript
app.post('/reservations/cancel', (req, res) => {
    const { reference, productId } = req.body;
    
    // Check for the reservation
    const reservation = reservations.find((r) => r.reference === reference && r.productId === productId);
    
    // No matching reservation found
    if (!reservation) {
        res.status(404).json({error: 'Reservation not found'});
        return;
    }
    
    // If the reservation is already cancelled, tell RezKit with a "304 not modified"
    if (reservation.cancelled) {
        res.status(304);
        return;
    }
    
    // Here you could add your own business logic to determine if a reservation
    // is eligible to be cancelled or not.
    // If a reservation can't be cancelled, return a status of 422 Unprocessible Entity
    const idx = reservations.indexOf(reservation);
    reservations[idx].cancelled = true;
    
    // Tell RezKit the reservation is now cancelled with a 202 Accepted response.
    res.status(202).json({ referrence });
});
```
