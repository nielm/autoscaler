# Cloud Spanner Autoscaler configuration

JSON schema for the Cloud Spanner autoscaler configuration, specifying one or more Spanner instances to monitor and automatically scale

### Type: `array`


---

# Definitions

## spannerInstance

Specification of a Cloud Spanner instance to be managed by the autoscaler

#### Type: `object`

> ⚠️ Additional properties are not allowed.

| Property | Type | Required | Possible values | Deprecated | Default | Description | Examples |
| -------- | ---- | -------- | --------------- | ---------- | ------- | ----------- | -------- |
| projectId | `string` | ✅ | Length: `string >= 2` |  |  | Project ID of the Cloud Spanner to be monitored |  |
| instanceId | `string` | ✅ | Length: `string >= 2` |  |  | Instance ID of the Cloud Spanner to be monitored |  |
| $comment | `string` |  | string |  |  |  |  |
| units | `None` |  | `NODES` `PROCESSING_UNITS` |  | `"NODES"` | Specifies the units how the spanner capacity will be measured |  |
| minSize | `number` |  | `1 <= x ` |  | `"1 NODE or 100 PROCESSING_UNITS"` | Minimum number of Cloud Spanner `NODES` or `PROCESSING_UNITS` that the instance can be scaled IN to |  |
| maxSize | `number` |  | `1 <= x ` |  | `"3 NODES or 2000 PROCESSING_UNITS"` | Maximum number of Cloud Spanner `NODES` or `PROCESSING_UNITS` that the instance can be scaled OUT to |  |
| scalingMethod | `None` |  | `STEPWISE` `LINEAR` `DIRECT` |  | `"STEPWISE"` | Scaling method that should be used. See the [scaling methods](https://github.com/cloudspannerecosystem/autoscaler/blob/main/src/scaler/README.md#scaling-methods) for more information |  |
| stepSize | `number` |  | `1 <= x ` |  | `"2 NODES or 200 PROCESSING_UNITS"` | Amount of capacity that should be added or removed when scaling with the STEPWISE method.
When the Spanner instance size is over 1000 `PROCESSING_UNITS`, scaling will be done in steps of 1000 `PROCESSING_UNITS`.
 For more information see the [Spanner compute capacity documentation](https://cloud.google.com/spanner/docs/compute-capacity#compute_capacity) |  |
| overloadStepSize | `number` |  | `1 <= x ` |  | `"5 NODES or 500 PROCESSING_UNITS"` | Amount of capacity that should be added when the Cloud Spanner instance is overloaded, and the `STEPWISE` method is used |  |
| scaleInLimit | `number` |  | `1 <= x <= 100` |  | `100` | Percentage (integer) of the total instance size that can be removed in a scale in event when using the `LINEAR` scaling method.
For example if set to `20`, only 20% of the instance size can be removed in a single scaling event. When `scaleInLimit` is not defined a limit is not enforced. |  |
| scaleOutCoolingMinutes | `number` |  | `1 <= x ` |  | `5` | Minutes to wait after scaling IN or OUT before a scale OUT event can be processed |  |
| scaleInCoolingMinutes | `number` |  | `1 <= x ` |  | `30` | Minutes to wait after scaling IN or OUT before a scale IN event can be processed. |  |
| overloadCoolingMinutes | `number` |  | `1 <= x ` |  | `5` | Minutes to wait after scaling IN or OUT before a scale OUT event can be processed, when the Spanner instance is overloaded.
An instance is overloaded if its High Priority CPU utilization is over 90%. |  |
| stateProjectId | `string` |  | Length: `string >= 2` |  | `"${projectId}"` | The project ID where the Autoscaler state will be persisted.
By default it is persisted using Cloud Firestore in the same project as the Spanner instance being scaled - see `stateDatabase` |  |
| stateDatabase | `object` |  | object |  | `"firestore"` | Object defining the database for managing the state of the Autoscaler |  |
| scalerPubSubTopic | `string` |  | [`^projects/[^/]+/topics/[^/]+$`](https://regex101.com/?regex=%5Eprojects%2F%5B%5E%2F%5D%2B%2Ftopics%2F%5B%5E%2F%5D%2B%24) |  |  | PubSub topic (in the form `projects/${projectId}/topics/scaler-topic`) for the Poller function to publish messages for the Scaler function (Required for Cloud Functions deployments) |  |
| scalerURL | `string` |  | [`^https?://.+`](https://regex101.com/?regex=%5Ehttps%3F%3A%2F%2F.%2B) |  | `"http://scaler"` | URL where the scaler service receives HTTP requests (Required for non-unified GKE deployments) |  |
| downstreamPubSubTopic | `string` |  | [`^projects/[^/]+/topics/[^/]+$`](https://regex101.com/?regex=%5Eprojects%2F%5B%5E%2F%5D%2B%2Ftopics%2F%5B%5E%2F%5D%2B%24) |  |  | Set this parameter to point to a pubsub topic (in the form `projects/${projectId}/topics/downstream-topic-name`) to make the Autoscaler publish events that can be consumed by downstream applications.
See [Downstream messaging](https://github.com/cloudspannerecosystem/autoscaler/blob/main/src/scaler/README.md#downstream-messaging) for more information. |  |
| metrics | `array` |  | object |  |  | An array of custom metric definitions.
These can be provided in the configuration objects to customize the metrics used to autoscale your Cloud Spanner instances |  |

## metricDefinition

To specify a custom threshold specify the name of the metrics to customize followed by the parameter values you wish to change.
The updated parameters will be merged with the default metric parameters.

#### Type: `object`

> ⚠️ Additional properties are not allowed.

| Property | Type | Required | Possible values | Deprecated | Default | Description | Examples |
| -------- | ---- | -------- | --------------- | ---------- | ------- | ----------- | -------- |
| name | `string` | ✅ | Length: `string >= 2` |  |  | A unique name of the for the metric to be evaulated.
If you want to override the default metrics, their names are: `high_priority_cpu`, `rolling_24_hr` and `storage`. |  |
| filter | `string` |  | Length: `string >= 2` |  |  | The Cloud Spanner metric and filter that should be used when querying for data.
The Autoscaler will automatically add the filter expressions for Spanner instance resources, instance id and project id. |  |
| reducer | `None` |  | `REDUCE_NONE` `REDUCE_MEAN` `REDUCE_MIN` `REDUCE_MAX` `REDUCE_SUM` `REDUCE_STDDEV` `REDUCE_COUNT` `REDUCE_COUNT_TRUE` `REDUCE_COUNT_FALSE` `REDUCE_FRACTION_TRUE` `REDUCE_PERCENTILE_99` `REDUCE_PERCENTILE_95` `REDUCE_PERCENTILE_50` `REDUCE_PERCENTILE_05` |  | `"REDUCE_SUM"` | The reducer specifies how the data points should be aggregated when querying for metrics, typically `REDUCE_SUM`.
For more details please refer to [Alert Policies - Reducer](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.alertPolicies#reducer) documentation. |  |
| aligner | `None` |  | `ALIGN_NONE` `ALIGN_DELTA` `ALIGN_RATE` `ALIGN_INTERPOLATE` `ALIGN_NEXT_OLDER` `ALIGN_MIN` `ALIGN_MAX` `ALIGN_MEAN` `ALIGN_COUNT` `ALIGN_SUM` `ALIGN_STDDEV` `ALIGN_COUNT_TRUE` `ALIGN_COUNT_FALSE` `ALIGN_FRACTION_TRUE` `ALIGN_PERCENTILE_99` `ALIGN_PERCENTILE_95` `ALIGN_PERCENTILE_50` `ALIGN_PERCENTILE_05` `ALIGN_PERCENT_CHANGE` |  | `"ALIGN_MAX"` | The aligner specifies how the data points should be aligned in the time series, typically `ALIGN_MAX`.
For more details please refer to [Alert Policies - Aligner](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.alertPolicies#aligner) documentation. |  |
| period | `number` |  | `1 <= x ` |  | `60` | Defines the period of time in units of seconds at which aggregation takes place. Typically the period should be 60. |  |
| regional_threshold | `number` |  | `1 <= x ` |  |  | Threshold used to evaluate if a regional instance needs to be scaled in or out. |  |
| multi_regional_threshold | `number` |  | `1 <= x ` |  |  | Threshold used to evaluate if a multi-regional instance needs to be scaled in or out. |  |
| regional_margin | `number` |  | `1 <= x ` |  | `5` | Margin above and below the threshold where the metric value is allowed.
If the metric falls outside of the range `[threshold - margin, threshold + margin]`, then the regional instance needs to be scaled in or out. |  |
| multi_regional_margin | `number` |  | `1 <= x ` |  | `5` | Margin above and below the threshold where the metric value is allowed.
If the metric falls outside of the range `[threshold - margin, threshold + margin]`, then the multi regional instance needs to be scaled in or out. |  |


---

Markdown generated with [jsonschema-markdown](https://github.com/elisiariocouto/jsonschema-markdown).
