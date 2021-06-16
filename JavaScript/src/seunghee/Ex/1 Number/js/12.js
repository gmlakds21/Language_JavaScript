document.getElementById('computeBtn').addEventListener('click', function() {
	let times = document.getElementById('times');
	let comptue = document.getElementById('compute');
	let result = document.getElementById('result');
	
	let sum = 0;
	compute.textContent = "계산 / ";
	for(let i=1; i<=times.value; i++) {
		if(i == 1) {
			sum += i;
			compute.textContent += i;
		} else if(i % 2 != 0) {
			sum += i;
			compute.textContent += " + "+i;
		} else {
			sum -= i;
			compute.textContent += " - "+i;
		}
	}
	result.textContent = "결과 / "+sum
})
