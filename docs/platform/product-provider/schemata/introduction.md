---
title: Introduction
sidebar-position: 1
---

All interactions between RezKit, or any other compatible system, and the product provider are defined by published
schemata. All service requests and responses must validate against these schemata.

The canonical root URL for all schemata is https://schema.rezkit.app/, each schema uses its canonical URL as the `$id`.
For example: `https://schema.rezkit.app/1.0/product-provider/package`

:::tip Current Version
The current schemata version is **v1.0**
:::

Version Compatibility
---------------------

Updated versions contain an incompatible change, such as a field being removed, renamed,
or having its data type changed.

Changes that will result in a new major version of a schema being published are:

* Fields being renamed without the previous name being kept for compatibility reasons.
* Fields being removed.
* New required fields being added.
* Optional fields being made required.
* Field data types being changed such that the previous data type is no longer permissible.
* Field validations being changed such that some values previously valid are no longer valid.

Changes which can be made to an existing schema version without requiring a new version are:

* New optional fields being added.
* Additional permitted data types being added to an existing field.
* Validation being changed such that all previously valid values remain valid in the updated schema.
