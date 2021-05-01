//평균값 구하기
//전체 수 나누기 해당 배열 값의 덧셈


var arr = [1, 2, 3, 4];
var arr2 = [5, 5];
var arr3 = [12, 4, 23, 7, 9];

function solution(arr) {
    var answer = 0;
    for (i=0; i < arr.length; i++) {
        answer += arr[i];
    }
    return answer/arr.length; //배열의 개수 나누기 arr배열의 값 = 평균값
}

console.log(solution(arr));
console.log(solution(arr2));
console.log(solution(arr3));

document.write(solution(arr) + '<br/>');
document.write(solution(arr2) + '<br/>');
document.write(solution(arr3) + '<br/>');

//다른 사람 풀이

function solution2(arr) {
    return arr.reduce((acc, cur) => acc + cur) / arr.length;
}

document.write(solution2(arr) + '<br/>');
