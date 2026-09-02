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

let g=4,h=0;
  while(g>=0){
    g--;
    h++;
    if(g==h)
        continue;
    else
        console.log(g,h);
}

//objects
const sym=Symbol('id');
const person=new Object;
  person[sym]=123;
  person.name='JS';
  console.log(person);

 //objects are mutable
  let p={
    name:'A',
  };
  p={age:25};
  p.dept="CSE"
  console.log(p);

  //object methods
  const Person={
    name:'ABC',
  };
  Person.greet=function(){
    console.log('Hello'+this.name);
  }
  Person.greet();

  const per={
    name:'vivek',
    age:20,
    laptop:{
        cpu:'i7',
        ram:'8GB',
        brand:'HP',
    }
  };
  console.log(per);

  //accessing methods
  //data notation
  per.laptop.cpu;
  per['laptop']['cpu'];
  console.log(per.laptop.cpu.length);

  //merging of object
  const p1={
    a:1,
    b:2
  };
  const p2={
    b:3,
    d:4
  };
   //assign operator to merge
  let res=Object.assign( {},p1,p2);
  console.log(res);
  //spread operator to merge
  let r1={...p1,...p2};
  console.log(r1);

  //shallow vs deep capy

  const P1={
    name:'Ankit',
    laptop : {
        cpu:'I5',
        ram:'8GB'
    }
  };
  const P2= structuredClone(P1);  //deep capy
  P2.laptop.cpu='I7';
  console.log(P1);
  console.log(P2);
  const P3=JSON.parse(JSON.stringify(P1)); //deep capy
  P3.laptop.ram='16GB';
  console.log(P3);