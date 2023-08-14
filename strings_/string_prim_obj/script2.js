const s1 = "2+2"; // create a string primitive
const s2 = new String("2+2");// creates a string object
console.log(eval(s1));
console.log(eval(s2));

console.log(eval(s2.valueOf()));