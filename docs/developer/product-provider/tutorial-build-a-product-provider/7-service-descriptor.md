---
sidebar_position: 8
---

# Service Descriptor

RezKit doesn't require the API endpoints to be laid out in any specific way.
To tell RezKit how to use our newly built API methods, we need to provide a document that describes them.
This document is known as the **Service Descriptor**.

## The Service Descriptor Content

The first step is to build the service descriptor itself, which is just a JSON document.
For a full list of the options available, see the [JSON Schema][schema]

We'll define this in a JavaScript file, that way we can include dynamic sections and comments...

```javascript title=service.js
module.exports = {
    name: "My Product Provider", // The name of your provider...
    version: "1.0", // The version of the product provider specification targeted. (1.0)
    operations: {
        get_product: {           // This method is *required*
            // The URL to the endpoint for getting products. Can be relative or absolute.
            url: '/products/:id' 
        }
    },
    
    services: {
        // Define the service that provides package search and reservation
        // There are other kinds of provider for hotel/accommodation, and flights.
        packages: {
            config: {
                // If all your package SKUs have a set format
                // you can describe it as a regular expression.
                // Searches which contain a SKU not matching this expression will not be forwarded
                // to your provider.
                package_code_regexp: "/^product_/"
            },
            
            operations: {
                // URL of the package search endpoint
                package_search: {
                    url: '/products/search',
                    
                    // Specify the filtering options which are supported.
                    // Criteria for filters which are not supported are not 
                    // forwarded to the provider.
                    supported_features: [
                        "price_value_filter"
                    ]
                },
                
                // URL to create a package reservation
                book_package: {
                    url: '/reservations',
                },
                
                // URL to cancel a reservation
                cancel_booking: {
                    url: '/reservations/cancel'
                }
            }
        }
    }
}
```

Now we just need to create an API endpoint that returns this data:

```javascript
const service = require("./service");

api.get('/service', (req, res) => {
    res.status(200).json(service);
});
```

Now we have all the API methods in place.
Next, we'll add authentication to our provider to prevent unauthorized access to our data.

[schema]: https://schema.rezkit.app/1.0/product-provider/service-description
