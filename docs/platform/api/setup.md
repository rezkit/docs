---
sidebar_position: 1
---

# Connecting to the API

## Get your API Credentials

The first step to connecting to your RezKit data is to create a set
of credentials to authenticate with.

You can get a new set of credentials by creating an app at https://rezkit.app/apps/new

Authentication with RezKit is achieved using OAuth 2.0,
new applications can only utilize the `authorization_code` and `refresh_token` grants.
This means that a user must first be presented with a consent screen to verify granting access between
their data and your application. The location of the consent page must match
one of the URLs configured on your application.

If you have an application which has no user-interaction, you can apply to get a `client_credentials` grant
for your application. This allows you to access the data in your organizations without a user. 
Some actions may be unavailable to these applications.
If you think you need a `client_credentials` application [click here][client_credentials_application]

## Connecting your Application
Configure your OAuth2 client library with the following settings:

|      Setting      | Value                                   |
|:-----------------:|:----------------------------------------|
| Authorization URL | https://dashboard.rezkit.app/oauth/auth |
|     Token URL     | https://api.rezkit.app/oauth/v2/token   |
|     Client ID     | _your client id_                        |
|   Client Secret   | _your client secret_                    |


[client_credentials_application]: #
