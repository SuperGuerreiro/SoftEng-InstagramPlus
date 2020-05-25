
// substitui uma série de tags numa string ({0} ... {n}), 
// pelos argumentos com que é chamada
// nota: respeita a ordem, não é "fail safe", sim é "big brain"
String.prototype.format = function () {
    var a = this;
    for (var k in arguments) {
        a = a.replace(new RegExp("\\{" + k + "\\}", 'g'), arguments[k]);
    }
    return a
}