const httpntlm = require('httpntlm')

const opts =
{
    domain:       'detnsw',
    password:     Buffer.from('nice try', 'base64').toString(),
    workstation:  '',
    url:          'http://web1.sydneytech-h.schools.nsw.edu.au/intranet/',
    username:     'i mean what',
}

module.exports       = httpntlm
module.exports.opts  = opts
