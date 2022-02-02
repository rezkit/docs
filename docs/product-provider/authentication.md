---
sidebar_position: 2
---

# Authentication

All calls to a product provider's API **must** be authenticated and you **must**
reject all requests which have missing or invalid authentication data.

## Credentials

Credentials for product providers consist of two parts. 
A public credential, called the _Credential ID_, and a private or secret credential, called the _Private Credential_.

The _Credential ID_ is transmitted over-the-wire to identify the user making the request, think of it as being a kind
of username.

The _Credential Secret_ is **never** transmitted, it is used to digitally sign requests to assert their authenticity
and that they originate from the owner of the _Credential ID_.

## Authentication Mechanism

All requests are authenticated by using a request signature, sent in an HTTP header called `X-Request-Signature`, e.g.

```http request
X-Request-Signature: <credential_id> <timestamp> <signature_method>:<signature>
```

Where the `credential_id` is the ID of the credentials used for the request,
`timestamp` is a UNIX timestamp of when the request was signed, 
`signature_method` is the method used to create the signature. 
Currently only SHA256 is supported. 
`signature` is the signature for the request.

The signature is an HMAC with a payload composed of:

* The timestamp
* The first 1024 bytes of the request body

These values are joined together with no separator, the body is omitted on requests without a body.

The signature secret is the _Credential Secret_ part of the credentials described above.

The provider **MUST** verify the validity of the credential ID, and that the provided timestamp is either current or recent.

The provider **SHOULD** also fully verify the request signature against the provided request. 
Verification of the request signature prevents replay attacks and leverages the 
out-of-band authorization provided by the secret credential.

