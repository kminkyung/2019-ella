/* window.addEventListener("wheel", function(){
	console.log(event);
}); */
document.querySelectorAll(".page").forEach(function(page, index){
	page.addEventListener("wheel", wheelFn, {passive: false});
})

window.addEventListener("wheel", function(){event.preventDefault();}, {passive: false});


function wheelFn() {
	event.preventDefault();
	event.stopPropagation();
	var delta = event.deltaY;
	var hei = $(window).innerHeight();
	var posY = event.pageY;
	var n = Math.floor(posY/hei);
	var tar = 0;
	var pageCnt = $(".page").length; // 4
	if(delta > 0) {
		// 아래로 휠
		if(n < pageCnt - 1) {
			wheelAni((n + 1) * hei, n, (n+1));
		}
	}
	else {
		// 위로 휠
		if(n > 0) {
			wheelAni((n - 1) * hei, n, (n-1));
		}
	}
	// console.log(n);
	// console.log(event.pageY);
}

function wheelAni(pos, prevPage, nowPage) {
	console.log(pos);
 $("html, body").stop().animate({"scrollTop": pos}, 500);
}

