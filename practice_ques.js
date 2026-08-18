//sum  of 5 digits number
let n=25637;
let sum=0;
while(n>0){
    sum+=n%10;
    n=Math.floor(n/10);
}
console.log(sum);

//fibonacii
function fibonacii(x){
    let fib=[0,1];
    for(let i=2;i<x;i++){
        fib[i]=fib[i-1]+fib[i-2];
    }
    return fib;

}
console.log(fibonacii(8));

//prime number
let u,i,j,v;
     u=13;
    for(i=2;i<=u;i++)  // finding prime number from 2 to u
    {
        v=0;
        for(j=2;j<i;j++)
        {
            if(i%j==0) 
            {
                v++;
                break;
            }
        }
        if(v==0)
        {
            console.log(i);
        }
    }
    
//important
let s=0;
for(let i=0;i<=9;i++,s+=i);
console.log(s);

//tribonacii
function tribonacii(y){
   let trib=[1,2,4];
   for(let i=3;i<y;i++)
   {
     trib[i]=trib[i-1]+trib[i-2]+trib[i-3];
   }
   return trib;
}
console.log(tribonacii(9));

