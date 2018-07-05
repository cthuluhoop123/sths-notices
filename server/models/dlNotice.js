const httpntlm  = require('./httpntlm')
const formatN   = require('./formatNotice.js')

function dlNotice(date, cb)
{
    // http://web1.sydneytech-h.schools.nsw.edu.au/intranet/index.php?option=com_sths_dailynotices&action=view&task=print&date=2018-07-04
    var opts = Object.assign({ }, httpntlm.opts)
    // opts.url += link + '&amp;task=print'
    opts.url += '/index.php?option=com_sths_dailynotices&action=view&task=print&date=' + date;

    httpntlm.get(opts, function(err, res)
    {
        if (cb) cb(formatN(res.body))
    })
}

module.exports = dlNotice