function getDate()
{
    date   = new Date()
    year   = date.getFullYear().toString()
    month  = (date.getMonth() + 1).toString()
    date   = (date.getDate()).toString()

    if (month.length == 1)
    {
        month = '0' + month;
    }
    if (date.length == 1)
    {
        date = '0' + date;
    }

    return [ +(year + month + date), year + '-' + month + '-' + date ]
}

module.exports = getDate