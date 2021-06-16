document.getElementById('computeBtn').addEventListener('click', function() {
	let start = document.getElementById('start');
	let end = document.getElementById('end');
	let compute = document.getElementById('compute');
	let result = document.getElementById('result');
	
	if(start.value > end.value) {
		alert('시작 숫자는 끝 숫자보다 낮아야 합니다.')
	} else {
		let sum=0;
		compute.textContent = '계산 / ';		
		for(let i=start.value; i<=end.value; i++) {
			sum += 1/i;
			compute.textContent += "1/"+i;
			if(i != end.value) {
				compute.textContent += " + ";
			}
		}
		result.textContent = "결과 / "+sum;
	}
})