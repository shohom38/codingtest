//나누어 떨어지는 배열 숫자

//나누어 떨어지는 값이 없으면 -1 출력
//오름차순으로 정렬

//arr = [5, 9, 7, 10]
//divisor = [5]

var arr = [5, 9, 7, 10];
var divisor = 5;

var arr2 = [2, 36, 1, 3];
var divisor2 = 1;

var arr3 = [3, 2, 8];
var divisor3 = 10;

// function solution(arr, divisor) {
//     var answer = [];
//     for (var i = 0; i < arr.length; i++) {
//         if(arr[i]%divisor === 0) {
//             answer.push(arr[i]);
//         };
//         if(answer.length === 0) {
//             answer.push(-1);
//         };
//     }
//     answer.sort((a, b) => a - b);
//     return answer;
// }

//실패 연산 속도가 느린건가..




function solution(arr, divisor) {
    var answer = [];
    var correct = arr.filter((element) => element % divisor === 0).sort((a, b) => a - b);
    if(correct.length === 0) {
        return [-1];
    } else {
        return correct;
    };
    return answer;
}

document.write(solution(arr, divisor) + '<br />');
document.write(solution(arr2, divisor2) + '<br />');
document.write(solution(arr2, divisor3));
