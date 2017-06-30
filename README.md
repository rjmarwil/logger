# logger
[![Circle CI](https://circleci.com/gh/pagerinc/logger.svg?style=svg&circle-token=5d187ad739918f3029e28534e5bf046ece8120ae)](https://circleci.com/gh/pagerinc/logger) [![Code Climate](https://codeclimate.com/repos/556dcfce6956802d790056d6/badges/ab64b16efb1ac1481125/gpa.svg)](https://codeclimate.com/repos/556dcfce6956802d790056d6/feed) [![Test Coverage](https://codeclimate.com/repos/556dcfce6956802d790056d6/badges/ab64b16efb1ac1481125/coverage.svg)](https://codeclimate.com/repos/556dcfce6956802d790056d6/coverage) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Logging library for your verbose projects.


## Basic usage

Works basically as a wrapper for Bunyan's console and [`console`] and [`raven`] transports. For more details on how to work with Bunyan, take a look at [its documentation](https://github.com/trentm/node-bunyan) or see [configuration](#Configuration) below for the setup details.

```javascript
'use strict';

const logger = require('@pager/logger');
logger.info({ foo: 'bar' }, 'Everyone knows %s', 'the dice are loaded');
```

> *PROTIP*: When running your app, remember you can get pretty output by [simply piping it to `bunyan`](https://github.com/trentm/node-bunyan#cli-usage) :godmode: .

For detailed usage examples, take a look at the [`examples`](https://github.com/pagerinc/logger/tree/master/examples) folder.


## Configuration

Most of the bundled transports can be configured on your app by simply declaring a `log` key on your [config settings](https://github.com/lorenwest/node-config).


### Sample configuration

```javascript
{
  "log": {
    "patchGlobal": true,
    "levels": {
      "console": "debug"
    }
  }
}
```


### Sentry

In order to enable the Sentry/Raven [transport](https://github.com/chakrit/bunyan-raven), the `SENTRY_DSN` env var needs to be set.


## Installation

This is a _private_ npm package, so make sure you have something that resembles the following `.npmrc` on your project's folder:

```
@pager:registry=http://npme.techcareinc.com:8080/
//npme.techcareinc.com:8080/:_authToken=${NPM_TOKEN}
```

Note that this requires the `NPM_TOKEN` env var to be exported as a [GitHub Personal Access Token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/).


## Custom transports

You can extend the default functionality of this module by adding your own transports:

```javascript
'use strict'

// Require the transport
const localFileTransport = require('winston').transports.File;

// Require the logger
const logger = require('@pager/logger');

// Add and setup the transport
logger.add(localFileTransport, { name: 'localFile', filename: 'test.log' });
```
