//연도 더하기 뺴기

let date = new Date();//현재 일자
console.log(date);

document.write('지금 당장 일자: ' + date + '<br/>');

date.setFullYear(date.getFullYear() +1);//일년 후 일자
document.write('1년 후: ' + date + '<br/>');

date = new Date(2016, 1, 1);
date.setFullYear(date.getFullYear() -1);
document.write('6년 전: ' + date + '<br/>');//2015년도 일자 

//출력 순서 요일/월/년/시간

let dateMonth = new Date(2021, 0, 1);
document.write('기준일자 :' + dateMonth + '<br/>');

dateMonth.setMonth(dateMonth.getMonth() +1);
document.write('1달 후: ' + dateMonth + '<br/>');//한달 후 일자

dateMonth.setMonth(dateMonth.getMonth() -3);
document.write('3달 전: ' + dateMonth + '<br/>');//세달 전 일자