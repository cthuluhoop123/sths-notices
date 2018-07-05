const fs              = require('fs')
const directory       = require('../config/directory')
const getNotice       = require('../models/getNotice')

/*
const getLatestSaved  = require('../models/getLatestSavedNotice')
const getList         = require('../models/getList')
const getDate         = require('../models/getDate')
*/

var refreshTimer  = 1000 * 10
var lastRefresh   = 0

module.exports = (app) =>
{
    app.get('/dn*', (req, res) =>
    {
        getNotice(function(fname)
        {
            res.sendFile('notices/' + fname, directory)

            fs.readdir('./public/notices', function(err, files)
            {
                for (var i = 0; i < files.length; i++)
                {
                    if (files[i] == fname) continue
                    fs.unlink('./public/notices/' + files[i], function(err)
                    {
                        if (err) console.error(err)
                    })
                }
            })
        })        
    })
}
