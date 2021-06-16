document.getElementById('computeBtn').addEventListener('click', function() {
	let order = document.getElementById('order');
	let result = document.getElementById('result');
	
	let num = 1;
	result.innerHTML = "결과 / <br>";
	for(let num=1; num<=Math.pow(order.value, 2); num++) {
		result.innerHTML += (("0000"+num).slice(-5)).replace("0", " ");
		if(num % order.value == 0) {
			result.innerHTML += "<br>";
		}
	}
})