# Untitled string in Cloud Spanner Autoscaler configuration Schema

```txt
https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/downstreamPubSubTopic
```

Set this parameter to point to a pubsub topic (in the form `projects/${projectId}/topics/downstream-topic-name`) to make the Autoscaler publish events that can be consumed by downstream applications.
See [Downstream messaging](https://github.com/cloudspannerecosystem/autoscaler/blob/main/src/scaler/README.md#downstream-messaging) for more information.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                       |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [autoscaler-config.schema.json\*](../../usr/local/google/home/nielm/spanner/autoscaler/out/autoscaler-config.schema.json "open original schema") |

## downstreamPubSubTopic Type

`string`

## downstreamPubSubTopic Constraints

**minimum length**: the minimum number of characters for this string is: `2`

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^projects/[^/]+/topics/[^/]+$
```

[try pattern](https://regexr.com/?expression=%5Eprojects%2F%5B%5E%2F%5D%2B%2Ftopics%2F%5B%5E%2F%5D%2B%24 "try regular expression with regexr.com")
