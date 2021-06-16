document.getElementById('computeBtn').addEventListener('click', function() {
	let dayName = document.getElementById('day');
	let result = document.getElementById('result');
	
	let day;
	result.innerHTML = "결과 / <br> 일 월 화 수 목 금 토<br>";
	switch(dayName.value) {
		case "일" : day = 0; break;
		case "월" : day = 1; break;
		case "화" : day = 2; break;
		case "수" : day = 3; break;
		case "목" : day = 4; break;
		case "금" : day = 5; break;
		case "토" : day = 6; break;
	}
	
	for(let i=1-day; i<=31; i++) {
		if(i <= 0) {
			result.innerHTML += "&nbsp;&nbsp;&nbsp;";
		} else {
			result.innerHTML += (("__"+i).slice(-2)).replace("_", " ")+" ";
		}
		
		if((i+day)%7 == 0) {
			result.innerHTML += "<br>";
		}
	}
})
