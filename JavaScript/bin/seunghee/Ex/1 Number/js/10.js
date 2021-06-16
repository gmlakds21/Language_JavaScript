document.getElementById('computeBtn').addEventListener('click', function() {
	let times = document.getElementById('times');
	let compute = document.getElementById('compute');
	let result = document.getElementById('result');
	
	let j = 1;
	let sum = 0;
	compute.textContent = "계산 / ";
	for(let i=1; i<=times.value; i++) {
		j *= i;
		sum += j;
		compute.textContent += i+"!";
		if(i != times.value) {
			compute.textContent += " + ";
		}
	}
	result.textContent = "결과 / "+sum;
})