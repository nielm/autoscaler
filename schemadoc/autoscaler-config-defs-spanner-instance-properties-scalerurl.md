# Untitled string in Cloud Spanner Autoscaler configuration Schema

```txt
https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/scalerURL
```

URL where the scaler service receives HTTP requests (Required for non-unified GKE deployments)

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                       |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [autoscaler-config.schema.json\*](../../usr/local/google/home/nielm/spanner/autoscaler/out/autoscaler-config.schema.json "open original schema") |

## scalerURL Type

`string`

## scalerURL Constraints

**minimum length**: the minimum number of characters for this string is: `2`

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^https?://.+
```

[try pattern](https://regexr.com/?expression=%5Ehttps%3F%3A%2F%2F.%2B "try regular expression with regexr.com")

## scalerURL Default Value

The default value is:

```json
"http://scaler"
```
