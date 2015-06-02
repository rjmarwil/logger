# logger

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

### Sentry

The Sentry/Raven transport requires the following ENV var to be set:

- `SENTRY_DSN`

### Loggly

- `LOGGLY_TOKEN`

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
