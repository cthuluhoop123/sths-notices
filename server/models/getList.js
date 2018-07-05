const httpntlm = require('./httpntlm')

function getList(page, cb)
{

    var opts = Object.assign({ }, httpntlm.opts)
    opts.url += 'index.php?option=com_sths_dailynotices&amp;page='
    
    if (!page)
    {
        opts.url += '1'
    }
    else
    {
        opts.url += page
    }

    httpntlm.get(opts, function(err, res)
    {

        var r = res.body

        r = r.substring(r.indexOf('s</h') + 40)

        var links = [ ]
        var pages = [ ]

        for (var i = 0; i < 102; i++)
        {

            r = r.substring(r.indexOf('<a'))
            var url    = r.substring(9, r.indexOf('">'))
            if (url.indexOf('page=') > -1)
            {
                pages.push(url)
            }
            else
            {
                links.push(url)
            }
            
            r = r.substring(r.indexOf('</a') + 4)

            if (r.indexOf('</p') <= 2) break

        }

        var maxpage = +pages[pages.length - 1].substring(pages[pages.length - 1].indexOf('page=') + 5)

        if (cb) cb(links, pages, maxpage)

    })

}

module.exports = getList