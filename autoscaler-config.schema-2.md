# Cloud Spanner Autoscaler configuration

_JSON schema for the Cloud Spanner autoscaler configuration, specifying one or more Spanner instances to monitor and automatically scale_

Type: `array`

<i id="https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json">path: #https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json</i>

&#36;schema: [http://json-schema.org/draft-07/schema#](http://json-schema.org/draft-07/schema#)

<b id="httpsgithub.comcloudspannerecosystemautoscalerautoscaler-config.schema.json">&#36;id: https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json</b>

Item Count:  &ge; 1
 - **_Items_**
 - ## Spanner Instance
 - _Specification of a Cloud Spanner instance to be managed by the autoscaler_
 - Type: `object`
 - <i id="https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items">path: #https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items</i>
 - This schema <u>does not</u> accept additional properties.
 - **_Properties_**
	 - <b id="#https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/$comment">$comment</b>
		 - Type: `string`
		 - <i id="https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/$comment">path: #https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/$comment</i>
	 - <b id="#https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/projectId">projectId</b> `required`
		 - _Project ID of the Cloud Spanner to be monitored_
		 - Type: `string`
		 - <i id="https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/projectId">path: #https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/projectId</i>
		 - Length:  &ge; 2
	 - <b id="#https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/instanceId">instanceId</b> `required`
		 - _Instance ID of the Cloud Spanner to be monitored_
		 - Type: `string`
		 - <i id="https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/instanceId">path: #https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/instanceId</i>
		 - Length:  &ge; 2
	 - <b id="#https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/units">units</b>
		 - _Specifies the units how the spanner capacity will be measured_
		 - <i id="https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/units">path: #https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/units</i>
		 - The value is restricted to the following: 
			 1. _"NODES"_
			 2. _"PROCESSING_UNITS"_
		 - Default: _"NODES"_
	 - <b id="#https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/minSize">minSize</b>
		 - _Minimum number of Cloud Spanner `NODES` or `PROCESSING_UNITS` that the instance can be scaled IN to_
		 - Type: `number`
		 - <i id="https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/minSize">path: #https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/minSize</i>
		 - Default: _"1 NODE or 100 PROCESSING_UNITS"_
		 - Range:  &ge; 1
	 - <b id="#https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/maxSize">maxSize</b>
		 - _Maximum number of Cloud Spanner `NODES` or `PROCESSING_UNITS` that the instance can be scaled OUT to_
		 - Type: `number`
		 - <i id="https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/maxSize">path: #https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/maxSize</i>
		 - Default: _"3 NODES or 2000 PROCESSING_UNITS"_
		 - Range:  &ge; 1
	 - <b id="#https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/scalingMethod">scalingMethod</b>
		 - _Scaling method that should be used. See the [scaling methods](https://github.com/cloudspannerecosystem/autoscaler/blob/main/src/scaler/README.md#scaling-methods) for more information_
		 - <i id="https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/scalingMethod">path: #https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/scalingMethod</i>
		 - The value is restricted to the following: 
			 1. _"STEPWISE"_
			 2. _"LINEAR"_
			 3. _"DIRECT"_
		 - Default: _"STEPWISE"_
	 - <b id="#https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/stepSize">stepSize</b>
		 - _Amount of capacity that should be added or removed when scaling with the STEPWISE method.<br>When the Spanner instance size is over 1000 `PROCESSING_UNITS`, scaling will be done in steps of 1000 `PROCESSING_UNITS`.
 For more information see the [Spanner compute capacity documentation](https://cloud.google.com/spanner/docs/compute-capacity#compute_capacity)_
		 - Type: `number`
		 - <i id="https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/stepSize">path: #https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/stepSize</i>
		 - Default: _"2 NODES or 200 PROCESSING_UNITS"_
		 - Range:  &ge; 1
	 - <b id="#https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/overloadStepSize">overloadStepSize</b>
		 - _Amount of capacity that should be added when the Cloud Spanner instance is overloaded, and the `STEPWISE` method is used_
		 - Type: `number`
		 - <i id="https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/overloadStepSize">path: #https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/overloadStepSize</i>
		 - Default: _"5 NODES or 500 PROCESSING_UNITS"_
		 - Range:  &ge; 1
	 - <b id="#https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/scaleInLimit">scaleInLimit</b>
		 - _Percentage (integer) of the total instance size that can be removed in a scale in event when using the `LINEAR` scaling method.<br>For example if set to `20`, only 20% of the instance size can be removed in a single scaling event. When `scaleInLimit` is not defined a limit is not enforced._
		 - Type: `number`
		 - <i id="https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/scaleInLimit">path: #https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/scaleInLimit</i>
		 - Default: `100`
		 - Range: between 1 and 100
	 - <b id="#https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/scaleOutCoolingMinutes">scaleOutCoolingMinutes</b>
		 - _Minutes to wait after scaling IN or OUT before a scale OUT event can be processed_
		 - Type: `number`
		 - <i id="https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/scaleOutCoolingMinutes">path: #https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/scaleOutCoolingMinutes</i>
		 - Default: `5`
		 - Range:  &ge; 1
	 - <b id="#https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/scaleInCoolingMinutes">scaleInCoolingMinutes</b>
		 - _Minutes to wait after scaling IN or OUT before a scale IN event can be processed._
		 - Type: `number`
		 - <i id="https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/scaleInCoolingMinutes">path: #https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/scaleInCoolingMinutes</i>
		 - Default: `30`
		 - Range:  &ge; 1
	 - <b id="#https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/overloadCoolingMinutes">overloadCoolingMinutes</b>
		 - _Minutes to wait after scaling IN or OUT before a scale OUT event can be processed, when the Spanner instance is overloaded.<br>An instance is overloaded if its High Priority CPU utilization is over 90%._
		 - Type: `number`
		 - <i id="https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/overloadCoolingMinutes">path: #https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/overloadCoolingMinutes</i>
		 - Default: `5`
		 - Range:  &ge; 1
	 - <b id="#https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/stateProjectId">stateProjectId</b>
		 - _The project ID where the Autoscaler state will be persisted.<br>By default it is persisted using Cloud Firestore in the same project as the Spanner instance being scaled - see `stateDatabase`_
		 - Type: `string`
		 - <i id="https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/stateProjectId">path: #https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/stateProjectId</i>
		 - Default: _"${projectId}"_
		 - Length:  &ge; 2
	 - <b id="#https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/stateDatabase">stateDatabase</b>
		 - _Object defining the database for managing the state of the Autoscaler_
		 - Type: `object`
		 - <i id="https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/stateDatabase">path: #https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/stateDatabase</i>
		 - Default: _"firestore"_
		 - This schema <u>does not</u> accept additional properties.
		 - **_Properties_**
			 - <b id="#https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/stateDatabase/properties/name">name</b>
				 - _Type of the database for storing the persistent state of the Autoscaler_
				 - <i id="https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/stateDatabase/properties/name">path: #https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/stateDatabase/properties/name</i>
				 - The value is restricted to the following: 
					 1. _"firestore"_
					 2. _"spanner"_
				 - Default: _"firestore"_
			 - <b id="#https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/stateDatabase/properties/instanceId">instanceId</b>
				 - _The instance id of Cloud Spanner in which you want to persist the state. Required if name=spanner._
				 - Type: `string`
				 - <i id="https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/stateDatabase/properties/instanceId">path: #https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/stateDatabase/properties/instanceId</i>
				 - Length:  &ge; 2
			 - <b id="#https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/stateDatabase/properties/databaseId">databaseId</b>
				 - _The instance id of Cloud Spanner in which you want to persist the state. Required if name=spanner._
				 - Type: `string`
				 - <i id="https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/stateDatabase/properties/databaseId">path: #https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/stateDatabase/properties/databaseId</i>
				 - Length:  &ge; 2
	 - <b id="#https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/scalerPubSubTopic">scalerPubSubTopic</b>
		 - _PubSub topic (in the form `projects/${projectId}/topics/scaler-topic`) for the Poller function to publish messages for the Scaler function (Required for Cloud Functions deployments)_
		 - Type: `string`
		 - <i id="https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/scalerPubSubTopic">path: #https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/scalerPubSubTopic</i>
		 - The value must match this pattern: `^projects/[^/]+/topics/[^/]+$`
		 - Length:  &ge; 2
	 - <b id="#https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/scalerURL">scalerURL</b>
		 - _URL where the scaler service receives HTTP requests (Required for non-unified GKE deployments)_
		 - Type: `string`
		 - <i id="https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/scalerURL">path: #https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/scalerURL</i>
		 - Default: _"http://scaler"_
		 - The value must match this pattern: `^https?://.+`
		 - Length:  &ge; 2
	 - <b id="#https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/downstreamPubSubTopic">downstreamPubSubTopic</b>
		 - _Set this parameter to point to a pubsub topic (in the form `projects/${projectId}/topics/downstream-topic-name`) to make the Autoscaler publish events that can be consumed by downstream applications.<br>See [Downstream messaging](https://github.com/cloudspannerecosystem/autoscaler/blob/main/src/scaler/README.md#downstream-messaging) for more information._
		 - Type: `string`
		 - <i id="https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/downstreamPubSubTopic">path: #https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/downstreamPubSubTopic</i>
		 - The value must match this pattern: `^projects/[^/]+/topics/[^/]+$`
		 - Length:  &ge; 2
	 - <b id="#https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/metrics">metrics</b>
		 - _An array of custom metric definitions.<br>These can be provided in the configuration objects to customize the metrics used to autoscale your Cloud Spanner instances
_
		 - Type: `array`
		 - <i id="https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/metrics">path: #https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/metrics</i>
			 - **_Items_**
			 - <i id="https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/metrics/items">path: #https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json/items/properties/metrics/items</i>
			 - &#36;ref: [#/\$defs/metricDefinition](#/$defs/metricDefinition)

_Generated with [json-schema-md-doc](https://brianwendt.github.io/json-schema-md-doc/)_
