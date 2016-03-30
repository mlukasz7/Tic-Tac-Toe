var pozycje = ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'];
var kto = 0;
var pictureName = ['kolko', 'krzyzyk'];
var toEnd = 9;

window.onload = start;

function start ()
{
	var board = document.getElementById('plansza');
	for(var i=1; i<10; i++) {
		board.innerHTML += '<div class="board" id="b'+i+'"><img src="pusty.png" alt="" id="o'+i+'" onclick="action('+i+')" /></div> ';
		if(i%3==0) {
			board.innerHTML += '<div style="clear: both();"></div>';
		}
	}
}

function action(position)
{
	var card = document.getElementById('b' + position);
	var card0 = document.getElementById('b0');
	var who = document.getElementById('who');
	// kolko
	if(kto == 0)
	{
		card.style.cursor = "default";
		card.innerHTML = '<img src="' + pictureName[kto] + '.png" alt="" id="o'+position+'" >';
		pozycje[position-1] = 'o';
		(kto==0)?kto=1:kto=0;
		//document.getElementById('bo').innerHTML = '<img src="'+pictureName[kto]+'.png" alt="" id="o0" >';
		card0.innerHTML = '<img src="krzyzyk.png" alt="" id="o0">';
		who.innerHTML = 'Krzyżyk';
		who.className = 'krzyzyk';
	}
	// krzyzyk
	else if (kto == 1)
	{
	
		card.style.cursor = "default";
		card.innerHTML = '<img src="' + pictureName[kto] + '.png" alt="" id="o'+position+'" >';
		pozycje[position-1] = 'x';
		(kto==0)?kto=1:kto=0;
		//document.getElementById('bo').innerHTML = '<img src="'+pictureName[kto]+'.png" alt="" id="o0" >';
		card0.innerHTML = '<img src="kolko.png" alt="" id="o0">';
		who.innerHTML = 'Kółko';
		who.className = 'kolko';
	} 
	toEnd--;
	if(toEnd < 1)
	{
		card0.innerHTML = '<img src="pusty.png" alt="" id="o0">';
		who.style.color = 'white';
		who.innerHTML = 'REMIS :|';
		kto = -1;
		document.getElementById('info').innerHTML = '';
	}

	if(ifWin())
	{
		card0.style.display = 'none';
		who.style.display = 'none';
		var message = document.getElementById('info');
		(kto===0)?kto=1:kto=0;
		message.innerHTML = '<br />Gratukacje :)<br /> <div class="'+pictureName[kto]+'">Wygrałeś</div>';
		message.className = 'win';
		kto = -1; //zablokowanie gry
		for (var i = 1; i < 10; i++)
		{
			document.getElementById('b' + i).style.cursor = 'default';
		}
	}
}


function ifWin ()
{
	if ( (pozycje[0] == pozycje[1]) && (pozycje[1] == pozycje[2]) && (pozycje[2] == 'o') ||
		 (pozycje[0] == pozycje[1]) && (pozycje[1] == pozycje[2]) && (pozycje[2] == 'x') ||
		 (pozycje[3] == pozycje[4]) && (pozycje[4] == pozycje[5]) && (pozycje[5] == 'o') ||
		 (pozycje[3] == pozycje[4]) && (pozycje[4] == pozycje[5]) && (pozycje[5] == 'x') ||
		 (pozycje[6] == pozycje[7]) && (pozycje[7] == pozycje[8]) && (pozycje[8] == 'o') ||
		 (pozycje[6] == pozycje[7]) && (pozycje[7] == pozycje[8]) && (pozycje[8] == 'x') ||

		 (pozycje[0] == pozycje[3]) && (pozycje[3] == pozycje[6]) && (pozycje[6] == 'o') ||
		 (pozycje[0] == pozycje[3]) && (pozycje[3] == pozycje[6]) && (pozycje[6] == 'x') ||
		 (pozycje[1] == pozycje[4]) && (pozycje[4] == pozycje[7]) && (pozycje[7] == 'o') ||
		 (pozycje[1] == pozycje[4]) && (pozycje[4] == pozycje[7]) && (pozycje[7] == 'x') ||
		 (pozycje[2] == pozycje[5]) && (pozycje[5] == pozycje[8]) && (pozycje[8] == 'o') ||
		 (pozycje[2] == pozycje[5]) && (pozycje[5] == pozycje[8]) && (pozycje[8] == 'x') ||

		 (pozycje[0] == pozycje[4]) && (pozycje[4] == pozycje[8]) && (pozycje[8] == 'o') ||
		 (pozycje[0] == pozycje[4]) && (pozycje[4] == pozycje[8]) && (pozycje[8] == 'x') ||
		 (pozycje[6] == pozycje[4]) && (pozycje[4] == pozycje[2]) && (pozycje[2] == 'o') ||
		 (pozycje[6] == pozycje[4]) && (pozycje[4] == pozycje[2]) && (pozycje[2] == 'x') )
		return true;
	else
		return false;
}