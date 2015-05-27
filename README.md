# logger

Logging library for new (and old) projects

## Usage

By default un Development enviroment it has console and file transport, for production and stagging localfile 
is replaced by loggly transport, in those enviroments dont forget to set the LOGGLY_TOKEN enviroment variable,
those enviroments also have a sentry transport for exceptions, dont forget to add the SENTRY_DSN enviroment variable


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

## Add custom Transport

To add a custom transport 

```javascript
// Require the transport
var localFileTransport = require('winston').transports.File;

// Require the logger
var logger = require('logger');

// Add and setupt the transport
logger.add(localFileTransport, { name: 'localFile', filename: 'test.log' });


```


