var sell = ['hyundai', 'kia', 'chevi', 'samsung', 'bmw'];
var soldout = ['kia', 'chevi', 'samsung', 'bmw'];

function soldcar() {
    sell.sort();
    soldout.sort();
    
    for (var i=0; i < sell.length; i++){
        if(sell[i] !== soldout[i]){
            answer += sell[i]
            return answer;
        }
    }
}