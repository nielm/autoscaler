# Untitled undefined type in Cloud Spanner Autoscaler configuration Schema

```txt
https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/scalingMethod
```

Scaling method that should be used. See the [scaling methods](https://github.com/cloudspannerecosystem/autoscaler/blob/main/src/scaler/README.md#scaling-methods) for more information

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                       |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [autoscaler-config.schema.json\*](../../usr/local/google/home/nielm/spanner/autoscaler/out/autoscaler-config.schema.json "open original schema") |

## scalingMethod Type

unknown

## scalingMethod Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"STEPWISE"` |             |
| `"LINEAR"`   |             |
| `"DIRECT"`   |             |

## scalingMethod Default Value

The default value is:

```json
"STEPWISE"
```
