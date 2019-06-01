var array1 = ['a', 'b', 'c', 'A', 'B', 'C'];
var array2 = ['a', 'A', 'b', 'B', 'c', 'C'];
// var array2 = ['d', 'e', 'f'];
var result = false;
// array1.forEach(function(element, index, arr) {
    // console.log(element);
    // result = element === array1[index];
    // if (result === false) throw Error('sdkjhfskjhf');
    // arr.length = 2;
//     array1.reverse();
//
//     arr.forEach(function (it) {
//         console.log(it);
//     });
//     console.log('========================');
// });
array1.sort(function (a,b) {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    return 0;
});
array1.forEach(function (it, index) {
    console.log(it);
    result = it === array2[index];
    if (result === false) throw Error('asdfsdfsdf')
    });