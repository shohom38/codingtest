var arr = ['arr1', 'arr2', 'arr3', 'arr4', 'arr5', 'arr5', 'arr5', 'arr3'];

//검색 조건에 따른 배열 필터링

function filtering(query) {
    return arr.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
}

console.log(filtering('r5')); //arr5
console.log(filtering('r3')); //arr3


//배열의 구성을 두배로 재구성해 줄 수 있음.. map 을 사용해서 
var numbers = [1, 3, 5, 7, 9, ''];
var doubles = numbers.map(function(num) {
    return num * 2;
});

console.log(numbers, 'numbers');
console.log(doubles, 'doubles');