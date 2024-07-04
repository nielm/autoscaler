# Cloud Spanner Autoscaler configuration Schema

```txt
https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json
```

JSON schema for the Cloud Spanner autoscaler configuration, specifying one or more Spanner instances to monitor and automatically scale

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                     |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [autoscaler-config.schema.json](../../usr/local/google/home/nielm/spanner/autoscaler/out/autoscaler-config.schema.json "open original schema") |

## Cloud Spanner Autoscaler configuration Type

`object[]` ([Spanner Instance](autoscaler-config-defs-spanner-instance.md))

## Cloud Spanner Autoscaler configuration Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

# Cloud Spanner Autoscaler configuration Definitions

## Definitions group spannerInstance

Reference this group by using

```json
{"$ref":"https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance"}
```

| Property                                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                                          |
| :------------------------------------------------ | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [$comment](#comment)                              | `string`      | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-comment.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/$comment")                              |
| [projectId](#projectid)                           | `string`      | Required | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-projectid.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/projectId")                           |
| [instanceId](#instanceid)                         | `string`      | Required | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-instanceid.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/instanceId")                         |
| [units](#units)                                   | Not specified | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-units.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/units")                                   |
| [minSize](#minsize)                               | `number`      | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-minsize.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/minSize")                               |
| [maxSize](#maxsize)                               | `number`      | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-maxsize.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/maxSize")                               |
| [scalingMethod](#scalingmethod)                   | Not specified | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-scalingmethod.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/scalingMethod")                   |
| [stepSize](#stepsize)                             | `number`      | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-stepsize.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/stepSize")                             |
| [overloadStepSize](#overloadstepsize)             | `number`      | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-overloadstepsize.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/overloadStepSize")             |
| [scaleInLimit](#scaleinlimit)                     | `number`      | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-scaleinlimit.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/scaleInLimit")                     |
| [scaleOutCoolingMinutes](#scaleoutcoolingminutes) | `number`      | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-scaleoutcoolingminutes.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/scaleOutCoolingMinutes") |
| [scaleInCoolingMinutes](#scaleincoolingminutes)   | `number`      | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-scaleincoolingminutes.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/scaleInCoolingMinutes")   |
| [overloadCoolingMinutes](#overloadcoolingminutes) | `number`      | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-overloadcoolingminutes.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/overloadCoolingMinutes") |
| [stateProjectId](#stateprojectid)                 | `string`      | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-stateprojectid.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/stateProjectId")                 |
| [stateDatabase](#statedatabase)                   | `object`      | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-statedatabase.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/stateDatabase")                   |
| [scalerPubSubTopic](#scalerpubsubtopic)           | `string`      | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-scalerpubsubtopic.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/scalerPubSubTopic")           |
| [scalerURL](#scalerurl)                           | `string`      | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-scalerurl.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/scalerURL")                           |
| [downstreamPubSubTopic](#downstreampubsubtopic)   | `string`      | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-downstreampubsubtopic.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/downstreamPubSubTopic")   |
| [metrics](#metrics)                               | `array`       | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-metrics.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/metrics")                               |

### $comment



`$comment`

* is optional

* Type: `string`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-comment.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/$comment")

#### $comment Type

`string`

### projectId

Project ID of the Cloud Spanner to be monitored

`projectId`

* is required

* Type: `string`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-projectid.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/projectId")

#### projectId Type

`string`

#### projectId Constraints

**minimum length**: the minimum number of characters for this string is: `2`

### instanceId

Instance ID of the Cloud Spanner to be monitored

`instanceId`

* is required

* Type: `string`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-instanceid.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/instanceId")

#### instanceId Type

`string`

#### instanceId Constraints

**minimum length**: the minimum number of characters for this string is: `2`

### units

Specifies the units how the spanner capacity will be measured

`units`

* is optional

* Type: unknown

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-units.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/units")

#### units Type

unknown

#### units Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                | Explanation |
| :------------------- | :---------- |
| `"NODES"`            |             |
| `"PROCESSING_UNITS"` |             |

#### units Default Value

The default value is:

```json
"NODES"
```

### minSize

Minimum number of Cloud Spanner `NODES` or `PROCESSING_UNITS` that the instance can be scaled IN to

`minSize`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-minsize.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/minSize")

#### minSize Type

`number`

#### minSize Constraints

**minimum**: the value of this number must greater than or equal to: `1`

#### minSize Default Value

The default value is:

```json
"1 NODE or 100 PROCESSING_UNITS"
```

### maxSize

Maximum number of Cloud Spanner `NODES` or `PROCESSING_UNITS` that the instance can be scaled OUT to

`maxSize`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-maxsize.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/maxSize")

#### maxSize Type

`number`

#### maxSize Constraints

**minimum**: the value of this number must greater than or equal to: `1`

#### maxSize Default Value

The default value is:

```json
"3 NODES or 2000 PROCESSING_UNITS"
```

### scalingMethod

Scaling method that should be used. See the [scaling methods](https://github.com/cloudspannerecosystem/autoscaler/blob/main/src/scaler/README.md#scaling-methods) for more information

`scalingMethod`

* is optional

* Type: unknown

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-scalingmethod.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/scalingMethod")

#### scalingMethod Type

unknown

#### scalingMethod Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"STEPWISE"` |             |
| `"LINEAR"`   |             |
| `"DIRECT"`   |             |

#### scalingMethod Default Value

The default value is:

```json
"STEPWISE"
```

### stepSize

Amount of capacity that should be added or removed when scaling with the STEPWISE method.
When the Spanner instance size is over 1000 `PROCESSING_UNITS`, scaling will be done in steps of 1000 `PROCESSING_UNITS`.
For more information see the [Spanner compute capacity documentation](https://cloud.google.com/spanner/docs/compute-capacity#compute_capacity)

`stepSize`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-stepsize.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/stepSize")

#### stepSize Type

`number`

#### stepSize Constraints

**minimum**: the value of this number must greater than or equal to: `1`

#### stepSize Default Value

The default value is:

```json
"2 NODES or 200 PROCESSING_UNITS"
```

### overloadStepSize

Amount of capacity that should be added when the Cloud Spanner instance is overloaded, and the `STEPWISE` method is used

`overloadStepSize`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-overloadstepsize.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/overloadStepSize")

#### overloadStepSize Type

`number`

#### overloadStepSize Constraints

**minimum**: the value of this number must greater than or equal to: `1`

#### overloadStepSize Default Value

The default value is:

```json
"5 NODES or 500 PROCESSING_UNITS"
```

### scaleInLimit

Percentage (integer) of the total instance size that can be removed in a scale in event when using the `LINEAR` scaling method.
For example if set to `20`, only 20% of the instance size can be removed in a single scaling event. When `scaleInLimit` is not defined a limit is not enforced.

`scaleInLimit`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-scaleinlimit.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/scaleInLimit")

#### scaleInLimit Type

`number`

#### scaleInLimit Constraints

**maximum**: the value of this number must smaller than or equal to: `100`

**minimum**: the value of this number must greater than or equal to: `1`

#### scaleInLimit Default Value

The default value is:

```json
100
```

### scaleOutCoolingMinutes

Minutes to wait after scaling IN or OUT before a scale OUT event can be processed

`scaleOutCoolingMinutes`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-scaleoutcoolingminutes.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/scaleOutCoolingMinutes")

#### scaleOutCoolingMinutes Type

`number`

#### scaleOutCoolingMinutes Constraints

**minimum**: the value of this number must greater than or equal to: `1`

#### scaleOutCoolingMinutes Default Value

The default value is:

```json
5
```

### scaleInCoolingMinutes

Minutes to wait after scaling IN or OUT before a scale IN event can be processed.

`scaleInCoolingMinutes`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-scaleincoolingminutes.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/scaleInCoolingMinutes")

#### scaleInCoolingMinutes Type

`number`

#### scaleInCoolingMinutes Constraints

**minimum**: the value of this number must greater than or equal to: `1`

#### scaleInCoolingMinutes Default Value

The default value is:

```json
30
```

### overloadCoolingMinutes

Minutes to wait after scaling IN or OUT before a scale OUT event can be processed, when the Spanner instance is overloaded.
An instance is overloaded if its High Priority CPU utilization is over 90%.

`overloadCoolingMinutes`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-overloadcoolingminutes.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/overloadCoolingMinutes")

#### overloadCoolingMinutes Type

`number`

#### overloadCoolingMinutes Constraints

**minimum**: the value of this number must greater than or equal to: `1`

#### overloadCoolingMinutes Default Value

The default value is:

```json
5
```

### stateProjectId

The project ID where the Autoscaler state will be persisted.
By default it is persisted using Cloud Firestore in the same project as the Spanner instance being scaled - see `stateDatabase`

`stateProjectId`

* is optional

* Type: `string`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-stateprojectid.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/stateProjectId")

#### stateProjectId Type

`string`

#### stateProjectId Constraints

**minimum length**: the minimum number of characters for this string is: `2`

#### stateProjectId Default Value

The default value is:

```json
"${projectId}"
```

### stateDatabase

Object defining the database for managing the state of the Autoscaler

`stateDatabase`

* is optional

* Type: `object` ([Details](autoscaler-config-defs-spanner-instance-properties-statedatabase.md))

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-statedatabase.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/stateDatabase")

#### stateDatabase Type

`object` ([Details](autoscaler-config-defs-spanner-instance-properties-statedatabase.md))

#### stateDatabase Default Value

The default value is:

```json
"firestore"
```

### scalerPubSubTopic

PubSub topic (in the form `projects/${projectId}/topics/scaler-topic`) for the Poller function to publish messages for the Scaler function (Required for Cloud Functions deployments)

`scalerPubSubTopic`

* is optional

* Type: `string`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-scalerpubsubtopic.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/scalerPubSubTopic")

#### scalerPubSubTopic Type

`string`

#### scalerPubSubTopic Constraints

**minimum length**: the minimum number of characters for this string is: `2`

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^projects/[^/]+/topics/[^/]+$
```

[try pattern](https://regexr.com/?expression=%5Eprojects%2F%5B%5E%2F%5D%2B%2Ftopics%2F%5B%5E%2F%5D%2B%24 "try regular expression with regexr.com")

### scalerURL

URL where the scaler service receives HTTP requests (Required for non-unified GKE deployments)

`scalerURL`

* is optional

* Type: `string`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-scalerurl.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/scalerURL")

#### scalerURL Type

`string`

#### scalerURL Constraints

**minimum length**: the minimum number of characters for this string is: `2`

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^https?://.+
```

[try pattern](https://regexr.com/?expression=%5Ehttps%3F%3A%2F%2F.%2B "try regular expression with regexr.com")

#### scalerURL Default Value

The default value is:

```json
"http://scaler"
```

### downstreamPubSubTopic

Set this parameter to point to a pubsub topic (in the form `projects/${projectId}/topics/downstream-topic-name`) to make the Autoscaler publish events that can be consumed by downstream applications.
See [Downstream messaging](https://github.com/cloudspannerecosystem/autoscaler/blob/main/src/scaler/README.md#downstream-messaging) for more information.

`downstreamPubSubTopic`

* is optional

* Type: `string`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-downstreampubsubtopic.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/downstreamPubSubTopic")

#### downstreamPubSubTopic Type

`string`

#### downstreamPubSubTopic Constraints

**minimum length**: the minimum number of characters for this string is: `2`

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^projects/[^/]+/topics/[^/]+$
```

[try pattern](https://regexr.com/?expression=%5Eprojects%2F%5B%5E%2F%5D%2B%2Ftopics%2F%5B%5E%2F%5D%2B%24 "try regular expression with regexr.com")

### metrics

An array of custom metric definitions.
These can be provided in the configuration objects to customize the metrics used to autoscale your Cloud Spanner instances

`metrics`

* is optional

* Type: `object[]` ([Custom Metric Definition](autoscaler-config-defs-custom-metric-definition.md))

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-metrics.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/metrics")

#### metrics Type

`object[]` ([Custom Metric Definition](autoscaler-config-defs-custom-metric-definition.md))

## Definitions group metricDefinition

Reference this group by using

```json
{"$ref":"https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition"}
```

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

### name

A unique name of the for the metric to be evaulated.
If you want to override the default metrics, their names are: `high_priority_cpu`, `rolling_24_hr` and `storage`.

`name`

* is required

* Type: `string`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-name.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/name")

#### name Type

`string`

#### name Constraints

**minimum length**: the minimum number of characters for this string is: `2`

### filter

The Cloud Spanner metric and filter that should be used when querying for data.
The Autoscaler will automatically add the filter expressions for Spanner instance resources, instance id and project id.

`filter`

* is optional

* Type: `string`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-filter.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/filter")

#### filter Type

`string`

#### filter Constraints

**minimum length**: the minimum number of characters for this string is: `2`

### reducer

The reducer specifies how the data points should be aggregated when querying for metrics, typically `REDUCE_SUM`.
For more details please refer to [Alert Policies - Reducer](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.alertPolicies#reducer) documentation.

> from <https://monitoring.googleapis.com/$discovery/rest?version=v3>

`reducer`

* is optional

* Type: unknown

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-reducer.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/reducer")

#### reducer Type

unknown

#### reducer Constraints

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

#### reducer Default Value

The default value is:

```json
"REDUCE_SUM"
```

### aligner

The aligner specifies how the data points should be aligned in the time series, typically `ALIGN_MAX`.
For more details please refer to [Alert Policies - Aligner](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.alertPolicies#aligner) documentation.

> Values from <https://monitoring.googleapis.com/$discovery/rest?version=v3>

`aligner`

* is optional

* Type: unknown

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-aligner.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/aligner")

#### aligner Type

unknown

#### aligner Constraints

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

#### aligner Default Value

The default value is:

```json
"ALIGN_MAX"
```

### period

Defines the period of time in units of seconds at which aggregation takes place. Typically the period should be 60.

`period`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-period.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/period")

#### period Type

`number`

#### period Constraints

**minimum**: the value of this number must greater than or equal to: `1`

#### period Default Value

The default value is:

```json
60
```

### regional\_threshold

Threshold used to evaluate if a regional instance needs to be scaled in or out.

`regional_threshold`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-regional_threshold.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/regional_threshold")

#### regional\_threshold Type

`number`

#### regional\_threshold Constraints

**minimum**: the value of this number must greater than or equal to: `1`

### multi\_regional\_threshold

Threshold used to evaluate if a multi-regional instance needs to be scaled in or out.

`multi_regional_threshold`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-multi_regional_threshold.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/multi_regional_threshold")

#### multi\_regional\_threshold Type

`number`

#### multi\_regional\_threshold Constraints

**minimum**: the value of this number must greater than or equal to: `1`

### regional\_margin

Margin above and below the threshold where the metric value is allowed.
If the metric falls outside of the range `[threshold - margin, threshold + margin]`, then the regional instance needs to be scaled in or out.

`regional_margin`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-regional_margin.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/regional_margin")

#### regional\_margin Type

`number`

#### regional\_margin Constraints

**minimum**: the value of this number must greater than or equal to: `1`

#### regional\_margin Default Value

The default value is:

```json
5
```

### multi\_regional\_margin

Margin above and below the threshold where the metric value is allowed.
If the metric falls outside of the range `[threshold - margin, threshold + margin]`, then the multi regional instance needs to be scaled in or out.

`multi_regional_margin`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-custom-metric-definition-properties-multi_regional_margin.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition/properties/multi_regional_margin")

#### multi\_regional\_margin Type

`number`

#### multi\_regional\_margin Constraints

**minimum**: the value of this number must greater than or equal to: `1`

#### multi\_regional\_margin Default Value

The default value is:

```json
5
```
