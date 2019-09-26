
var selected = document.querySelector('.selected');
var mode = document.querySelector('.mode');


$('button').on('click', function(){
	$('.grid').css('background', 'rgb(200, 200, 200)')
})
$('#black').on('click', function(){
	$('.grid').css('background', 'rgb(200, 200, 200)');
	black();
})
$('#rainbow').on('click', function(){
	$('.grid').css('background', 'rgb(200, 200, 200)');
	rainbow();
})

function black(){
$('.grid').mouseenter(function(){
	$(this).css("background", "black")
	});
}

function rainbow(){
	$('.grid').mouseenter(function(){
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		var colors = 'rgb(' + r + ', '+ g + ', '+ b + ')';
	$(this).css("background", colors)
	});
}



/*var input1 = Number(input);

function grid(){
	for(i = 0; i <= input1; i++){
		$('.container').addElement('div .grid');
	}
}*/