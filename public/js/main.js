/* Ready - 페이지가 로드될 때 일어날 일들 */
// 상단 배너 가리기
var topClose = $.cookie("top-banner-close");
if(topClose) $(".top-banner").hide();
$("body").click(function(){
$(".sch-layer").hide();
});

/* header */
/* header의 x 버튼 클릭 */
// cookie를 사용하지 않고 그냥 닫을 때 -새로고침하면 보임.
/* 
$("#bt-top-close").click(function(){
	$(this).parent().parent().slideUp(400);
});
*/
// cookie 로 제한시간을 10분 줄 때 
$("#bt-top-close").click(function(){
	$(this).parent().parent().slideUp(400);
	var d = new Date() //2019-10-17 wed 
	d.setTime(d.getTime() + 10*60*1000);
	console.log(d);
	$.cookie("top-banner-close", true, {expires: d})
});

// 언어, 통화 선택
$(".sel-top .fa-angle-down").click(function(e){
	e.stopPropagation();
	$(this).next().stop().slideToggle(300);
	$(this).toggleClass("fa-angle-down fa-angle-up");
});

$(".sel-top li").click(function(e){
	e.stopPropagation();
	$(this).parent().parent().children(".sel-top-img").attr("src", $(this).children("img").attr("src"));
	$(this).parent().parent().children(".sel-top-txt").text($(this).children("span").text());
	$(this).parent().prev().trigger("click");
});

// Search
$(".sch-txt").click(function(e){
	e.stopPropagation();
	$(".sch-layer").show();
})
$(".sch-layer").click(function(){
	e.stopPropagation();
});

// 메인 네비게이션
$(".navi-under").mouseenter(function(){
	$(this).find(".subs").css("visibility","visible").stop().animate({"top": "43px", "opacity": 1}, 300);
});
$(".navi-under").mouseleave(function(){
	$(this).find(".subs").stop().animate({"top": "143px", "opacity": 0}, 300, function(){
		$(this).css("visibility","hidden");
	})
});
$(".navi-show").mouseenter(function(){
	$(this).find(".subs").css("visibility", "visible").stop().animate({"opacity": 1}, 300);
});
$(".navi-show").mouseleave(function(){
	$(this).find(".subs").stop().animate({"opacity": 0}, 300, function(){
		$(this).css("visibility", "hidden");
	});
});

// 배너 (fade, slide(전체), slide(하나씩), slide(세로))

var $grid = $('.grid-wrap').imagesLoaded(function() {
  $grid.masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	})
});