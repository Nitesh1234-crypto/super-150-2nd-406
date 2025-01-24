// function fun(){
//     var a=10;
//     var b=20;

//     function foo(){
//         var c=60;
//         console.log(a);
//         console.log(b);
        
//     }
//     return foo;
// }
// function fun(){
//         var a=10;
//         var b=20;
    
//         function foo(){
//            a++;
//            b++;
//             console.log(a);
//             console.log(b);
            
//         }
//         return foo;
//     }
// var f=fun();
// var f1=fun();
// f(); //11,21
// f();//12,22
// f1();
// f1();

function outer(){
    var a=10;
    function inner(){
        a++;
        var b=20;
        function innermost(){
            a++;
            b++;
            console.log(a)
            console.log(b);
        }
        return innermost;
    }
    return inner;
}

let f1=outer(); //f1---->inner
let f11=f1(); //f11-----> innermost
f11();
let f12=f1();
f12();