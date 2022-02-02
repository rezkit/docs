---
sidebar_position: 6
slug: list-products
---

# Optional API: List Products

Right now we can get a product if we already know its ID. 
We can also search for products matching one or more criteria.
It would be useful if we could also get a full list of _all_ the packages
we offer. This data can be synced to RezKit to enable faster and more advanced searches.

:::tip Dynamic Packaging

Sometimes, a full inventory of all packages isn't available. 
Such as would be the case if packages are built dynamically.
For this reason the list API is _optional_, and providers who
do not have a list of all possible packages may omit this method.
It is recommended to implement this method if possible as it allows for
faster searches.

:::

In our case we just need to add a method for `/products` to simply return all products.

```javascript title=server.js
app.get('/products', (req, res) => {
    res.status(200).json(products);
});
```
