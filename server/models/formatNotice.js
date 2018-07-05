function formatNotice(data)
{

    data = data.replace('\r\n<td style="width: 20%; padding-left: 20px">\r\n<img src="/intranet/components/com_sths_dailynotices/news.jpg" alt="Daily Notices" style="padding: 0px 30px" />\r\n</td>\r\n', '')
    data = data.replace('<script language="javascript" src="/intranet/components/com_sths_dailynotices/textarea-limit.js"></script>\r\n', '')
    data = data.replace('<td style="width: 80%; padding-left: 20px">', '<td style="text-align: center">')
    data = data.replace('templates/sths_v6/css/sths.css', '/css/sths.css')

    return data

}


module.exports = formatNotice