console.log("hey Im suck");

$(document).ready(function(){

	var height = $(window).height();
	var width = $(window).width(); 
	// $("#big-stupid-div").css("margin-left", width/2);
	// $("#big-stupid-div").css("margin-top", height/2);


var blur = function(divToBlur){

	$(divToBlur).on("mouseover", function(){
		$(divToBlur).addClass("blurry-text");
	});
	$(divToBlur).on("mouseleave", function(){
		$(divToBlur).removeClass("blurry-text");
	});
}

var enlarge = function(divToEnlarge, enlargeFactor){
	var originalHeight = $(divToEnlarge).height();
	var originalWidth = $(divToEnlarge).width();

	$(divToEnlarge).on("mouseover", function(){
			$(divToEnlarge).css("height", originalHeight*enlargeFactor);
			$(divToEnlarge).css("width", originalWidth*enlargeFactor);
	});
	$(divToEnlarge).on("mouseleave", function(){
			$(divToEnlarge).css("height", originalHeight);
			$(divToEnlarge).css("width", originalWidth);
	});
}

var vibrate = function(divToVibrate, offsetAmount){

	var originalHeight = $(divToVibrate).height();
	var originalWidth = $(divToVibrate).width();

	var offset = false;
	setInterval(function(){
		if(!offset){
			$(divToVibrate).css("margin-top", originalHeight+offsetAmount);
			$(divToVibrate).css("margin-left", originalWidth+offsetAmount);
			offset = true;
		}
		else{
			$(divToVibrate).css("margin-top", originalHeight-offsetAmount);
			$(divToVibrate).css("margin-left", originalWidth-offsetAmount);
			offset = false;
		}
	}, 100);


}

var rotate = function(divToRotate, rotation){
	var rotationTotal = 0;
	setInterval(function(){
		rotationTotal = (rotationTotal + rotation)%360;
	    $(divToRotate).css({'transform' : 'rotate('+rotationTotal+'deg)'});
	}, 100);

}
var blink = function(divToBlink, blinkSpeed){
	setInterval(function(){
		$(divToBlink).fadeToggle(blinkSpeed);
	});
}
// vibrate("#sponge", 1);
// vibrate("#pat", 2);
// blur("#big-stupid-div");
// rotate('#rocket', 2);
// rotate('#sponge', 20);
// blink('#rocket', 300);
// enlarge("#enlarge", 1.25);
// enlarge('#sponge', 1.25);
// enlarge('#pat', 1.25);

});