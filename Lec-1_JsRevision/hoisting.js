// console.log(a);


// var a;
// console.log(a);
// a=10;
var a=10;
function fun(){
    console.log(a);
    var a=20;
    function foo(){
        a++;
        console.log(a);
        var a=30;
    }
    foo()
}
fun();