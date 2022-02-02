---
sidebar_position: 3
---

# Service Descriptors

[Product Providers][pp] can be built in pretty much any technology
and the specification is designed to allow enough flexibility to allow teams
to build their services in the way that works best for them.

To help RezKit understand how your provider works, RezKit uses a **Service Descriptor**.

A service descriptor is an API call which returns a JSON document which describes
how to interact with your service. It specifies which product types are provided by the service.
It describes where to find the various API calls, and which optional features are available.

:::tip Caching

Service descriptors are cached for a period, with the cache based on the descriptor URL
and the public ID of the credential used to call it.

This means you can return different service descriptor information based on the public credential ID used.
:::

The schema for a service descriptor is available [here][schema]. Below is an example of a simple packages provider
taken from our [tutorial][tutorial]

[pp]: introduction
[schema]: #
[tutorial]: tutorial-build-a-product-provider/introduction
