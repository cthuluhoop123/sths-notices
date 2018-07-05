const directory = require('../config/directory.js')

module.exports = (app) =>
{
    app.get('*', (req, res) =>
    {
        res.status(404).sendFile('404.html', directory)
    })
}