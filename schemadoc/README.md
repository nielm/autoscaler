# README

## Top-level Schemas

* [Cloud Spanner Autoscaler configuration](./autoscaler-config.md "JSON schema for the Cloud Spanner autoscaler configuration, specifying one or more Spanner instances to monitor and automatically scale") – `https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json`

## Other Schemas

### Objects

* [Custom Metric Definition](./autoscaler-config-defs-custom-metric-definition.md "To specify a custom threshold specify the name of the metrics to customize followed by the parameter values you wish to change") – `https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/metricDefinition`

* [Spanner Instance](./autoscaler-config-defs-spanner-instance.md "Specification of a Cloud Spanner instance to be managed by the autoscaler") – `https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance`

* [Untitled object in Cloud Spanner Autoscaler configuration](./autoscaler-config-defs-spanner-instance-properties-statedatabase.md "Object defining the database for managing the state of the Autoscaler") – `https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/stateDatabase`

### Arrays

* [Untitled array in Cloud Spanner Autoscaler configuration](./autoscaler-config-defs-spanner-instance-properties-metrics.md "An array of custom metric definitions") – `https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/metrics`

## Version Note

The schemas linked above follow the JSON Schema Spec version: `http://json-schema.org/draft-07/schema#`
