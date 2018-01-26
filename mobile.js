var system = {
    win: false,
    mac: false,
    xll: false
};
var hz=location.pathname;
var p = navigator.platform;
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);

if (system.win || system.mac || system.xll) {
	//window.location='URL'+hz;
	} 
else {
	 window.location='http://m.027abl.com'+hz;
}

/* 
var hz=location.pathname;
if(navigator.platform.indexOf('Win32')!=-1){ 
}else{ 
//shouji
window.location.href="http://m.027abl.com"+hz;
} */