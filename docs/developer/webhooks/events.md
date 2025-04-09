---
sidebar_position: 2
---

# Events Reference

## Bookings

Payload Schema: Booking

### `booking.created`

Called after a new booking is created.

### `booking.updated`

Called after an existing booking is updated.

## Passengers

Payload Schema: Passenger

### `booking.passenger.created`

Called after a new passenger is created.

### `booking.passenger.updated`

Called after an existing passenger is updated.

## Reservations

Payload Schema: Reservation

### `booking.reservation.created`

Called after any new reservation is created. 
To receive only confirmed reservations use `booking.reservation.confirmed`

### `booking.reservation.confirmed`

Called after a reservation is confirmed, including reservations which are confirmed immediately on creation.

### `booking.reservation.cancelled`

Called after a reservation is cancelled.

### `booking.reservation.errored`

Called after a reservation was attempted to be confirmed or cancelled, but the provider refused the change.

## Customers

### `customer.created`

Called when a new customer is created.

### `customer.updated`

Called when an existing customer is updated.

### `customer.deleted`

Called after a customer is deleted. 
The customer data is available in the webhook payload but no longer exists in the API.

## Notes

Payload Schema: Note

### `note.created`

Called when a new note is created

### `note.updated`

Called when a note is updated

## Special

Payload Schema: _variable_.

### `*`

The wildcard event, called for **all** webhook events. Use with caution!
