document.getElementById('printAll').addEventListener('click', function() {
	let result = document.getElementById('result');
	
	result.innerHTML = "결과 / <br>";
	for(let dan=2; dan<=9; dan++) {
		result.innerHTML += "<br>"+dan+"단<br>";
		for(let i=1; i<=9; i++) {
			if(dan%2 == 0) {
				result.innerHTML += dan+" * "+i+" = "+(dan*i)+"<br>";
			} else {
				result.innerHTML += dan+" * "+(10-i)+" = "+(dan*(10-i))+"<br>";
			}
		}
	}
})