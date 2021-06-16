document.getElementById('computeBtn').addEventListener('click', function() {	
	let num  = document.getElementById('num');
	let times = document.getElementById('times');
	let compute = document.getElementById('compute');
	let result = document.getElementById('result');

	let sum = 0;
	compute.textContent = '계산 / ';
	for(let i=0; i<times.value; i++) {
		sum += Number(num.value);
		compute.textContent += num.value
		if(i != times.value -1) {
			compute.textContent += " + ";
		}
	}
	result.textContent = "결과 / "+sum;
})


