# Untitled string in Cloud Spanner Autoscaler configuration Schema

```txt
https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/stateProjectId
```

The project ID where the Autoscaler state will be persisted.
By default it is persisted using Cloud Firestore in the same project as the Spanner instance being scaled - see `stateDatabase`

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                       |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [autoscaler-config.schema.json\*](../../usr/local/google/home/nielm/spanner/autoscaler/out/autoscaler-config.schema.json "open original schema") |

## stateProjectId Type

`string`

## stateProjectId Constraints

**minimum length**: the minimum number of characters for this string is: `2`

## stateProjectId Default Value

The default value is:

```json
"${projectId}"
```
