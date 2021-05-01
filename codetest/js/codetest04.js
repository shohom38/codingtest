var a = 5;
var b = 24;

function solution(a, b) {
    var Days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let year2016 = new Date(2016, a - 1, b);
    return Days[year2016.getDay()];
    
}
console.log(solution(a, b));
document.write(solution(a, b));