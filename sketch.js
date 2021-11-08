function setup() {
  createCanvas(400, 400);
  
  var num1=random(0,100);
  var num2=random(0,100);
  
  result = num1 + num2;
  console.log("The sum of two random numbers is:"+ result);
  
  
}

function draw() {
  background(220);

}
