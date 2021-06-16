document.getElementById('computeBtn').addEventListener('click', function() {
	let name = document.getElementById('name');
	let kor = document.getElementById('kor');
	let mat = document.getElementById('mat');
	let eng = document.getElementById('eng');
	
	if(kor.value > 100 || kor.value < 0) {
		alert("수학 점수를 확인해주세요.");
	}
	
	
	
	let tot = Number(kor.value) + Number(mat.value) + Number(eng.value);
	let avg = tot/3;
	let grd;
	
	switch(avg/10) {
		case 10 :
		case 9 : grd = "수"; break;
		case 8 : grd = "우"; break;
		case 7 : grd = "미"; break;
		case 6 : grd = "양"; break;
		default : grd = "가";
	}
	
	document.getElementById('reName').value = name.value;
	document.getElementById('reKor').value = kor.value;
	document.getElementById('reMat').value = mat.value;
	document.getElementById('reEng').value = eng.value;
	document.getElementById('reTot').value = tot.value;
	document.getElementById('reAvg').value = avg.value;
	document.getElementById('reGrd').value = grd.value;
})