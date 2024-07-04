# Untitled number in Cloud Spanner Autoscaler configuration Schema

```txt
https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/scaleInCoolingMinutes
```

Minutes to wait after scaling IN or OUT before a scale IN event can be processed.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                       |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [autoscaler-config.schema.json\*](../../usr/local/google/home/nielm/spanner/autoscaler/out/autoscaler-config.schema.json "open original schema") |

## scaleInCoolingMinutes Type

`number`

## scaleInCoolingMinutes Constraints

**minimum**: the value of this number must greater than or equal to: `1`

## scaleInCoolingMinutes Default Value

The default value is:

```json
30
```
