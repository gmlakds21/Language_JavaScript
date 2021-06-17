document.getElementById('computeBtn').addEventListener('click', function() {
	let name = document.getElementById('name');
	let kor = document.getElementById('kor');
	let mat = document.getElementById('mat');
	let eng = document.getElementById('eng');
	
	// 값 확인
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
		alert(result)
	} else {
		// 계산 부분
		let tot = Number(kor.value) + Number(mat.value) + Number(eng.value);
		let avg = tot/3;
		let grd;
		switch(Math.floor(avg/10)) {
			case 10 :
			case 9 : grd = "수"; break;
			case 8 : grd = "우"; break;
			case 7 : grd = "미"; break;
			case 6 : grd = "양"; break;
			default : grd = "가";
		}
		
		// 출력 부분
		document.getElementById('reName').value = name.value;
		document.getElementById('reKor').value = kor.value;
		document.getElementById('reMat').value = mat.value;
		document.getElementById('reEng').value = eng.value;
		document.getElementById('reTot').value = tot;
		document.getElementById('reAvg').value = avg.toFixed(2);
		document.getElementById('reGrd').value = grd;
	}
})