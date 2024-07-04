# Untitled number in Cloud Spanner Autoscaler configuration Schema

```txt
https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/regional_margin
```

Margin above and below the threshold where the metric value is allowed.
If the metric falls outside of the range `[threshold - margin, threshold + margin]`, then the regional instance needs to be scaled in or out.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                       |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [autoscaler-config.schema.json\*](../../usr/local/google/home/nielm/spanner/autoscaler/out/autoscaler-config.schema.json "open original schema") |

## regional\_margin Type

`number`

## regional\_margin Constraints

**minimum**: the value of this number must greater than or equal to: `1`

## regional\_margin Default Value

The default value is:

```json
5
```
