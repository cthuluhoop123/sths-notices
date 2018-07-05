const httpntlm = require('./httpntlm')

function getList(cb)
{

    var opts = Object.assign({ }, httpntlm.opts)
    opts.url += 'index.php?option=com_sths_dailynotices&amp;page=1'

    httpntlm.get(opts, function(err, res)
    {

        var r = res.body

        r = r.substring(r.indexOf('s</h') + 40)

        var link;

        for (var i = 0; i < 102; i++)
        {
            r = r.substring(r.indexOf('<a'))
            var url = r.substring(9, r.indexOf('">'))
            if (url.indexOf('page=') < 0)
            {
                link = url;
                break;
            }
            
            r = r.substring(r.indexOf('</a') + 4)

            if (r.indexOf('</p') <= 2) break
        }

        if (cb) cb(+link.replace(/\D/g,''))

    })

}

module.exports = getList