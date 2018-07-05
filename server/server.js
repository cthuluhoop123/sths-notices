function start()
{

    const express   = require('express')
    // const http2     = require('../node_modules/http2/lib/http')  // require('http2') uses node's version which breaks compatibility

    const config    = require('./config/config')

    var app         = express()                                  // App with routes
    // var http        = express()                                  // HTTP Server
    // var h2server    = http2.createServer(config.sslOptions, app) // HTTP/2 Server

    // Fix express with http2 until officially supported
    /*
    require('express-http2-workaround')(
    {
        app:        app,
        express:    express,
        http2:      http2
    })
    */

    config.appinit(app)
    // config.httpinit(http)

    // h2server.listen(config.h2port)
    // http.listen(config.hport)\
    app.listen(config.hport)

    var msg     = 'Server started\n'
    msg        += 'Http listening on:          ' + config.hport + '\n'
    // msg        += 'Http2 (https) listening on: ' + config.h2port

    console.log(msg)

}

module.exports = 
{
    start: start
}