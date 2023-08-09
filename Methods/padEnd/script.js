//declare variable text
let text="5";
//use padEnd method on variable text
text = text.padEnd(4,0);

//empty paragraph printing new value of variable text
document.getElementById("demo").innerHTML = text;
