---
sidebar_position: 4
---

# API: Get Product

The first API we need to implement is one which allows us to
get a single product by its ID.

For our purposes we'll use `/product/:id`.

:::tip Method Routing

There's no specific URL format required for API methods, we'll tell
RezKit how our URLs work later in this guide.

:::

Here's the code we need to build this method:

```javascript server.js
const products = require('./data/products.json');

app.get('/products/{id}', (req, res) => {
    const { id } = req.params;
    
    const product = products.find((p) => p.id === id);
    
    if (product) {
        res.json(product).status(200);
    } else {
        res.json({ error: 'Product not found'}).status(404);
    }
})
```

If we merge that into our `server.js` file before the call to start
the app. Then run it...

```bash
$ curl http://localhost/products/product_1
# => {"id": "product_1", "name": "My Product" /* ... */ }

$ curl http://localhost/products/not-a-real-id
# => {"error": "Product not found"}
```

Next we'll implement a way to search our products...
