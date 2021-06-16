document.getElementById('computeBtn').addEventListener('click', function() {
	let times = document.getElementById('times');
	let compute = document.getElementById('compute');
	let result = document.getElementById('result');
	
	let sum = 0;
	let a = 1;
	let b = 0;
	let c = 0;
	compute.textContent = '계산 / ';
	for(let i=0; i<times.value; i++) {
		sum += a;
		compute.textContent += a;
		c = a;
		a += b;
		b = c;
		if(i != times.value -1) {
			compute.textContent += " + ";
		}
	}
	result.textContent = "결과 / "+sum;
})