function increase(){
    let secret_variable =0;
    function getsecret(){
    secret_variable++;
    console.log(secret_variable)
    }
    return getsecret;
}

let g=increase();
g();
g();
