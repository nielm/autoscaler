# Untitled number in Cloud Spanner Autoscaler configuration Schema

```txt
https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/overloadCoolingMinutes
```

Minutes to wait after scaling IN or OUT before a scale OUT event can be processed, when the Spanner instance is overloaded.
An instance is overloaded if its High Priority CPU utilization is over 90%.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                       |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [autoscaler-config.schema.json\*](../../usr/local/google/home/nielm/spanner/autoscaler/out/autoscaler-config.schema.json "open original schema") |

## overloadCoolingMinutes Type

`number`

## overloadCoolingMinutes Constraints

**minimum**: the value of this number must greater than or equal to: `1`

## overloadCoolingMinutes Default Value

The default value is:

```json
5
```
