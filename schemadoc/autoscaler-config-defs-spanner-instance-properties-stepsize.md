# Untitled number in Cloud Spanner Autoscaler configuration Schema

```txt
https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/stepSize
```

Amount of capacity that should be added or removed when scaling with the STEPWISE method.
When the Spanner instance size is over 1000 `PROCESSING_UNITS`, scaling will be done in steps of 1000 `PROCESSING_UNITS`.
For more information see the [Spanner compute capacity documentation](https://cloud.google.com/spanner/docs/compute-capacity#compute_capacity)

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                       |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [autoscaler-config.schema.json\*](../../usr/local/google/home/nielm/spanner/autoscaler/out/autoscaler-config.schema.json "open original schema") |

## stepSize Type

`number`

## stepSize Constraints

**minimum**: the value of this number must greater than or equal to: `1`

## stepSize Default Value

The default value is:

```json
"2 NODES or 200 PROCESSING_UNITS"
```
