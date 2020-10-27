//EX 1
function getDateAndTime()
{
    var str = "";

    var days = new Array ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

    var now = new Date();
    str = days[now.getDay()] + ' ' + now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
    document.getElementById('getDate').innerHTML = str;
}

setInterval(getDateAndTime, 1000);

//EX 2

