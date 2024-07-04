# Untitled number in Cloud Spanner Autoscaler configuration Schema

```txt
https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/maxSize
```

Maximum number of Cloud Spanner `NODES` or `PROCESSING_UNITS` that the instance can be scaled OUT to

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                       |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [autoscaler-config.schema.json\*](../../usr/local/google/home/nielm/spanner/autoscaler/out/autoscaler-config.schema.json "open original schema") |

## maxSize Type

`number`

## maxSize Constraints

**minimum**: the value of this number must greater than or equal to: `1`

## maxSize Default Value

The default value is:

```json
"3 NODES or 2000 PROCESSING_UNITS"
```
