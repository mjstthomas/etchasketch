var selected = document.querySelector('.selected');
var mode = document.querySelector('.mode');
var clear = document.querySelector('.clear');

$('.clear').on('click', function(){
	$('.grid').css('background', 'rgb(200, 200, 200)');
	$('.container').empty();
	clear.textContent = "Clear";
	grid();
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



function grid(){
	var input = prompt("How many squares across would you like?");
	var input1 = Number(input) * Number(input);
	var i = 0;
	$('.container').css("grid-template-column", input);
	while(i < input1){
		var div = document.createElement('div');
		$('.container').append(div);
		if(div.classList !== 'grid'){
			div.classList.add('grid');
		}
		i++;
	}
};