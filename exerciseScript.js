function getDateAndTime()
{
    var str = "";
    var now = new Date();
    str = now.toDateString() + ' ' + now.toLocaleTimeString();
    document.getElementById('getDate').innerHTML = str;
}

setInterval(getDateAndTime, 1000);