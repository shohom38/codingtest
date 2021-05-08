//map 메소드
//배열.map((요소, 인덱스, 배열) => {return 요소});
//map의 기본 원리
// 반복문을 순회 > 배열 안의 요소를 1대 1로 짝지어주는 것
const number = [1, 2, 3, 4];
let result = number.map((t) => {
    console.log(t);
    return t + 2;
});
console.log(result); // 3, 4, 5, 6
document.write(result + '<br />');

//reduce 메소드
//배열.reduce((누적값, 현재값, 인덱스, 요소) => {return 결과}, 초기값);
//이전값 x 누적값 o --> 활용도가 높음

//덧셈
let result2 = number.reduce((acc, cur, i) => {
    console.log(acc, cur, i);
    return acc + cur;
}, 100);//초기값을 정해주지 않으면 자동으로 초기값이 0인 인덱스의 값이 됨
console.log(result2);
document.write(result2 + '<br />');

//초기값 x 
let result3 = number.reduce((acc, cur, i) => {
    console.log(acc, cur, i);
    return acc + cur;
}, 0);
console.log(result3);
document.write(result3);
