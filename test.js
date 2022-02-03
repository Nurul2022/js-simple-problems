//Quiz No 08 solution

/*
var a = 2;
var b = 3;
if (a < b) {
    console.log("Hello");
}
*/

/*
function add(a, b){
  return  a + b;
}
console.log(add("adam" + "eve"));
*/

/*
var first = "Rafsan";
var second = "Samira";
console.log(first, second);
var temp = first;
first = second;
second = temp;
console.log(first, second);
*/

var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for(var i = 0; i < sentence.length; i++){
  var letter = sentence[i];
  if(letter == 'a'){
    count++;
  }
}
console.log(count)