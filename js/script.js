var cards = ['c01', 'c02', 'c03', 'c04', 'c05', 'c06', 'c07', 'c08', 'c09', 'c10', 'c11', 'c12', 'c13',
'd01', 'd02', 'd03','d04', 'd05', 'd06', 'd07', 'd08', 'd09', 'd10', 'd11', 'd12', 'd13',
];
var current = null;

function shuffle(array){
	var currentIndex = array.length;
	var randomIndex;
	var temporaryvalue;

	//While there remain elements to shuffle
	while(0 != currentIndex){

		//Pick a remaining element
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		//And swap it with the current element
		temporaryvalue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryvalue;
	}

	return array;
}

// var arr = shuffle(cards);
// console.log(arr);

function flig(card){
	$(card).toggleClass('flipped');

	if(!current){
		current = $(card);
	}else{
		if(current.attr('data-name') != $(card).attr('data-name')){
			//Khac nhau
			setTimeout(function(){
				console.log('Khác nhau');
				current.toggleClass('flipped');
				$(card).toggleClass('flipped');
				current = null;
			}, 500);
		}else{
			//Giong nhau
			setTimeout(function(){
				console.log('Giống nhau');
				$(card).css('opacity', '0');
				current.css('opacity', '0');
				current = null;
			},200);
		}
	}
}

$(function() {
	//Nhân đôi mảng để tạo ra các cặp bài
	cards = cards.concat(cards);

	//Đảo vị trí các quân bài
	cards = shuffle(cards);
	console.log(cards);
	//Chèn nội dung các quân bài vào trong element có class ="content"
	var html = '';
	for (var i=0; i<cards.length; i++){
		html += 
			'<div class="grid">' +
				'<div class="card" data-name="'+cards[i]+'" onclick="flig(this)">' +
					'<div class="front">'+
						'<img src="trump/png/x01.png">'+
					'</div>'+
					'<div class="back">'+
						'<img src="trump/png/'+cards[i]+'.png">'+
					'</div>'+
				'</div>'+
			'</div>';
	};

	$('.content').html(html);
});