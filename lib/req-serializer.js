'use strict';

const reqSerializer = function reqSerializer(req) {

    const _req = {};
    const { path, instance, route, httpVersion, source, responseTime } = req;

    if (path){
        _req.path = path;
    }

    if (instance){
        _req.instance = instance;
    }

    if (route){
        _req.route = route;
    }

    if (httpVersion){
        _req.httpVersion;
    }

    if (source){
        _req.source = source;
    }

    if (responseTime){
        _req.responseTime = responseTime;
    }

    return _req;
};

module.exports = {
    reqSerializer
};
