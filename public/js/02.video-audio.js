$(window).resize(function(){
	$(".videos").remove();
	$("body").append('<div class="videos"></div>')
	$(".videos").vegas({
		slides: [{video: {src: ['../video/Morning Mist - 27111.mp4'],loop: true, mute: true}}]
	})
}).trigger("resize");