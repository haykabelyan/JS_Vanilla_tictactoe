window.onload = function(){


	for(var i=0; i<9; i++){
		document.getElementById('game').innerHTML += "<div class='block'></div>";
	}

	var qail = 0;

	document.getElementById('game').onclick = function(event){

			if(event.target.className == 'block'){
			
			if(qail % 2 == 0){
				event.target.innerHTML = 'X';
			}else{
				event.target.innerHTML = '0';
			}

			qail++;
			
			checkWinner();
			//calculateWinner();
			//setTimeout(checkWinner, 20);
			
		}
		

	}


	function checkWinner(){
		var array = document.querySelectorAll(".block");
		if(array[0].innerHTML == 'X' && array[1].innerHTML == 'X' && array[2].innerHTML == 'X') alert('viva X');
		if(array[3].innerHTML == 'X' && array[4].innerHTML == 'X' && array[5].innerHTML == 'X') alert('viva X');
		if(array[6].innerHTML == 'X' && array[7].innerHTML == 'X' && array[8].innerHTML == 'X') alert('viva X');
		if(array[0].innerHTML == 'X' && array[3].innerHTML == 'X' && array[6].innerHTML == 'X') alert('viva X');
		if(array[1].innerHTML == 'X' && array[4].innerHTML == 'X' && array[7].innerHTML == 'X') alert('viva X');
		if(array[2].innerHTML == 'X' && array[5].innerHTML == 'X' && array[8].innerHTML == 'X') alert('viva X');
		if(array[0].innerHTML == 'X' && array[4].innerHTML == 'X' && array[8].innerHTML == 'X') alert('viva X');
		if(array[2].innerHTML == 'X' && array[4].innerHTML == 'X' && array[6].innerHTML == 'X') alert('viva X');


		
	}


	function calculateWinner() {
		var array = document.querySelectorAll(".block");
	  var lines = [
	    [0, 1, 2],
	    [3, 4, 5],
	    [6, 7, 8],
	    [0, 3, 6],
	    [1, 4, 7],
	    [2, 5, 8],
	    [0, 4, 8],
	    [2, 4, 6],
	  ];
	  for (var i = 0; i < lines.length; i++) {
	    var a = lines[i][0];
		var b = lines[i][1];
  		var c = lines[i][2];
	  if(array[a].innerHTML == 'X' && array[b].innerHTML == 'X' && array[c].innerHTML == 'X') alert('viva X');
	  if(array[a].innerHTML == '0' && array[b].innerHTML == '0' && array[c].innerHTML == '0') alert('viva 0');
	  }
	 
	}


}