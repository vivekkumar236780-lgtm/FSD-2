//tdz start
let name1='vivek'
//tdz end here

//closures
function outer(){
    let counter=0;
    function inner(){
        counter++;

        console.log(counter);
    }
    return inner();
}
let i=outer();
i();
i();
i();
i();


//higher order function
function calculate(a,b,operation){
    return operation(a,b);
}
function add(x,y){
    return x+y;
}
function mul(p,q){
    return p*q;
}
console.log(calculate(10,20,add));
console.log(calculate(4,6,mul));


