# logger
[![Circle CI](https://circleci.com/gh/pagerinc/logger.svg?style=svg&circle-token=5d187ad739918f3029e28534e5bf046ece8120ae)](https://circleci.com/gh/pagerinc/logger) [![Code Climate](https://codeclimate.com/repos/556dcfce6956802d790056d6/badges/ab64b16efb1ac1481125/gpa.svg)](https://codeclimate.com/repos/556dcfce6956802d790056d6/feed) [![Test Coverage](https://codeclimate.com/repos/556dcfce6956802d790056d6/badges/ab64b16efb1ac1481125/coverage.svg)](https://codeclimate.com/repos/556dcfce6956802d790056d6/coverage) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Logging library for new (and old) projects

## Usage

Each `NODE_ENV` defaults to a `console` and `file` transports. Under `production` and `stagging`, `localfile` 
is replaced by `loggly` transport. See [configuration](#Configuration) for the extra setup under those enviroments.

## Installation

1. Upgrade npm

```
  sudo npm install npm -g
```

2. Add Pager Registry

```
  npm login --registry="http://npme.techcareinc.com:8080" --scope="@pager"
```

Fill your github credentials and public email

3. Install the package

```
  npm install @pager/logger --save
```

4. Require the package

```javascript
var logger = require('logger');
```

5. Use the package

```javascript
logger.log('info', 'Hola Mundo', {hola: 'mundo'});
```

## Configuration

Some of the bundled transports require some additional configuration on your app.

We use [node-config](https://github.com/lorenwest/node-config), in order to configure your logs install it and add the log element

### Configurations

For now the only possible configuration is the log levels for the bundled transport, Expect more configurations here

*Example Configuration*
```
{
  "log":{
    "levels":{
      "console":"debug"
    }
  }
}
```

### Sentry

The Sentry/Raven transport requires the following ENV var to be set:

- `SENTRY_DSN`

### Loggly

- `LOGGLY_TOKEN`
- `LOGGLY_DOMAIN`

### S3

The S3 transport requires the following ENV vars to be set on the host:

- `S3_LOGS_BUCKET` - name of your bucket
- `S3_KEY`
- `S3_SECRET`

## Custom transports

To add a custom transport:

```javascript
// Require the transport
var localFileTransport = require('winston').transports.File;

// Require the logger
var logger = require('logger');

// Add and setupt the transport
logger.add(localFileTransport, { name: 'localFile', filename: 'test.log' });
```
