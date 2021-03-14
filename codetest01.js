// 같은 숫자는 싫어 문제
/*제한 사항
    배열 arr의 크기 : 1,000,000 이하의 자연수
    배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수*/

    
// 이럴 때 나올 answer 배열의 기대값은 [8,7,0,2,4,5,1]이면 어떻게 만들어야 할까.....
var arr = [8,8,8,7,0,2,2,4,5,1,1,4]
function sloution(arr) {
    var answer = []; //답이 들어가야 되는 부분
    //for문 사용해서?
    for(var i = 0; i <= arr.length; i++) {
        //만약 arr배열의 0번째인 8이라는 숫자가 출력되고 1번째와 2번째의 원소 8이 같은 숫자일 시
        //출력이 되면 안되는데 그러려면 i의 +1 될 때 같지 않으면 answer 배열에 push 시켜주면 되나?
        if(arr[i] != arr[i+1]) {
            answer.push(arr[i]);
        }
    } 
    console.log('Hello Javascript');

    return answer;
}
// 실행 하면 출력값 Hello Javascript이 나옴
