---
sidebar_position: 1
---

# Tour Manager

RezKit Tour Manager is a flexible and complete system for creating, managing and marketing small-group and holiday packages.

To access Tour Manager data (for example to feed information to a website), there is a simple graphQL api and within Tour Manager itself, there is a graphQL explorer that you can use to create your queries.

Access is restricted by bearer token. Tokens are issued against a user account. Please email support@rezkit.com including your user account for a token.

The API endpoint for tours is: https://tours.api.rezkit.app/graphql
The GraphQL explorer is at: https://tours.rezkit.app/developer/graphql-explorer

NB: 
1. We recommend all development is done against a sandbox account.
2. RezKit's graphQL API will enforce a complexity limit please see https://docs.rezkit.app/docs/developer/api/limits for more information.


# Client Libraries

Official API client libraries are available for:

* [JavaScript & Typescript][repo:js]
* [PHP][repo:php]

[repo:js]: https://github.com/rezkit/tours-js
[repo:php]: https://github.com/rezkit/tours-php
