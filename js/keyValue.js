var pention = {
    'gyunggi' : ['gapyung', 'gimpo', 'paju', 'ansan', 'hwasung'],
    'gangwon' : ['gangreung', 'sokcho', 'wonju', 'injae'],
    'incheon' : ['ganghwa', 'songdo', 'bullo', 'namdong'],
    'seoul' : ['gnagseo', 'gangbuk', 'gangdong', 'gangnam']
};

console.log(pention.gyunggi[0]);

var gyunggiList = pention.gyunggi;

// var pentionList1 = document.getElementById('listWrap').innerHTML = '<li>' + '<a href=#>' + gyunggiList[i] + '</a>' + '</li>';

gyunggiList.forEach(myFunction);

function myFunction(elem) {
    document.getElementById('listWrap').innerHTML += '<li>' + '<a href="#">' + elem + '</a>' + '</li>';
}