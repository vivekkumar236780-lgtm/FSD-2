let marks=[80,90,75,95];
//some() check whether at least one element statisified the condition
let lowmarks=marks.some(mark=>mark<40);
console.log(lowmarks);

//every()
let highmarks=marks.some(mark=>mark>=40);
console.log(highmarks);

//promise