jQuery(function(jq) {
	var rr = jq('#contentE');
	var conr = rr.find('div.con'),
	conr0 = conr[0],
	btnWr = rr.find('> div.btns'),
	btnPr = btnWr.find('a.up'),
	btnNr = btnWr.find('a.down');
	var lisr = conr.find('.fleft');
	conr.find(".bord").hover(
		function() { jq(this).addClass("bgBord"); },
		function() { jq(this).removeClass("bgBord"); }
	);
	var pnumr = 6,
	numr = lisr.length;
	if (numr <= pnumr) return;
	var owr = lisr[1].offsetLeft - lisr[0].offsetLeft,
	idxArear = [0, numr - pnumr],
	idxr = 0;
	function updateNum(n) {
		if (n > idxArear[1] || n < idxArear[0]) {
			return;
		}
		btnPr[((n == 0) ? 'add': 'remove') + 'Class']('uN');
		btnNr[((n == idxArear[1]) ? 'add': 'remove') + 'Class']('dN');
		idxr = n;
		conr.stop().animate({ left: -n * owr },	300);
	}
	btnPr.click(function() {
		updateNum(idxr - 1);
		return false;
	});
	btnNr.click(function() {
		updateNum(idxr + 1);
		return false;
	});
});