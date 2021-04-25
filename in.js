// var sell = ['hyundai', 'kia', 'chevi', 'samsung', 'bmw'];
// var soldout = ['kia', 'chevi', 'samsung', 'bmw'];

// function soldcar() {
//     sell.sort();
//     soldout.sort();
    
//     for (var i=0; i < sell.length; i++){
//         if(sell[i] !== soldout[i]){
//             answer += sell[i]
//             return answer;
//         }
//     }
// }

var participant = ['leo', 'kiki', 'eden'];
var completion = ['eden', 'kiki'];

function solution(participant, completion) {
    var answer = '';
    participant.sort(); //sort를 사용해서 배열을 정렬해주고,
    completion.sort();
    
    for(let i=0; i < participant.length; i++) {
        if (participant[i] !== completion[i]){ //정렬된 배열의 순서 값이 같지 않을 때,
            answer += participant[i] //answer에 participant의 값이 더해져서 리턴된다.
            return answer;
        }
    }
}