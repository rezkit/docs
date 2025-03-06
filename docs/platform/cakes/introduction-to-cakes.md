Introduction to CAKEs
=====================

**CAKE**s, short for _Custom Additional Key Extensions_, are a feature of
RezKit. CAKEs allow RezKit's data models to be extended and customised by both
users as well as systems connected to RezKit, such as product providers.

**CAKE**s are a powerful tool for powering your workflows as well as for
managing additional compliance requirements.

**CAKE** Features
-----------------

* CAKEs can be created both by RezKit users as well as by connected systems,
  including product providers which can use CAKEs to request additional properties
  for passengers beyond those built into RezKit's data models.
* CAKEs support cascading deadlines; allowing for the deferred collection of
  data with a known deadline from which workflows can be driven.


**CAKE** Types
--------------

**CAKE**s come in five base flavours, which can be further enhanced and
decorated.

The base types of **CAKE**s are:

* Text
* Number
* Selection
* Boolean
* Section

With the following exceptions, each **CAKE** can hold a single value:

1. Selection **CAKE**s can be set to allow more than one option to be selected.
2. Section **CAKE**s hold no value, but instead group values for other cakes
   under a shared heading.

### Enhanced **CAKE** types

Some of the basic types support the use of enhanced input types, allowing for
powerful control to build user interfaces for managing these data.

These include various ways to pick choices for a _Selection_, as well as some
special-purpose inputs for _Text_. For example, the `transport` input allows for
the collection of a multi-segemtn transport itinerary.
