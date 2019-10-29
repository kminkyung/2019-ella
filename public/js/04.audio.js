$("#bt-play").click(function(){
	$(this).hide();
	$("#bt-pause").show();
	$("#snd")[0].play();
});
$("#bt-pause").click(function(){
	$(this).hide();
	$("#bt-play").show();
	$("#snd")[0].pause();
});
$("#bt-stop").click(function(){
	$("#snd")[0].pause();
	$("#snd")[0].currentTime = 0;
	$("#bt-pause").hide();
	$("#bt-play").show();
});
$("#bt-mute").click(function(){
	$(this).hide();
	$("#bt-up").show();
	$("#snd")[0].muted = true;
});
$("#bt-up").click(function(){
	$(this).hide();
	$("#bt-mute").show();
	$("#snd")[0].muted = false;
	$("#snd")[0].volume = $("#volume").val();
});
$("#volume").change(function(){
	$("#snd")[0].muted = false;
	$("#snd")[0].volume = $(this).val();
	$("#bt-up").hide();
	$("#bt-mute").show();
});
$("#snd-sel").change(function(){
	var src = $(this).val();
	$("#snd")[0].src = src;
	$("#snd")[0].play();
	$("#bt-play").trigger("click");
});


// this 라는 객체에 $() 붙여줘서 jQuery 객체로 변경시켜주었다면
// $("#snd")라는 jQuery 객체에 [0]를 붙여줌으로써 JS객체로 변경할 수 있다.