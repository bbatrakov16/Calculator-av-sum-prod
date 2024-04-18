// Calculator

// Event Listener
var btnCalc = document.getElementById("calc-btn"); // btnCalc was created

btnCalc.addEventListener("click", calcAllOptions);

// Event Function
function calcAllOptions() {
  // Input
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let num3 = +document.getElementById("num3").value;

  // Process
  // Avarage value
  let avarage = (num1 + num2 + num3) / 3;
  avarage = avarage.toFixed(1);

  // Sum of 3 numbers
  let sum = num1 + num2 + num3;

  // Product of 3 numbers
  let product = num1 * num2 * num3;

  // Remainder of num1 when devided by num2
  let remainder = num1 % num2;

  // Num1 to power of num2
  let power = num1 ** num2;

  // Round of the num1 to 2 d. p.
  let round = num1.toFixed(2);

  // Tangent of num3
  let tangent = Math.tan(num3);

  // Random between num1 and num2
  let random = Math.random();
  random = random * (num2 - num1);
  random = random + num1;
  random = random.toFixed(1);

  // Output
  document.getElementById("ave-out").innerHTML = avarage;
  document.getElementById("sum-out").innerHTML = sum;
  document.getElementById("prod-out").innerHTML = product;
  document.getElementById("rem-out").innerHTML = remainder;
  document.getElementById("pow-out").innerHTML = power;
  document.getElementById("round-out").innerHTML = round;
  document.getElementById("tan-out").innerHTML = tangent;
  document.getElementById("rand-out").innerHTML = random;
}

// Sum of 3 numbers
