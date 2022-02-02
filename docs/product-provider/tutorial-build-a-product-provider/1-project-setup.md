---
sidebar_position: 2
---

# Project Setup

For our example we'll be using JavaScript and [express](https://expressjs.com/)
to build a simple example provider for booking products from a local database.

:::tip Development Tip

While we're using JavaScript and [express](https://expressjs.com/) in this tutorial, you can implement a provider
in any language. You just need to provide the API methods described.

:::

## Step 1. Create the project

### 1. Create the workspace
```shell
git init my-provider
cd my-provider/
yarn init # Follow the questions prompted
```

### 2. Install the dependencies
```shell
yarn add express
```

## Step 2. Initialize a basic API

```javascript server.js
const Express = require('express'),
      app = Express(),
      port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
```

## Step 3. Run the app & verify

```bash
yarn exec node ./server.js
# => App listening on http://localhost:3000/
```

```bash
curl http://localhost:3000/
# => Hello World!
```
