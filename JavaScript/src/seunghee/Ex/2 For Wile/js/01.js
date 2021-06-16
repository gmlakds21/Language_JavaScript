document.getElementById('computeBtn').addEventListener('click', function() {
	let dan = document.getElementById('dan');
	let result = document.getElementById('result');
	
	result.innerHTML = "결과 / <br><br>"+dan.value+"단 <br>";
	let i = 1;
	while(i <= 9) {
		result.innerHTML += dan.value+" * "+i+" = "+(Number(dan.value)*i)+"<br>";
		i++;
	}
})

document.getElementById('printAll').addEventListener('click', function() {
	let result = document.getElementById('result');
	
	
	result.innerHTML = "결과 / <br><br>";
	let dan = 2;
	while(dan <= 9) {
		result.innerHTML += dan+"단<br>";
		let i = 1;
		while(i <= 9) {
			result.innerHTML += dan+" * "+i+" = "+(dan*i)+"<br>";
			i++;
		}
		result.innerHTML += "<br>";
		dan++;
	}
})