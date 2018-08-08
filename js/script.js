var cards = [ 'c10', 'c11', 'c12', 'c13',
			 'd10', 'd11', 'd12', 'd13',
			 'h10', 'h11', 'h12', 'h13',
			 's10', 's11', 's12', 's13',
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
	// $(card).flip({
 //  		trigger: 'click'
	// 	});
	$(card).flip();

	if(current==null){
		current = $(card);
	}else{
		if(current.attr('data-name') != $(card).attr('data-name')){
			//Khac nhau
			setTimeout(function(){
				console.log('Khác nhau');
				// current.toggleClass('flipped');
				// $(card).toggleClass('flipped');
				$(card).flip(false);
				$(current).flip(false);
				current = null;
			}, 1000);
		}else{
			//Giong nhau
			setTimeout(function(){
				console.log('Giống nhau');
				$(card).css('opacity', '0');
				current.css('opacity', '0');
				current = null;
			},500);
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