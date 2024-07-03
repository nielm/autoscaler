/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Support scripts for browser-based config editor.
 */

// eslint-disable-next-line
import {
  JSONEditor,
  createAjvValidator,
  renderJSONSchemaEnum,
  renderValue,
} from "./build/vanilla-jsoneditor/standalone.js";
import schema from "./build/autoscaler-config.schema.json" with { type: "json" };
import { dump, load } from "./build/js-yaml/dist/js-yaml.mjs";
/* eslint-enable */

/**
 * @typedef {import("vanilla-jsoneditor").Content} Content
 */

/** @type {JSONEditor} */
let editor;

/**
 * JSON editor change handler. Updates YAML block when JSON is changed.
 *
 * @param {Content} content
 * @param {Content} previousContent
 * @param {{
 *    contentErrors: import("vanilla-jsoneditor").ContentErrors | null,
 *    patchResult: import("vanilla-jsoneditor").JSONPatchResult | null
 *  }} changeStatus
 */
function jsonChanged(newcontent, previousContent, changeStatus) {
  const yamlContent = document.getElementById("yamlequivalent");

  if (changeStatus?.contentErrors?.parseError) {
    console.log(
      "jsonChanged - got parsing errors %o",
      changeStatus.contentErrors,
    );
    if (newcontent.text?.search("\nkind: ConfigMap\n") >= 0) {
      // Check if it is valid YAML
      try {
        const configMap = load(newcontent.text);
        if (
          configMap &&
          configMap.kind === "ConfigMap" &&
          configMap.data &&
          Object.values(configMap.data)[0]
        ) {
          // pull the first data object and parse it as yaml
          const configMapData = load(Object.values(configMap.data)[0]);
          console.log("got yaml configMap data object: %o", configMapData);

          // Asynchronously update the content with the parsed configmap data.
          // This is because JSON editor likes to finish the onchange before
          // anything esle happens!
          setTimeout(() => {
            /** @type {Content} */
            const content = { json: configMapData };
            editor.updateProps({
              content,
              mode: "text",
              selection: null,
            });
            editor.refresh();
            // trigger refresh of YAML
            jsonChanged(content, null, null);
          }, 100);
          return;
        }
      } catch (e) {
        console.log("not valid yaml " + e);
      }
    }
    // some other unparsable JSON.
    yamlContent.setAttribute("disabled", "true");
  } else {
    // Got valid JSON, even if it might not be valid Autoscaler config
    // update YAML version.
    yamlContent.removeAttribute("disabled");
    let json;
    if (newcontent.text) {
      json = JSON.parse(newcontent.text);
    } else {
      json = newcontent.json;
    }
    // Build a JSON configmap and convert to YAML.
    const configMap = {
      apiVersion: "v1",
      kind: "ConfigMap",
      metadata: {
        name: "autoscaler-config",
        namespace: "spanner-autoscaler",
      },
      data: {
        // autoscaler config is YAML as text.
        "autoscaler-config.yaml": dump(json, { lineWidth: -1 }),
      },
    };
    yamlContent.value = dump(configMap, { lineWidth: -1 });
  }
}

/** Renderer that adds rendering of Schema enums */
function onRenderValue(props) {
  // use the enum renderer, and fallback on the default renderer
  return renderJSONSchemaEnum(props, schema) || renderValue(props);
}

/**
 * OnLoad event handler
 */
function myOnload() {
  // set a default config
  const content = {
    json: [
      {
        $comment: "Sample autoscaler config",
        projectId: "my-project",
        instanceId: "my-instance",
        scalerPubSubTopic: "projects/my-project/topics/scaler-topic",
        units: "NODES",
        minSize: 1,
        maxSize: 3,
      },
    ],
  };

  editor = new JSONEditor({
    target: document.getElementById("jsoneditor"),
    props: {
      content,
      mode: "text",
      schema,
      indentation: 2,
      validator: createAjvValidator({ schema }),
      onChange: jsonChanged,
      onRenderValue,
    },
  });
  // update YAML block using default content.
  jsonChanged(content, null, null);
  // remove loading message
  document.getElementById("loading").style.display = "none";
}

document.addEventListener("DOMContentLoaded", myOnload, false);
