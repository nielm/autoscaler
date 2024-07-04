# Untitled number in Cloud Spanner Autoscaler configuration Schema

```txt
https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/overloadStepSize
```

Amount of capacity that should be added when the Cloud Spanner instance is overloaded, and the `STEPWISE` method is used

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                       |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [autoscaler-config.schema.json\*](../../usr/local/google/home/nielm/spanner/autoscaler/out/autoscaler-config.schema.json "open original schema") |

## overloadStepSize Type

`number`

## overloadStepSize Constraints

**minimum**: the value of this number must greater than or equal to: `1`

## overloadStepSize Default Value

The default value is:

```json
"5 NODES or 500 PROCESSING_UNITS"
```
