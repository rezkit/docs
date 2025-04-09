---
sidebar_position: 4
---

Product Reservations
====================
## Introduction

Product Reservations are the specific instances of a Product on a Booking. They are added to the customers booking when they book online or you can add Products to the booking within RezKit.

Within RezKit you can browse your products to create Product Reservation for a booking. Products can come from RezKit Product Manager or from other systems via a Product Provider.

Products could be tours, packages, accommodation, flights or more. Different products types may look and behave differently in RezKit. Products can have fixed dates or can have fixed duration and take place on any date within a date range specified on the product.

## Product Reservation Status
Product Reservations each have their own status.

| Status | Description |
| --- | --- |
| Pending | * This is the initial status that is used when you first add a Product Reservation to a Booking <br/> * The Price can be changed <br /> * The dates can be changed for non fixed date range products <br/> * Spaces are not being held |
| Confirmed | The spaces are available and have been reserved for this Product Reservation <br /> You cannot edit the price or dates for a Confirmed Product Reservation. If you need to change these you should cancel the Product Reservation and add a new Product Reservation |
| Cancelled | This Product Reservation has been cancelled and the spaces have been released / returned. <br/> Cancelled Product Reservations are kept on the booking so you have a record of all cancellations.  | 
| Archived | If a Product Reservation has been created or created and cancelled in error, and you want to exclude it from cancellation stats, you can archive Cancelled Product Reservations |
| Error | There was a problem when trying to Confirm this Product Reservation. A message will be shown with details of the problem. | 

There are two additional statuses that may be present if you product comes from an external Product Provider.

| Status | Description |
| --- | --- |
| Processing | Rezkit has requested that the Product Reservation be Confiremd and is waiting for the Product Provider to respond.  |
| Cancelling | The Product Provider has cancelled this Product Reservation. You should inform the Customer and set the status to Cancelled. |

## Passenger Allocation
When creating a new Product Reservation, whether or not you can or must allocate a passenger to the Product Reservation is determinted by the Products Occupancy.

If a Product has an Occupancy of 1:1, you must allocate at least one and at most one passenger to the product. This is a common scenario for a tour spaces.

If a Product has an Occupancy of 1:2, you must allocate at least one and at most two passengers to the product. This is the occupancy you might see for a twin room.

If a product has an Occupancy of 0:0, you cannot allocate any passengers to the product. i.e. you might use this for an administration fee.

## Discounts

Discounts are also shown in the Product Reservations table.

## Tags

You can add  [_Tags_](../tags) to Product Reservations.