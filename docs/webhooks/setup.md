---
sidebar_position: 1
---

# Webhook Setup

Webhooks can be set up using either GraphQL mutations, or RESTHooks.
A webhook can subscribe to one or more event types, including wildcard events to get all event types within a group.


## Requirements

Webhooks **must use https**, non https URLs for webhook endpoints will be rejected.

## Subscribing To Events

See the [event reference](./events) for a full list of events and their payloads.

It is possible to use wildcards when subscribing to events to get all events starting with the given prefix,
for example subscribing to `booking.reservations.*` will subscribe to all event types starting with `bookings.reservations`.

Subscribing to the special event `*` will subscribe the webhook to *all* events.

## Error Handling

If a webhook responds with a status code which is not within the "OK" range (codes 200 to 299) then
the webhook will be retried with a delay up to three (3) times before being cancelled.
