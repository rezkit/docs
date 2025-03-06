CAKEs & Product Providers
=========================

[Product Providers][ref:providers] can use **CAKE**s to request additional
information about the passengers making a reservation, allowing them to fulfil
additional compliance and business needs in a seamless, flexible way that
integrates fully into the RezKit platform.

These additional fields can be set to be requested before a reservation
can be confirmed, set to be requested after confirmation but requried before a
given deadline, or be completely optional.

Defining Requirements
---------------------

Product Providers can specify their additional data requirements on a
per-product basis. Meaning that you can specify both requirements that apply to
all products, or ones which only apply to specific products.

When defining CAKEs for a product, the CAKEs will be applied to *all* passengers
on any reservation for that product.

### Where to put Definitions

To define additional properties for passengers making reservations on a product,
you may add an object `attributes` to your product definition which contains a
list of definitions for the additional properties.

:::tip
The `attributes` property only needs to be returned by the _get single product_
provider API method. It is ignored on all other API methods. 

Therefore you only need the capability to return the `attributes` for a _single
product_ at a time.
:::

The full definition of the `attributes` property is provided by [this JSON
schema][attributes-schema]

CAKEs are presented in the order in which they are provided in your `attributes`
array.

### Example

The following is a commented example of a possible set of attribute definitions.

:::warning Comments
Comments are included here for documentation purposes, and are not supported in
RezKit.
:::

```json
{
  // ... The rest of the product detail omitted from this example
  "attributes": [
    {
      // Create a group of fields called "insurance"
      "name": "insurance",
      "type": "section",
      "label": "Insurance Details",
      "description": "Please provide details of your travel insurance",
      // `requiredBy` and `requiredToReserve` on sections are inherited by
      // sub-attributes. If a sub-attribute has a `requiredBy` then the *earlist*
      // date is used. If any attribute has `requiredToReserve` then this
      // overrides the deadline and the attribute is required immediately.
      "requiredBy": "2026-01-01T00:00:00Z",
      "attributes": [
        {
          "name": "issuer",
          "type": "text",
          "label": "Policy Issuer Name",
          "description": "The name of the company which issued your travel insurance"
        },

        {
          "name": "policy_number",
          "type": "text",
          "label": "Policy Number"
        },

        {
          "name": "contact_telephone",
          "type": "text",
          "label": "Contact Telephone Number",
          "description": "A telephone number for us to contact your insurance provider",
          // Define additional presentation enhancements.
          // Note: Not all user interfaces support all presentation options.
          "presentation": {
            // Request the user be provided a special-purpose telephone number
            // field.
            "displayType": "telephone"
          }
        }
      ]
    } 
  ]
}
```

Reciving Attribute Values
-------------------------

Once you've defined the attributes, RezKit will convert these definitions into a
set of **CAKE**s for each passenger assigned to a reservation for your product.

:::note
RezKit re-checks the attribute definitions for a product whenever a passenger is
allocated to a slot on a reservation.
:::

When submitting a reservation confirmation request, or a reservation amendment
request, the current CAKE values will be collected and converted to a JSON
object. 
The JSON object's structure is taken from the structure of the attributes.
The object keys will use the `name` property of the attribute.
Values will be null if no value has been provided.

The values of the object will depend on the attribute type:

| Attribute Type | Value Type |
|:--------------:|:--------------- |
| `text` | String |
| `number` | Number |
| `boolean` | Boolean |
| `selection` | Array of Strings |
| `section` | Object of child attributes |


### Example

Given the following attribute definitions:

```json
[
    {
        "name": "insurance",
        "type": "section",
        "attributes": [
            { "name": "policy_number", "type": "text" },
            { "name": "contact_telephone", "type": "text" },
            { "name": "documents_submitted", "type": "boolean" },
            { "name": "policy_type", "type": "selection", "values": ["example"]} 
        ] 
    }
]
```


RezKit would provide the following `attributes` object for a passenger:

```json
{
    "insurance": {
        "policy_number": "string_value",
        "contact_telephone": "string_value",
        "documents_submitted": true,
        "policy_type": ["selection_option"]
    }
}
```

### Passengers with multiple reservations

When a passenger is allocated to multiple reservations for the same provider,
common attributes are merged into a single CAKE based on their name and path.

This means that if you define an attribute with the same path (e.g. `foo.bar`) on
multiple products, users will be presented with a single input that collects a
value for all reservations. 
RezKit will send the value of the attribute for *all* reservations. 
If you need different values or validation rules for different products, use a
different attribute name to prevent merging.

[ref:providers]: /docs/platform/product-provider/introduction
[attributes-schema]: https://schema.rezkit.app/1.0/product-provider/cake#


