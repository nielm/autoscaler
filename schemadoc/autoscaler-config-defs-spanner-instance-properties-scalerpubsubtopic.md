# Untitled string in Cloud Spanner Autoscaler configuration Schema

```txt
https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/scalerPubSubTopic
```

PubSub topic (in the form `projects/${projectId}/topics/scaler-topic`) for the Poller function to publish messages for the Scaler function (Required for Cloud Functions deployments)

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                       |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [autoscaler-config.schema.json\*](../../usr/local/google/home/nielm/spanner/autoscaler/out/autoscaler-config.schema.json "open original schema") |

## scalerPubSubTopic Type

`string`

## scalerPubSubTopic Constraints

**minimum length**: the minimum number of characters for this string is: `2`

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^projects/[^/]+/topics/[^/]+$
```

[try pattern](https://regexr.com/?expression=%5Eprojects%2F%5B%5E%2F%5D%2B%2Ftopics%2F%5B%5E%2F%5D%2B%24 "try regular expression with regexr.com")
