---
sidebar_position: 3
---

# Product Data

The first thing we need to provide is access to our product data.
All providers need to provide access to search and view product data at the minimum.

## Create Some Product Data

For our example we'll be defining our product data in a JSON file which we'll
load when the application starts. We'll be creating "Package" products in this example, as they're
the most straightforward product archetype.

:::danger

While we're loading the product data from JSON in this example.
Reservations and availability are lost whenever our application is restarted.
In a real provider, the data must persist between restarts using a database or other persistent storage.

:::

The schema for product data is available [here](http://schema.travelzen.app/1.0/product-provider/package).
There are many more optional fields available in the package schema, but for now we'll just fill in the basics.

```json data/products.json
[
    {
        "id": "product_1",
        "name": "My Product",
        "pricing": {
            "price": {
                "currency": "GBP",
                "value": 10000
            }
        },
        "inventory": {
            "type": "allocation",
            "available": 10
        }
    },
]
```

:::tip Money Representation

Note that monetary values must be expressed as integer values of the smallest currency expoent.
(e.g. pennies). This is common throughout all the RezKit APIs.

:::

The above example creates a product called "My Product" with a unique identifier of `product_1`.
Identifiers are strings and can be anything, as long as they are unique between
all products and aren't re-used. The price for this product is £100.00, and there are 10 available to reserve.

Now we have the data there are some required API methods we must implement for our provider to register with RezKit.
