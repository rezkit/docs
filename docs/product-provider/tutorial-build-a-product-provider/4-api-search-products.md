---
sidebar_position: 5
---

# API: Search Products

Even though our example file only has one product in it, 
we still need to provide a search API so that our products can be aggregated
into searches for packages matching some criteria.

We'll put our search at `/products/search` and implement the basic search parameters:


We'll also implement sorting and pagination so our results show up in the right place.

```javascript
app.get('/products/search', (req, res) => {
    const filters = req.query;
    
    const results = products.filter((p) => {
        let match = true;
        
        // Filter products by price
        if (filters.price) {
            match &= p.pricing.value >= filters.price.min &&
                     p.pricing.value <= filters.price.max; 
        }
        
        return match;
    });
    
    req.status(200).json(results);
});
```
