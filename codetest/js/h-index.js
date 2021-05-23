var citations = [3, 0, 6, 1, 5];
var citations2 = [5, 6, 4, 3, 2, 10];

function solution(citations) {
    citations.sort((a, b) => b - a); // 내림차순 정렬 후 [6, 5, 3, 1, 0] 으로 만든다
    console.log(citations)
    for(var i = 0; i + 1 <= citations[i]; i++){}; // i가 0일 때 i + 1 = 2 는 citations의 0번째 인덱스인 6보다 작음 그리고 이렇게 해서 n번 이상 인용된 논문이 n회보다 같거나 큰 경우를 리턴한다.
    return i; 
}

console.log(solution(citations));
console.log(solution(citations2));

document.write(solution(citations) + '<br/>')
document.write(solution(citations2));