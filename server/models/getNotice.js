const fs = require('fs')
const getDate = require('./getDate')
const getList = require('./getList.1')
const dlNotice = require('./dlNotice')

var server_nd  = 19700101
var lastUpdate = 0

function nupdate(date, fname, cb)
{
    dlNotice(date_s, (data) => {
        fs.writeFile('./public/notices/' + fname, data, (err) => {
            if (cb) cb(fname)
        })
    })
}

function su()
{
    getList((date) => {
        server_nd = date
    })
}

function getNotice(cb)
{
    var d = getDate()
    date    = d[0]
    date_s  = d[1]
    var fname = d[1] + '.html'
    if (server_nd < date)
    {
        var t = new Date().getTime()
        if (t - lastUpdate > 10000)
        {
            lastUpdate = t
            su()
            nupdate(date_s, fname, cb)
            return
        }
    }
    fs.access('./public/notices/' + fname, fs.constants.F_OK, (err) => {
        if (err)
        {
            nupdate(date_s, fname, cb)
            return
        }
        if (cb) cb(fname)
    })

}

module.exports = getNotice
