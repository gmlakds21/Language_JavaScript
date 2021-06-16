document.getElementById('computeBtn').addEventListener('click', function() {
	let times = document.getElementById('times');
	let compute = document.getElementById('compute');
	let result = document.getElementById('result');
	
	let j = 2;
	let sum = 0;
	compute.textContent = "계산 / ";
	for(let i=1; i<=times.value; i++) {
		j += (i-1);
		if(i == 1) {
			sum += j;
			compute.textContent += j;
		} else if(i%2 != 0) {
			sum += j;
			compute.textContent += " + "+j;
		} else {
			sum -= j;
			compute.textContent += " - "+j
		}
	}
	result.textContent = "결과 / "+sum
})