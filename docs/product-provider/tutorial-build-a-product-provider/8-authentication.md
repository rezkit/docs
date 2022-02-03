---
sidebar_position: 9
---

# Authentication

To secure access to our products and to ensure only those we grant access to can make reservations,
we need to add authentication to our API.

The Authentication method used between RezKit and product providers is described in detail
in [this dedicated article][auth-spec]

## Implementing the Credentials

Since we're going to be te only users of our product provider, we'll just use a single set of
credentials.

We'll need a public credential, and a private credential. We need to know both of these to be
able to make, and to authenticate a request.

:::danger Using Multiple Credentials

While our provider will only have a single set of credentials, you should carefully consider
if you might need more than one set of credentials.
Credentials should never be shared between multiple parties.

:::

We'll create a new file called `auth.js` and define the credentials in there...

```javascript title="auth.js"
const PUBLIC_CREDENTIAL = "public"
const PRIVATE_CREDNTIAL = process.env.PRIVATE_CREDENTIAL || 'demo_credential';
```

## Implementing the Authentication Middleware

In our example, we'll implement the authentication as an Express middleware function.
It'll take any incoming request, validate the contents, and pass the request along only if
the authentication data is valid.

```javascript
const { createHmac } = require('crypto');

module.exports = function(req, res, next) {
    const requestSignature = req.headers['x-request-signature'];
    
    if (!requestSignature) {
        res.status(401).json({ error: "X-Request-Signature missing" });
        return;
    }
    
    // Split the signature into its parts...
    const [credentialId, timestamp, signature] = requestSignature.split(' ');
    
    // Check the public credential matches...
    if (credentialId !== PUBLIC_CREDENTIAL) {
        res.status(401).json({ error: 'Invalid Credentials'});
        return;
    }
    
    // Check the timestamp is recent...
    const now = Date.now();
    const requestTimestamp = parseInt(timestamp, 10) * 1000; // Convert timestamp to milliseconds...
    
    // Check that the timestamp is within 5 minutes of now
    if (Math.abs(now - requestTimestamp) > 300_000) {
        res.status(401).json({ error: 'Invalid timestamp' });     
        return;
    }
    
    // Check the signature...
    const hmac = createHmac('sha256', PRIVATE_CREDENTIAL);
    hmac.write(timestamp);
    
    if (req.method === 'POST') {
        hmac.write(req.body.slice(0, 1024));
    }
    
    const correctSignature = hmac.digest().toString('hex');
    const [_, givenSiganture] = signature.split(':');
    
    if (givenSiganture !== correctSignature) {
        res.status(401).json({error: 'Invalid signature'});
        return;
    }
    
    // Authentication passed, move onto the next handler...
    return next();
}
```

## Configuring the App

Finally we need to configure our application to use this function to sceen requests. We'll edit the top of our
server.js file to ensure it runs before anything else.

```javascript title="server.js"
const Express = require('express'),
      authenticate = require('./auth'),
      app = Express();
      
// Require authentication execept in our development environment
if (process.env.NODE_ENV !== 'development') app.use(authenticate);
```

[auth-spec]: /docs/product-provider/authentication
