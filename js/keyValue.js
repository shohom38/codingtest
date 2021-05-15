var pention = {
    'gyunggi' : ['gapyung', 'gimpo', 'paju', 'ansan', 'hwasung'],
    'gangwon' : ['gangreung', 'sokcho', 'wonju', 'injae'],
    'incheon' : ['ganghwa', 'songdo', 'bullo', 'namdong'],
    'seoul' : ['gnagseo', 'gangbuk', 'gangdong', 'gangnam']
};

console.log(pention.gyunggi[0]);

// console.log(Object.keys(pention));

var pentionKeys = Object.keys(pention);
var pentionslist = pentionKeys[''];
console.log(pentionKeys);

var values = pention['gyunggi'];

// var pentions = function pentionlist(elem) {
//     for (var i = 0; i < pentionslist.length; i++) {
//         document.getElementById
//     }
// }

console.log(values);

var gyunggiList = pention.gyunggi;

const pentionList = [pention.gyunggi, pention.gangwon, pention.incheon, pention.seoul];

// var pentionList1 = document.getElementById('listWrap').innerHTML = '<li>' + '<a href=#>' + gyunggiList[i] + '</a>' + '</li>';

pentionList.forEach(myFunction);

function myFunction(elem) {
    document.getElementById('listWrap').innerHTML += '<ul>' + elem + '</ul>';
}