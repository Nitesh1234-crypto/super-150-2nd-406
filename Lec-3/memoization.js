
function calculate(){
let arr =[];

return function multi5(a){
    console.log(arr)
    if(arr[a]!=undefined){
        return arr[a];
    }else{
    let res=a*5;
    arr[a]=res;
    console.log(arr);
    return res;
    }
   
 }
}
// arr[4] =36;
let multi5=calculate();
console.log(multi5(4))
console.log(multi5(5))
console.log(multi5(4))