---
sidebar_position: 3
---

# Limits

The following limits are imposed within the API.

## GraphQL Complexity

Limits on GraphQL operations are based on complexity. The more data you request in a single operation, 
the greater its complexity.

Things which increase an operation's complexity:

* Requesting more fields
* Requesting more entries from a list
* Running multiple queries or mutations in a single operation

Each field of each data type has its own complexity. When requesting a list of values such as with the `bookings()`
query, the complexity of the query is determined by both the fields requested, and the number of possible entries
requested.

For example, if you request data for up to 50 bookings, the complexity is 50 times the complexity of the fields
requested for one booking, plus a fixed complexity for the query itself. The value is based on the maximum number
of entries requested, and not the number of entries which would actually be returned.

If your operation exceeds the complexity limit, an error will be returned informing you of your operation's complexity
and the limit which it has exceeded:

```json
{
  "errors": [
    {
      "message": "Specified query complexity of 3893 exceeds limit of 3000"
    }
  ]
}
```
