---
sidebar_position: 2
---

# Bookings

## Latest bookings

Get the latest bookings (up to `$limit`), defaulting to the 5 most recently created bookings.

```graphql
query latestBookings($organizationId: ID!, $limit: Int = 5) {
    bookings {
        bookings(
            organizationId: $organizationId,    # Organization to get bookings for
            sort: CREATED_AT,                   # Gets the most recently created bookings
            dir: DESC,     
            offset: 0,                          # Get the first results
            limit: $limit ) {                   # Limit the results
            
            id
            currency
            reference
            status
            description

            tags
            
            totalValue(onlyConfirmed: true) {
                amount
                currency
            }

            outstandingBalance {
                amount
                currency
            }

            customer {
                id
                name
                email
            }

            passengers {
                id
                name
                email
                dateOfBirth
                sex
                telephone
                cancelledAt

                customer {
                    id
                }
            }

            reservations {
                id
                status
                statusMessage
                reference
                startDate
                endDate

                product {
                    id
                    name
                    groupName
                    category
                    description
                    externalId
                    provider {
                        id
                        name
                    }
                }

                price {
                    amount
                    currency
                }
            }
            
            createdAt
        }
    }
}
```

## Find a Booking by Reference


```graphql
query getBookingByReference(
    $organizationId: ID!
    $reference: String!
    $includeContract: Boolean = false
    ) {
    
    bookings {
        booking(organizationId: $organizationId, reference: $reference) {
            id
            currency
            reference
            status
            description

            tags
            
            totalValue(onlyConfirmed: true) {
                amount
                currency
            }

            outstandingBalance {
                amount
                currency
            }

            customer {
                id
                name
                email
            }

            # PROTIP: Query the full passenger details at the booking root
            #         only and refer back to it from elsewhere.
            passengers {
                id
                name
                email
                dateOfBirth
                sex
                telephone
                cancelledAt

                # Currently a lot of company-specific details are kept in here.
                notes {
                    title 
                    content
                }

                passport {
                    number
                    issuedAt
                    expiresAt
                    placeOfIssue
                    countryCode
                }

                customer {
                    id
                }
            }

            notes {
               title
               content 
            }

            reservations {
                id
                status
                statusMessage
                reference
                startDate
                endDate
                balanceDue

                tags

                product {
                    id
                    name
                    groupName
                    category
                    description
                    externalId
                    tags
                    provider {
                        id
                        name
                    }
                }

                # PROTIP: Request only the ID here and reference
                # the full passenger details from the booking root.
                passengers {
                    id
                }

                price {
                    amount
                    currency
                }
            }

            transactions {
                id
                category
                status
                reference
                createdAt
                updatedAt
                amount {
                    amount
                    currency
                }
            }

            # Gets the details of any payments contract associated
            # with the booking, used for automated installment payment plans.
            contract @include(if: $includeContract) {
                id
                frequency
                currency
                amount
                occurrences
                chargeCount
                status
            }

            paymentAccount {
                id
                lastTransactedAt
                lastTransactionReference
            }

            createdAt
        }
    }
}
```