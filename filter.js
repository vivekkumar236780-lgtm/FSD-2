//filter
let number=[1,2,3,4,5];
let even=number.filter(number=>{
    return number%2===0;
});
console.log(even);

//reduce()
//reduce all element of array in single value
let nums=[1,2,3,4,5];
let total=nums.reduce((sum,nums)=>{
    return sum+nums;
},0);
console.log(total);

let num=[1,2,3,4,5,6];
let max=num.reduce((max,num)=>{
    return max > num ? max : num;

},num[0]);
console.log(max);

//find
let students=[
   {id:1,name:"vivek",age:20,marks:91}
];
let student=students.find(s=>s.id===2);
console.log(student);

