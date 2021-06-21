document.getElementById('computeBtn').addEventListener('click', function() {
	let name = document.getElementById('name');
	let kor = document.getElementById('kor');
	let mat = document.getElementById('mat');
	let eng = document.getElementById('eng');
	let tot;
	let avg;
	let grd;

	if(checkSungjuk(name, kor, mat, eng)) {
	
		const person = {
				name : name.value,
				kor : kor.value,
				mat : mat.value,
				eng : eng.value,
				tot : 0,
				avg : 0,
				grd : ''
		}
	
		computeSungjuk(person);
		printSungjuk(person);
	}
	
	function checkSungjuk(name, kor, mat, eng) {
		let result = "";
		if(eng.value > 100 || eng.value < 0 || eng.value == "") {
			eng.focus();
			eng.style.outline = "1px solid pink";
			result = "영어점수를 확인하여 주세요"+result;
		} else {
			eng.style.outline = 'none';
		}
		if(mat.value > 100 || mat.value < 0 || mat.value == "") {
			mat.focus();
			mat.style.outline = "1px solid pink";
			result = "수학점수를 확인하여 주세요 \n"+result;
		} else {
			mat.style.outline = 'none';
		}
		if(kor.value > 100 || kor.value < 0 || kor.value == "") {
			kor.focus();
			kor.style.outline = "1px solid pink";
			result = "국어점수를 확인하여 주세요 \n"+result;
		} else {
			kor.style.outline = 'none';
		}
		if(name.value == '' || name.value == null) {
			name.focus();
			name.style.outline = "1px solid pink";
			result = "이름을 확인하여 주세요 \n" + result;
		} else {
			name.style.outline = 'none';
		}
		
		if(result != "") {
			alert(result);
		} else {
			return true;
		}
	}
	
	function computeSungjuk(person) {
		person.tot = Number(person.kor) + Number(person.mat) + Number(person.eng);
		person.avg = person.tot/3;
		person.grd;
		switch(Math.floor(person.avg/10)) {
		case 10 :
		case 9 : person.grd = "수"; break;
		case 8 : person.grd = "우"; break;
		case 7 : person.grd = "미"; break;
		case 6 : person.grd = "양"; break;
		default : person.grd = "가";
		}
		console.log(person.tot);
	}
	
	function printSungjuk(person) {
		console.log(person.tot);
		document.getElementById('reName').value = person.name;
		document.getElementById('reKor').value = person.kor;
		document.getElementById('reMat').value = person.mat;
		document.getElementById('reEng').value = person.eng;
		document.getElementById('reTot').value = person.tot;
		document.getElementById('reAvg').value = person.avg;
		document.getElementById('reGrd').value = person.grd;
	}
})

