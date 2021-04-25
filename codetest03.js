function solution(seoul) {
    const kim = seoul.indexOf("Kim");//indexOf를 사용해서 배열 안에 Kim이라는 문자열의 순서를 가져온다.
    var answer = '김서방은 ' + kim + "에 있다"; 
    return answer; //순서를 알려줌 ex >> "김서방은 1에 있다"
}