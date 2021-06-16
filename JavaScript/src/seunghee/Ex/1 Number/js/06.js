document.getElementById('computeBtn').addEventListener('click', function() {
	let num = document.getElementById('num');
	let times = document.getElementById('times');
	let compute = document.getElementById('compute');
	let result = document.getElementById('result');
	let num2 = Number(num.value);
	
	let sum = 0;
	compute.textContent = '계산 / ';
	for(let i=1; i<=times.value; i++) {
		sum += num2;
		compute.textContent += num2;
		num2 += + i;
		
		if(i != times.value) {
			compute.textContent += " + ";
		}
		
	}
	result.textContent = "결과 / "+sum;
})
