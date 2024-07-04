# Custom Metric Definition Schema

```txt
https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition
```

To specify a custom threshold specify the name of the metrics to customize followed by the parameter values you wish to change.
The updated parameters will be merged with the default metric parameters.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [autoscaler-config.schema.json\*](../../usr/local/google/home/nielm/spanner/autoscaler/out/autoscaler-config.schema.json "open original schema") |

## metricDefinition Type

`object` ([Custom Metric Definition](autoscaler-config-defs-custom-metric-definition.md))

# metricDefinition Properties

| Property                                                | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                       |
| :------------------------------------------------------ | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                                           | `string`      | Required | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-name.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/name")                                         |
| [filter](#filter)                                       | `string`      | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-filter.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/filter")                                     |
| [reducer](#reducer)                                     | Not specified | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-reducer.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/reducer")                                   |
| [aligner](#aligner)                                     | Not specified | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-aligner.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/aligner")                                   |
| [period](#period)                                       | `number`      | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-period.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/period")                                     |
| [regional\_threshold](#regional_threshold)              | `number`      | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-regional_threshold.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/regional_threshold")             |
| [multi\_regional\_threshold](#multi_regional_threshold) | `number`      | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-multi_regional_threshold.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/multi_regional_threshold") |
| [regional\_margin](#regional_margin)                    | `number`      | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-regional_margin.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/regional_margin")                   |
| [multi\_regional\_margin](#multi_regional_margin)       | `number`      | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-multi_regional_margin.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/multi_regional_margin")       |

## name

A unique name of the for the metric to be evaulated.
If you want to override the default metrics, their names are: `high_priority_cpu`, `rolling_24_hr` and `storage`.

`name`

* is required

* Type: `string`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-name.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/name")

### name Type

`string`

### name Constraints

**minimum length**: the minimum number of characters for this string is: `2`

## filter

The Cloud Spanner metric and filter that should be used when querying for data.
The Autoscaler will automatically add the filter expressions for Spanner instance resources, instance id and project id.

`filter`

* is optional

* Type: `string`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-filter.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/filter")

### filter Type

`string`

### filter Constraints

**minimum length**: the minimum number of characters for this string is: `2`

## reducer

The reducer specifies how the data points should be aggregated when querying for metrics, typically `REDUCE_SUM`.
For more details please refer to [Alert Policies - Reducer](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.alertPolicies#reducer) documentation.

> from <https://monitoring.googleapis.com/$discovery/rest?version=v3>

`reducer`

* is optional

* Type: unknown

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-reducer.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/reducer")

### reducer Type

unknown

### reducer Constraints

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

### reducer Default Value

The default value is:

```json
"REDUCE_SUM"
```

## aligner

The aligner specifies how the data points should be aligned in the time series, typically `ALIGN_MAX`.
For more details please refer to [Alert Policies - Aligner](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.alertPolicies#aligner) documentation.

> Values from <https://monitoring.googleapis.com/$discovery/rest?version=v3>

`aligner`

* is optional

* Type: unknown

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-aligner.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/aligner")

### aligner Type

unknown

### aligner Constraints

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

### aligner Default Value

The default value is:

```json
"ALIGN_MAX"
```

## period

Defines the period of time in units of seconds at which aggregation takes place. Typically the period should be 60.

`period`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-period.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/period")

### period Type

`number`

### period Constraints

**minimum**: the value of this number must greater than or equal to: `1`

### period Default Value

The default value is:

```json
60
```

## regional\_threshold

Threshold used to evaluate if a regional instance needs to be scaled in or out.

`regional_threshold`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-regional_threshold.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/regional_threshold")

### regional\_threshold Type

`number`

### regional\_threshold Constraints

**minimum**: the value of this number must greater than or equal to: `1`

## multi\_regional\_threshold

Threshold used to evaluate if a multi-regional instance needs to be scaled in or out.

`multi_regional_threshold`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-multi_regional_threshold.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/multi_regional_threshold")

### multi\_regional\_threshold Type

`number`

### multi\_regional\_threshold Constraints

**minimum**: the value of this number must greater than or equal to: `1`

## regional\_margin

Margin above and below the threshold where the metric value is allowed.
If the metric falls outside of the range `[threshold - margin, threshold + margin]`, then the regional instance needs to be scaled in or out.

`regional_margin`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-regional_margin.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/regional_margin")

### regional\_margin Type

`number`

### regional\_margin Constraints

**minimum**: the value of this number must greater than or equal to: `1`

### regional\_margin Default Value

The default value is:

```json
5
```

## multi\_regional\_margin

Margin above and below the threshold where the metric value is allowed.
If the metric falls outside of the range `[threshold - margin, threshold + margin]`, then the multi regional instance needs to be scaled in or out.

`multi_regional_margin`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-multi_regional_margin.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/multi_regional_margin")

### multi\_regional\_margin Type

`number`

### multi\_regional\_margin Constraints

**minimum**: the value of this number must greater than or equal to: `1`

### multi\_regional\_margin Default Value

The default value is:

```json
5
```
