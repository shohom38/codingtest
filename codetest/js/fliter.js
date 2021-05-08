(function test() {
    var testArray = [3, 5, 2, 8, 7];
    function getThreeUpper(value) {
        return value>=3;
    }
    var newArray = testArray.filter(getThreeUpper);
    console.log(newArray);
})();
