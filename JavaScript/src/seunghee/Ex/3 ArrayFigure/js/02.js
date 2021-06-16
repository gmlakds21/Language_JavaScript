document.getElementById('computeBtn').addEventListener('click', function() {
	let scale = document.getElementById('scale');
	let result = document.getElementById('result');
	
	let order = (scale.value*2)+1;
	let num = 1;
	result.innerHTML = "결과 / <br>";
	for(let i=1; i<=scale.value; i++) {
		for(let j=1; j<i; j++) {
			result.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
		}
		for(let j=i; j<=order-i+1; j++) {
			result.innerHTML += (("000" +num).slice(-3)).replace("0", " ")+" ";
			num++;
		}
		for(let j=1; j<i; j++) {
			result.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
		}
		result.innerHTML += "<br>";
	}
	
	for(let j=1; j<=scale.value; j++) {
		result.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
	}
	result.innerHTML += (("000"+num).slice(-3)).replace("0", " ")+"<br>";
	num++;
	
	for(let i=scale.value; i>=1; i--) {
		for(let j=1; j<i; j++) {
			result.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
		}
		for(let j=i; j<=order-i+1; j++) {
			result.innerHTML += (("000"+num).slice(-3)).replace("0", " ")+" ";
			num++;
		}
		for(let j=1; j<i; j++) {
			result.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
		}
		result.innerHTML += "<br>";
	}
})