---
sidebar_position: 2
---

# Bookings

## Latest bookings

Get the latest bookings (up to `$limit`), defaulting to the 5 most recently created bookings.

```graphql
query searchBookings($organizationId: ID!, $limit: Int = 5) {
    bookings {
        bookings(
            organizationId: $organizationId,    # Organization to get bookings for
            sort: CREATED_AT,                   # Gets the most recently created bookings
            dir: DIRECTION_DESC,     
            offset: 0,                          # Get the first results
            limit: $limit ) {                   # Limit the results
            
            id
            reference
            description
            
            totalValue {
                amount
                currency
            }
            
            createdAt
        }
    }
}
```
