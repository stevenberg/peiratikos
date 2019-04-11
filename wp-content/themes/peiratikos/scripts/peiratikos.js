window.onload = function() {
	if (document.getElementById) {
		if (document.getElementById('searchform')) {
			var s = document.getElementById('s');
			s.onfocus = function() {
				if (this.value == 'Search Peiratikos') {
					this.value = '';
				}
			}
			s.onblur = function() {
				if (this.value == '') {
					this.value = 'Search Peiratikos';
				}
			}
			document.getElementById('searchform').onsubmit = function() {
				var stext = s.value.replace(/ /g, '+');
				if (stext == '') {
					stext = 'search';
				}
				//location.href = 'http://70.85.217.130/~steven/search/' + stext;
				location.href = 'https://peiratikos.net/search/' + stext;
				return false;
			}
		}
	}
}
