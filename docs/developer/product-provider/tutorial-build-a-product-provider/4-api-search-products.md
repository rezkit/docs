---
sidebar_position: 5
---

# API: Search Products

Even though our example file only has one product in it, 
we still need to provide a search API so that our products can be aggregated
into searches for packages matching some criteria.

We'll put our search at `/products/search` and implement the basic search parameters:

Because our products don't have service dates on them, we'll just support filtering by price.

We'll also implement sorting and pagination so our results show up in the right place.

```javascript title=server.js
app.get('/products/search', (req, res) => {

    const offset = req.query.offset || 0,
          limit  = req.query.limit || 10;

    const results = products.filter((p) => {
        let match = true;

        let { price } = req.query;

        // Apply price filter
        if (price) {
            if (price.currency) match &= p.pricing.price.currency === price.currency;
            if (price.min) match &= p.pricing.price.value >= price.min;
            if (price.max) match &= p.pricing.price.value <= price.max;
        }

        return match;
    }).sort((a, b) => {
        // Sort Results
        const { sort } = req.query;
        
        switch (sort) {
            case 'id':
            case 'name':
                return a[sort] >= b[sort];
            case 'price':
                return a.pricing.price.value >= b.pricing.price.value;
            default:
                a
                return a.name >= b.name;
        }
    }).slice(offset, limit);

    res.status(200).json(results);
});
```

:::tip Just a Demo

Remember, this is just a simple demo of how to build a product provider on top
of a static data set. In a real application you would likely use a database to provide
the filtering, sorting and paging functionality.

:::
