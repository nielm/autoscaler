# Untitled object in Cloud Spanner Autoscaler configuration Schema

```txt
https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/stateDatabase
```

Object defining the database for managing the state of the Autoscaler

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [autoscaler-config.schema.json\*](../../usr/local/google/home/nielm/spanner/autoscaler/out/autoscaler-config.schema.json "open original schema") |

## stateDatabase Type

`object` ([Details](autoscaler-config-defs-spanner-instance-properties-statedatabase.md))

## stateDatabase Default Value

The default value is:

```json
"firestore"
```

# stateDatabase Properties

| Property                  | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                    |
| :------------------------ | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)             | Not specified | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-statedatabase-properties-name.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/stateDatabase/properties/name")             |
| [instanceId](#instanceid) | `string`      | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-statedatabase-properties-instanceid.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/stateDatabase/properties/instanceId") |
| [databaseId](#databaseid) | `string`      | Optional | cannot be null | [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-statedatabase-properties-databaseid.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/stateDatabase/properties/databaseId") |

## name

Type of the database for storing the persistent state of the Autoscaler

`name`

* is optional

* Type: unknown

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-statedatabase-properties-name.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/stateDatabase/properties/name")

### name Type

unknown

### name Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"firestore"` |             |
| `"spanner"`   |             |

### name Default Value

The default value is:

```json
"firestore"
```

## instanceId

The instance id of Cloud Spanner in which you want to persist the state. Required if name=spanner.

`instanceId`

* is optional

* Type: `string`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-statedatabase-properties-instanceid.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/stateDatabase/properties/instanceId")

### instanceId Type

`string`

### instanceId Constraints

**minimum length**: the minimum number of characters for this string is: `2`

## databaseId

The instance id of Cloud Spanner in which you want to persist the state. Required if name=spanner.

`databaseId`

* is optional

* Type: `string`

* cannot be null

* defined in: [Cloud Spanner Autoscaler configuration](autoscaler-config-defs-spanner-instance-properties-statedatabase-properties-databaseid.md "https://github.com/cloudspannerecosystem/autoscaler/autoscaler-config.schema.json#/$defs/spannerInstance/properties/stateDatabase/properties/databaseId")

### databaseId Type

`string`

### databaseId Constraints

**minimum length**: the minimum number of characters for this string is: `2`
