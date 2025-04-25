function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

function select(content){
    let frame = document.querySelector("iframe");
    frame.setAttribute("src",content+".html");
}
