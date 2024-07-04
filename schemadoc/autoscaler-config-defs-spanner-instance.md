# Spanner Instance Schema

```txt
https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance
```

Specification of a Cloud Spanner instance to be managed by the autoscaler

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [autoscaler-config.schema.json\*](../../usr/local/google/home/nielm/spanner/autoscaler/out/autoscaler-config.schema.json "open original schema") |

## spannerInstance Type

`object` ([Spanner Instance](autoscaler-config-defs-spanner-instance.md))

# spannerInstance Properties

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

## $comment



`$comment`

* is optional

* Type: `string`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-comment.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/$comment")

### $comment Type

`string`

## projectId

Project ID of the Cloud Spanner to be monitored

`projectId`

* is required

* Type: `string`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-projectid.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/projectId")

### projectId Type

`string`

### projectId Constraints

**minimum length**: the minimum number of characters for this string is: `2`

## instanceId

Instance ID of the Cloud Spanner to be monitored

`instanceId`

* is required

* Type: `string`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-instanceid.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/instanceId")

### instanceId Type

`string`

### instanceId Constraints

**minimum length**: the minimum number of characters for this string is: `2`

## units

Specifies the units how the spanner capacity will be measured

`units`

* is optional

* Type: unknown

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-units.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/units")

### units Type

unknown

### units Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                | Explanation |
| :------------------- | :---------- |
| `"NODES"`            |             |
| `"PROCESSING_UNITS"` |             |

### units Default Value

The default value is:

```json
"NODES"
```

## minSize

Minimum number of Cloud Spanner `NODES` or `PROCESSING_UNITS` that the instance can be scaled IN to

`minSize`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-minsize.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/minSize")

### minSize Type

`number`

### minSize Constraints

**minimum**: the value of this number must greater than or equal to: `1`

### minSize Default Value

The default value is:

```json
"1 NODE or 100 PROCESSING_UNITS"
```

## maxSize

Maximum number of Cloud Spanner `NODES` or `PROCESSING_UNITS` that the instance can be scaled OUT to

`maxSize`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-maxsize.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/maxSize")

### maxSize Type

`number`

### maxSize Constraints

**minimum**: the value of this number must greater than or equal to: `1`

### maxSize Default Value

The default value is:

```json
"3 NODES or 2000 PROCESSING_UNITS"
```

## scalingMethod

Scaling method that should be used. See the [scaling methods](https://github.com/cloudspannerecosystem/autoscaler/blob/main/src/scaler/README.md#scaling-methods) for more information

`scalingMethod`

* is optional

* Type: unknown

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-scalingmethod.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/scalingMethod")

### scalingMethod Type

unknown

### scalingMethod Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"STEPWISE"` |             |
| `"LINEAR"`   |             |
| `"DIRECT"`   |             |

### scalingMethod Default Value

The default value is:

```json
"STEPWISE"
```

## stepSize

Amount of capacity that should be added or removed when scaling with the STEPWISE method.
When the Spanner instance size is over 1000 `PROCESSING_UNITS`, scaling will be done in steps of 1000 `PROCESSING_UNITS`.
For more information see the [Spanner compute capacity documentation](https://cloud.google.com/spanner/docs/compute-capacity#compute_capacity)

`stepSize`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-stepsize.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/stepSize")

### stepSize Type

`number`

### stepSize Constraints

**minimum**: the value of this number must greater than or equal to: `1`

### stepSize Default Value

The default value is:

```json
"2 NODES or 200 PROCESSING_UNITS"
```

## overloadStepSize

Amount of capacity that should be added when the Cloud Spanner instance is overloaded, and the `STEPWISE` method is used

`overloadStepSize`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-overloadstepsize.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/overloadStepSize")

### overloadStepSize Type

`number`

### overloadStepSize Constraints

**minimum**: the value of this number must greater than or equal to: `1`

### overloadStepSize Default Value

The default value is:

```json
"5 NODES or 500 PROCESSING_UNITS"
```

## scaleInLimit

Percentage (integer) of the total instance size that can be removed in a scale in event when using the `LINEAR` scaling method.
For example if set to `20`, only 20% of the instance size can be removed in a single scaling event. When `scaleInLimit` is not defined a limit is not enforced.

`scaleInLimit`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-scaleinlimit.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/scaleInLimit")

### scaleInLimit Type

`number`

### scaleInLimit Constraints

**maximum**: the value of this number must smaller than or equal to: `100`

**minimum**: the value of this number must greater than or equal to: `1`

### scaleInLimit Default Value

The default value is:

```json
100
```

## scaleOutCoolingMinutes

Minutes to wait after scaling IN or OUT before a scale OUT event can be processed

`scaleOutCoolingMinutes`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-scaleoutcoolingminutes.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/scaleOutCoolingMinutes")

### scaleOutCoolingMinutes Type

`number`

### scaleOutCoolingMinutes Constraints

**minimum**: the value of this number must greater than or equal to: `1`

### scaleOutCoolingMinutes Default Value

The default value is:

```json
5
```

## scaleInCoolingMinutes

Minutes to wait after scaling IN or OUT before a scale IN event can be processed.

`scaleInCoolingMinutes`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-scaleincoolingminutes.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/scaleInCoolingMinutes")

### scaleInCoolingMinutes Type

`number`

### scaleInCoolingMinutes Constraints

**minimum**: the value of this number must greater than or equal to: `1`

### scaleInCoolingMinutes Default Value

The default value is:

```json
30
```

## overloadCoolingMinutes

Minutes to wait after scaling IN or OUT before a scale OUT event can be processed, when the Spanner instance is overloaded.
An instance is overloaded if its High Priority CPU utilization is over 90%.

`overloadCoolingMinutes`

* is optional

* Type: `number`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-overloadcoolingminutes.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/overloadCoolingMinutes")

### overloadCoolingMinutes Type

`number`

### overloadCoolingMinutes Constraints

**minimum**: the value of this number must greater than or equal to: `1`

### overloadCoolingMinutes Default Value

The default value is:

```json
5
```

## stateProjectId

The project ID where the Autoscaler state will be persisted.
By default it is persisted using Cloud Firestore in the same project as the Spanner instance being scaled - see `stateDatabase`

`stateProjectId`

* is optional

* Type: `string`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-stateprojectid.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/stateProjectId")

### stateProjectId Type

`string`

### stateProjectId Constraints

**minimum length**: the minimum number of characters for this string is: `2`

### stateProjectId Default Value

The default value is:

```json
"${projectId}"
```

## stateDatabase

Object defining the database for managing the state of the Autoscaler

`stateDatabase`

* is optional

* Type: `object` ([Details](autoscaler-config-defs-spanner-instance-properties-statedatabase.md))

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-statedatabase.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/stateDatabase")

### stateDatabase Type

`object` ([Details](autoscaler-config-defs-spanner-instance-properties-statedatabase.md))

### stateDatabase Default Value

The default value is:

```json
"firestore"
```

## scalerPubSubTopic

PubSub topic (in the form `projects/${projectId}/topics/scaler-topic`) for the Poller function to publish messages for the Scaler function (Required for Cloud Functions deployments)

`scalerPubSubTopic`

* is optional

* Type: `string`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-scalerpubsubtopic.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/scalerPubSubTopic")

### scalerPubSubTopic Type

`string`

### scalerPubSubTopic Constraints

**minimum length**: the minimum number of characters for this string is: `2`

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^projects/[^/]+/topics/[^/]+$
```

[try pattern](https://regexr.com/?expression=%5Eprojects%2F%5B%5E%2F%5D%2B%2Ftopics%2F%5B%5E%2F%5D%2B%24 "try regular expression with regexr.com")

## scalerURL

URL where the scaler service receives HTTP requests (Required for non-unified GKE deployments)

`scalerURL`

* is optional

* Type: `string`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-scalerurl.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/scalerURL")

### scalerURL Type

`string`

### scalerURL Constraints

**minimum length**: the minimum number of characters for this string is: `2`

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^https?://.+
```

[try pattern](https://regexr.com/?expression=%5Ehttps%3F%3A%2F%2F.%2B "try regular expression with regexr.com")

### scalerURL Default Value

The default value is:

```json
"http://scaler"
```

## downstreamPubSubTopic

Set this parameter to point to a pubsub topic (in the form `projects/${projectId}/topics/downstream-topic-name`) to make the Autoscaler publish events that can be consumed by downstream applications.
See [Downstream messaging](https://github.com/cloudspannerecosystem/autoscaler/blob/main/src/scaler/README.md#downstream-messaging) for more information.

`downstreamPubSubTopic`

* is optional

* Type: `string`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-downstreampubsubtopic.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/downstreamPubSubTopic")

### downstreamPubSubTopic Type

`string`

### downstreamPubSubTopic Constraints

**minimum length**: the minimum number of characters for this string is: `2`

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^projects/[^/]+/topics/[^/]+$
```

[try pattern](https://regexr.com/?expression=%5Eprojects%2F%5B%5E%2F%5D%2B%2Ftopics%2F%5B%5E%2F%5D%2B%24 "try regular expression with regexr.com")

## metrics

An array of custom metric definitions.
These can be provided in the configuration objects to customize the metrics used to autoscale your Cloud Spanner instances

`metrics`

* is optional

* Type: `object[]` ([Custom Metric Definition](autoscaler-config-defs-custom-metric-definition.md))

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-metrics.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/metrics")

### metrics Type

`object[]` ([Custom Metric Definition](autoscaler-config-defs-custom-metric-definition.md))
