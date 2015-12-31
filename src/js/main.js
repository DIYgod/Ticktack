function getURLParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    return r ? unescape(r[2]) : null;
}

var birth = getURLParam('birthday');
if (!birth) {
    alert('缺少参数 birthday');
}
var year = parseInt(birth.slice(0, 4));
var month = parseInt(birth.slice(4, 6)) - 1;
var day = parseInt(birth.slice(6, 8));
var birthday = new Date(year, month, day);

var live = (new Date() - birthday) / 2592000000;
var range = [0, live - 1];

var color = '#' + (getURLParam('color') || 'f00');
var background = '#' + (getURLParam('background') || 'fff');

for (var i = 0; i < 30; i++) {
    for (var j = 0; j < 30; j++) {
        var current = i * 30 + j;
        var canvas = document.getElementsByClassName('myLife')[0];
        var ctx = canvas.getContext('2d');
        if (current >= range[0] && current <= range[1]) {
            ctx.fillStyle = color;
        }
        else {
            ctx.fillStyle = background;
        }
        ctx.fillRect(j * 10 + 1, i * 10 + 1, 8, 8);
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 1;
        ctx.strokeRect(j * 10, i * 10, 10, 10);
    }
}

setInterval(function () {
    document.getElementsByClassName('left')[0].innerHTML = ((new Date() - birthday) / 2592000000 / 9).toFixed(9);
}, 300);