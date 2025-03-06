Introduction to Dynamic Attributes
==================================

**Dynamic Attributes** allow RezKit's data models to be extended and customised by both
users as well as systems connected to RezKit, such as product providers.

**Dynamic Attribute**s are a powerful tool for driving your workflows as well as for
managing additional compliance requirements.

Dynamic Attribute Features
--------------------------

* Dynamic Attributes can be created both by RezKit users as well as by connected systems,
  including product providers which can use Dynamic Attributes to request additional properties
  for passengers beyond those built into RezKit's data models.
* Dynamic Attributes support cascading deadlines; allowing for the deferred collection of
  data with a known deadline from which workflows can be driven.


Dynamic Attribute Types
-----------------------

Dynamic Attributes come in five base flavours, which can be further enhanced and
decorated.

The base types of Dynamic Attributes are:

* Text
* Number
* Selection
* Boolean
* Section

With the following exceptions, each Dynamic Attribute can hold a single value:

1. Selection attributes can be set to allow more than one option to be selected.
2. Section attributes hold no value, but instead group values for other cakes
   under a shared heading.

### Enhanced **Dynamic Attribute** types

Some of the basic types support the use of enhanced input types, allowing for
powerful control to build screens for managing these data.

These include various ways to pick choices for a _Selection_, as well as some
special-purpose inputs for _Text_. For example, the `telephone` input allows for
the collection of a telephone number.

Check the [reference page](type-reference) for full details.
