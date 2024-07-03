<br />
<p align="center">
  <h2 align="center">Autoscaler tool for Cloud Spanner</h2>
  <img alt="Autoscaler" src="../resources/BlogHeader_Database_3.max-2200x2200.jpg">

  <p align="center">
    <!-- In one sentence: what does the code in this directory do? -->
    Validating editor for Autoscaler configuration.
    <br />
    <a href="../README.md">Home</a>
    ·
    <a href="../src/scaler/README.md">Scaler component</a>
    ·
    <a href="../src/poller/README.md">Poller component</a>
    ·
    <a href="../src/forwarder/README.md">Forwarder component</a>
    ·
    <a href="../terraform/README.md">Terraform configuration</a>
    ·
    <a href="../terraform/README.md#Monitoring">Monitoring</a>
  </p>

## Overview

This directory contains a simple web-based autoscaler config file editor that
validates that the JSON config is correct - both for JSON syntax errors and that
the config has the correct set of parameters and values.

For GKE configurations, a YAML ConfigMap equivalent is displayed below.

While directly editing the YAML configMap for GKE is not supported, you
can paste the configmap into the editor, and it will be converted to JSON for
editing and validation.

## Usage

Execute the script to install the dependencies:

```sh
./configeditor/build-configeditor.sh
```

Then the editor can be used by opening `configeditor/index.html`.

You can also run a simple http server to serve it locally:

```sh
   cd configeditor
   npx -y http-server -p 8080 -a 127.0.0.1
```

Then browse to `http://127.0.0.1:8080/`

## Command line config validation

The JSON and YAML configurations can also be validated using the command line:

```sh
npm install
npm run validateConfigFile -- path/to/config_file
```
