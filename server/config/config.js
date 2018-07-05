const compression  = require('compression')
const express      = require('express')
const fs           = require('fs')
const directory    = require('./directory')

const h2port       = 8443
const hostname     = '127.0.0.1'
const hport        = 27713

console.log(__dirname)

const sslOptions   = 
{
    key:  fs.readFileSync('./server/https/private.key'),
    cert: fs.readFileSync('./server/https/certificate.pem')
}


function appinit(app)
{
    app.disable('x-powered-by')
    app.use(compression())
    app.use(express.static('./public'))

    require('../controllers/noticeController')(app)

    require('../controllers/errorController')(app)
}

function httpinit(http)
{
    http.get('*', (req, res) =>
    {
        res.redirect('https://' + hostname + ':' + h2port + req.url)
    })
}

module.exports = 
{
    appinit:    appinit,
    httpinit:   httpinit,
    sslOptions: sslOptions,
    hport:      hport,
    h2port:     h2port
}
