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
their data and your application.

## Connecting your Application

