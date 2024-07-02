/* Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License
 */

/*
 * ESLINT: Ignore max line length errors on lines starting with 'it('
 * (test descriptions)
 */
/* eslint max-len: ["error", { "ignorePattern": "^\\s*it\\(" }] */

// eslint-disable-next-line no-unused-vars
const should = require('should');
const validateConfig = require('../validateConfig');
const fs = require('node:fs');
const path = require('node:path');

/**
 * @typedef {import('../../../autoscaler-common/types').AutoscalerSpanner
 * } AutoscalerSpanner
 */

describe('validateConfig', () => {
  describe('#parseAndValidateConfig', () => {
    it('fails when given an empty config', async () => {
      await validateConfig
        .parseAndValidateConfig('')
        .should.be.rejectedWith(
          new Error(
            'Invalid JSON in Autoscaler configuration:' +
              ' SyntaxError: Unexpected end of JSON input',
          ),
        );
    });
    it('fails when not given an array', async () => {
      await validateConfig
        .parseAndValidateConfig('{}')
        .should.be.rejectedWith(
          new validateConfig.ValidationError(
            'Invalid Autoscaler Configuration parameters:\n' +
              'SpannerConfig must be array',
          ),
        );
    });

    it('fails when given an empty array', async () => {
      await validateConfig
        .parseAndValidateConfig('[]')
        .should.be.rejectedWith(
          new validateConfig.ValidationError(
            'Invalid Autoscaler Configuration parameters:\n' +
              'SpannerConfig must NOT have fewer than 1 items',
          ),
        );
    });
    it('fails when config does not contain required params', async () => {
      await validateConfig
        .parseAndValidateConfig('[{}]')
        .should.be.rejectedWith(
          new validateConfig.ValidationError(
            'Invalid Autoscaler Configuration parameters:\n' +
              "SpannerConfig/0 must have required property 'projectId'\n" +
              "SpannerConfig/0 must have required property 'instanceId'",
          ),
        );
    });
    it('fails with an invalid property ', async () => {
      await validateConfig
        .parseAndValidateConfig(
          `[{
            "projectId": "my-project",
            "instanceId": "my-instance",
            "invalidProp": "nothing"
          }]`,
        )
        .should.be.rejectedWith(
          new validateConfig.ValidationError(
            'Invalid Autoscaler Configuration parameters:\n' +
              'SpannerConfig/0 must NOT have additional properties',
          ),
        );
    });
    it('fails when a property is not valid', async () => {
      await validateConfig
        .parseAndValidateConfig(
          `[{
            "projectId": "my-project",
            "instanceId": "my-instance",
            "minSize": "1"
          }]`,
        )
        .should.be.rejectedWith(
          new validateConfig.ValidationError(
            'Invalid Autoscaler Configuration parameters:\n' +
              'SpannerConfig/0/minSize must be number',
          ),
        );
    });
    it('passes with valid config', async () => {
      const config = [
        {
          '$comment': 'Sample autoscaler config',
          'projectId': 'my-project',
          'instanceId': 'my-instance',
          'scalerPubSubTopic': 'projects/my-project/topics/scaler-topic',
          'units': 'NODES',
          'minSize': 1,
          'maxSize': 3,
        },
      ];
      (
        await validateConfig.parseAndValidateConfig(JSON.stringify(config))
      ).should.deepEqual(config);
    });
  });
  describe('#validateTestFiles', async () => {
    const dir = 'src/poller/poller-core/test/resources';
    const files = fs.readdirSync(dir, {
      withFileTypes: true,
    });

    const yamlFiles = files.filter((f) => f.name.endsWith('.yaml'));
    const goodYamlFiles = yamlFiles.filter((f) => f.name.startsWith('good-'));
    const badYamlFiles = yamlFiles.filter((f) => f.name.startsWith('bad-'));
    const jsonFiles = files.filter((f) => f.name.endsWith('.json'));
    const goodJsonFiles = jsonFiles.filter((f) => f.name.startsWith('good-'));
    const badJsonFiles = jsonFiles.filter((f) => f.name.startsWith('bad-'));

    goodYamlFiles.forEach((file) => {
      it(`validates file ${file.name} successfully`, async () => {
        await validateConfig.TEST_ONLY.validateGkeConfigMapFile(
          path.join(dir, file.name),
        ).should.be.resolved();
      });
    });

    badYamlFiles.forEach((file) => {
      it(`invalid file ${file.name} correctly fails validation`, async () => {
        await validateConfig.TEST_ONLY.validateGkeConfigMapFile(
          path.join(dir, file.name),
        ).should.be.rejected();
      });
    });

    goodJsonFiles.forEach((file) => {
      it(`validates file ${file.name} successfully`, async () => {
        await validateConfig.TEST_ONLY.validateJsonFile(
          path.join(dir, file.name),
        ).should.be.resolved();
      });
    });

    badJsonFiles.forEach((file) => {
      it(`invalid file ${file.name} correctly fails validation`, async () => {
        await validateConfig.TEST_ONLY.validateJsonFile(
          path.join(dir, file.name),
        ).should.be.rejected();
      });
    });
  });
});
