document.getElementById('computeBtn').addEventListener('click', function() {
	let shape = document.getElementById('shape');
	let scale = document.getElementById('scale');
	let result = document.getElementById('result');
	
	let num = 1;
	result.innerHTML = "결과 / <br>";
	
	if(shape.value == 1) {		
		for(let i=1; i<=scale.value; i++) {
			for(let j=1; j<=scale.value-i+1; j++) {
				result.innerHTML += (("000"+num).slice(-3)).replace("0", " ");
				num++;
			}
			result.innerHTML += "<br>";
		}
	} else if(shape.value == 2) {
		for(let i=1; i<=scale.value; i++) {
			for(let j=1; j<i; j++) {
				result.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
			}
			for(let j=i; j<=scale.value; j++) {
				result.innerHTML += (("000"+num).slice(-3)).replace("0", " ");
				num++;
			}
			result.innerHTML += "<br>";
		}
	} else if(shape.value == 3) {
		for(let i=1; i<=scale.value; i++) {
			for(let j=1; j<=i; j++) {
				result.innerHTML += (("000"+num).slice(-3)).replace("0", " ");
				num++;
			}
			result.innerHTML += "<br>";
		}
	} else if(shape.value == 4) {
		for(let i=1; i<=scale.value; i++) {
			for(let j=1; j<scale.value-i+1; j++) {
				result.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
			}
			for(let j=1; j<=i; j++) {
				result.innerHTML += (("000"+num).slice(-3)).replace("0", " ");
				num++;
			}
			result.innerHTML += "<br>";
		}
	}
})