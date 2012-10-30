/**
 * Raphael LED gauge
 * @author pzhang
 */

 //frame
var wrapper = document.getElementById('gauge');
var width = parseInt(window.getComputedStyle(wrapper).width);
var height = parseInt(window.getComputedStyle(wrapper).height);
console.log(width, height);
var paper = Raphael('gauge', width, height);
var frame = paper.rect(60, 30, 50, 350-30).attr({ 	
	stroke: '#cccccc',
	'stroke-width': .1,
	fill: "#000",
	'fill-opacity': .25
}); 
frame.toBack();
var frame_height = frame.attr("height");
var frame_width = frame.attr("width");
var startX = frame.attr("x");
var startY = frame.attr("y") + frame_height;

var mark_1 = paper.path("M"+startX+","+startY+"h"+(-10));
var mark_1_value = paper.text(startX-10, startY, "0").attr({
	'text-anchor': 'end',
	'font-size': 14
});
var mark_2 = paper.path("M"+startX+","+(startY-frame.attr("height")/2)+"h-10");
var mark_2_value = paper.text(startX-10, (startY-frame.attr("height")/2), "50")
						.attr({
							'text-anchor': 'end',
							'font-size': 14
						});
var mark_3 = paper.path("M"+startX+","+(startY-frame.attr("height"))+"h-10");
var mark_3_value = paper.text(startX-10, (startY-frame.attr("height")), "100")
						.attr({
							'text-anchor': 'end',
							'font-size': 14
						});
//thresholds
var thresholdValues = [46, 75, 100];
var thresholdColors = ["#00ff00", "#f0f000", "#ff0000"];
var thresholdSet = paper.set();
for (var i = 0; i < 3; i += 1) {
	var percentage = thresholdValues[i]/100;
	console.log(startY-frame_height*percentage);
	var t = paper.rect(
		startX, 
		startY-frame_height*percentage,
		frame_width,
		frame_height*percentage
	).attr({
		fill: thresholdColors[i]
	});
	thresholdSet.push(t);
}
thresholdSet.forEach(function(shape){
	shape.toBack();
});

var bar_number = 60; //changable
var bar_height = frame_height/bar_number,
	bar_width = frame_width,
	initX = startX,
	initY = startY,
	isEven = false,
	barSet = paper.set();
for (var i = 0; i < bar_number; i += 1) {
	initY = initY - bar_height;
	var bar = paper.rect(
		initX, 
		initY, 
		bar_width, 
		(isEven) ? (bar_height-1) : (bar_height+1))
				   .attr({
				   	fill: (isEven) ? '#333' : '',
				   	'stroke-width': .1,
				   	stroke: '#000'
				   });
	barSet.push(bar);
	isEven = !isEven;
}

paper.rect(frame.attr("x"), frame.attr("y"), frame.attr("width"), frame.attr("height"))

//trick, show value.
var value = 79.3,
	bright_percentage = value/100,
	dark_percentage = 1 - bright_percentage;

var newHeight = dark_percentage*frame_height;
console.log(newHeight, "=");
frame.attr({
	height: newHeight
})



































