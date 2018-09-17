function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (n) % 60;
    return num + " minutes = " + rhours + " hour(s) and " + minutes + " minute(s).";
}

document.write(timeConvert(200));

