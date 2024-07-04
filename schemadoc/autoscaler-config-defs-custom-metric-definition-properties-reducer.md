# Untitled undefined type in Cloud Spanner Autoscaler configuration Schema

```txt
https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/reducer
```

The reducer specifies how the data points should be aggregated when querying for metrics, typically `REDUCE_SUM`.
For more details please refer to [Alert Policies - Reducer](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.alertPolicies#reducer) documentation.

> from <https://monitoring.googleapis.com/$discovery/rest?version=v3>

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                       |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [autoscaler-config.schema.json\*](../../usr/local/google/home/nielm/spanner/autoscaler/out/autoscaler-config.schema.json "open original schema") |

## reducer Type

unknown

## reducer Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                    | Explanation |
| :----------------------- | :---------- |
| `"REDUCE_NONE"`          |             |
| `"REDUCE_MEAN"`          |             |
| `"REDUCE_MIN"`           |             |
| `"REDUCE_MAX"`           |             |
| `"REDUCE_SUM"`           |             |
| `"REDUCE_STDDEV"`        |             |
| `"REDUCE_COUNT"`         |             |
| `"REDUCE_COUNT_TRUE"`    |             |
| `"REDUCE_COUNT_FALSE"`   |             |
| `"REDUCE_FRACTION_TRUE"` |             |
| `"REDUCE_PERCENTILE_99"` |             |
| `"REDUCE_PERCENTILE_95"` |             |
| `"REDUCE_PERCENTILE_50"` |             |
| `"REDUCE_PERCENTILE_05"` |             |

## reducer Default Value

The default value is:

```json
"REDUCE_SUM"
```
