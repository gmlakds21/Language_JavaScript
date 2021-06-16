document.getElementById('computeBtn').addEventListener('click', function() {
	let times = document.getElementById('times');
	let compute = document.getElementById('compute');
	let result = document.getElementById('result');
	
	let sum = 0;
	compute.textContent = "계산 / ";
	for(let i=1; i<times.value; i++) {
		sum += i*(Number(times.value)-i);
		compute.textContent += i+"*"+(Number(times.value)-i);
		if(i != times.value -1) {
			compute.textContent += " + ";
		}
	}
	result.textContent = "결과 / "+sum;
})