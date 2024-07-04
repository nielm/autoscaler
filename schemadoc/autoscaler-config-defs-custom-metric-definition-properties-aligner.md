# Untitled undefined type in Cloud Spanner Autoscaler configuration Schema

```txt
https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/aligner
```

The aligner specifies how the data points should be aligned in the time series, typically `ALIGN_MAX`.
For more details please refer to [Alert Policies - Aligner](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.alertPolicies#aligner) documentation.

> Values from <https://monitoring.googleapis.com/$discovery/rest?version=v3>

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                       |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [autoscaler-config.schema.json\*](../../usr/local/google/home/nielm/spanner/autoscaler/out/autoscaler-config.schema.json "open original schema") |

## aligner Type

unknown

## aligner Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                    | Explanation |
| :----------------------- | :---------- |
| `"ALIGN_NONE"`           |             |
| `"ALIGN_DELTA"`          |             |
| `"ALIGN_RATE"`           |             |
| `"ALIGN_INTERPOLATE"`    |             |
| `"ALIGN_NEXT_OLDER"`     |             |
| `"ALIGN_MIN"`            |             |
| `"ALIGN_MAX"`            |             |
| `"ALIGN_MEAN"`           |             |
| `"ALIGN_COUNT"`          |             |
| `"ALIGN_SUM"`            |             |
| `"ALIGN_STDDEV"`         |             |
| `"ALIGN_COUNT_TRUE"`     |             |
| `"ALIGN_COUNT_FALSE"`    |             |
| `"ALIGN_FRACTION_TRUE"`  |             |
| `"ALIGN_PERCENTILE_99"`  |             |
| `"ALIGN_PERCENTILE_95"`  |             |
| `"ALIGN_PERCENTILE_50"`  |             |
| `"ALIGN_PERCENTILE_05"`  |             |
| `"ALIGN_PERCENT_CHANGE"` |             |

## aligner Default Value

The default value is:

```json
"ALIGN_MAX"
```
