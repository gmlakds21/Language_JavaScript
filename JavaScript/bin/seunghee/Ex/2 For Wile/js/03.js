document.getElementById('computeBtn').addEventListener('click', function() {
	let years = document.getElementById('years');
	let result = document.getElementById('result');
	
	result.innerHTML = "결과 / ";
	if( ((years.value % 100 != 0) && (years.value % 4 == 0)) || (years.value % 400 == 0) ) {
		result.innerHTML += years.value+"년은 윤년입니다.";
	} else {
		result.innerHTML += years.value+"년은 윤년이 아닙니다.";
	}
})
