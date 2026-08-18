
let year=1200;
if(year%100!=0){
    if(year%4==0)
     {
       console.log("Leap Year");
      }

}
  else if(year%400==0)
  {
    console.log("Leap Year");
  }
  
else{
     console.log("not a Leap Year");
}
 //logical opeartor

let y=1100;
if(( y%100==0 && y%400==0  || y%100!=0 && y%4==0 ))
{
    console.log("Leap year");
}
else{
    console.log("not a leap year");
}

//switch case for calculator

let a=12;
let b=3;
let choice=2;
switch(choice){
    case 1:
        console.log(a+b);
        break;
    case 2:
        console.log(a-b);
        break;
    case 3:
        console.log(a*b);
        break;
    default:
        console.log("default");

}

//loops
let i=0;
for( ; ;i=i+2) //different as compare to c++ here condition is optional
{
    if(i>10)
        break;
    console.log(i);
}




