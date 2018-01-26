(function() {
	try {
		var d = location.host,
			re = new RegExp('https?://www.baidu.com/s\?'),
			r = document.referrer,
			p0,
			p1,
			q,
			p,
			ps = {},
			u = 'http://www.baidu.com/s?ct=2097152&tn=0051&ie=utf-8&si=~SITEDOMAIN~&wd=~SEARCHWORD~',
			j;
		if (!re.test(r)) {
			return false;
		}
		p1 = r.indexOf('#');
		p0 = r.indexOf('?');
		q = r.substr(p0 + 1, (p1 > 0 ? p1 : r.length) - p0);
		p = q.split('&');
		for (var i = 0; i < p.length; i++) {
			s = p[i].split('=');
			if (s.length < 2 || s[0] == '') {
				continue;
			}
			ps[s[0]] = s[1];
		}
		if (ps.hasOwnProperty('si') || !ps.hasOwnProperty('wd')) {
			return false;
		}
		u = 'http://www.baidu.com/s?ct=2097152&tn=0051&ie=utf-8&si=~SITEDOMAIN~&wd=~SEARCHWORD~';
		j = u.replace('~SITEDOMAIN~', 'www.027abl.com' /*d*/ ).replace('~SEARCHWORD~', ps['wd']);
		if (navigator.userAgent.indexOf("MSIE") != -1) {
			window.opener.document.location = j;
		} else {
			window.opener.location.href = j;
		}
	} catch (e) {}
})();