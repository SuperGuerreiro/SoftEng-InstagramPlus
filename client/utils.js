
//NÃO DEVIA ESTAR NO CLIENT, MUDAR ISTO

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

function arr_to_json_arr(arr) {
    var str_arr = '';
    for (var i = 0; i < arr.length - 1; i++)
        str_arr += '"' + arr[i] + '",'
    return (str_arr += '"' + arr[arr.length - 1] + '"');
}