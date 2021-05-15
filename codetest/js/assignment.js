const ddd = [10, 100, 1000, 40];
const ddd2 = [15, 543, 1324, 45];
console.log(ddd, 'ddd');

document.write(ddd + '<br />');

function solution(ddd) {
    answer = ddd.map(elem => elem + '').sort((a, b) => (b + a) - (a + b)).join('');
    return answer[0] === '0'?'0': answer;
}

document.write(solution(ddd) + '<br />');
document.write(solution(ddd2));