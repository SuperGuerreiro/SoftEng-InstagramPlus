
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

function relative_time(time_ms) {
	var msPerMinute = 60 * 1000;
	var msPerHour = msPerMinute * 60;
	var msPerDay = msPerHour * 24;
	var msPerMonth = msPerDay * 30;
	var msPerYear = msPerDay * 365;

	var elapsed = (new Date()).getTime() - time_ms;
	if (elapsed < msPerMinute) {
		return 'seconds ago';
	} else if (elapsed < msPerHour) {
		return Math.round(elapsed / msPerMinute) + ' minutes ago';
	} else if (elapsed < msPerDay) {
		return Math.round(elapsed / msPerHour) + ' hours ago';
	} else if (elapsed < msPerMonth) {
		return Math.round(elapsed / msPerDay) + ' days ago';
	} else if (elapsed < msPerYear) {
		return Math.round(elapsed / msPerMonth) + ' months ago';
	} else {
		return Math.round(elapsed / msPerYear) + ' years ago';
	}
}