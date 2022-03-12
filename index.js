let leftOperand = document.querySelector("#left-operand");
let rightOperand = document.querySelector("#right-operand");
let sign = document.querySelector("#sign");
let numberOfButtons = document.querySelectorAll(".key").length;
let Buttons = document.querySelectorAll(".key");
let leftOperandValue;
let rightOperandValue;

for (let a = 0; a < numberOfButtons; a++) {
	Buttons[a].addEventListener("click", () => {
		let buttonCase = Buttons[a].textContent;
		switch (buttonCase) {
			// functions
			case "AC":
			leftOperand.textContent = "";
			rightOperand.textContent = "";
			break;
			case "Del":
			del();
			break;
			case "^":
				sign.textContent = "^";
				if (rightOperand.textContent == "" && !leftOperand == "") {
					leftOperand.innerHTML += rightOperand.textContent + "<span id=\"sign\">" + sign.textContent + "</span>";
				} else {
					leftOperand.innerHTML = rightOperand.textContent + "<span id=\"sign\">" + sign.textContent + "</span>";
					rightOperand.textContent = "";
				}
			break;
			case "/":
				sign.textContent = "/";
				if (rightOperand.textContent == "" && !leftOperand == "") {
					leftOperand.innerHTML += rightOperand.textContent + "<span id=\"sign\">" + sign.textContent + "</span>";
				} else {
					leftOperand.innerHTML = rightOperand.textContent + "<span id=\"sign\">" + sign.textContent + "</span>";
					rightOperand.textContent = "";
				}		
			break;
			case "*":
				sign.textContent = "*";
				if (rightOperand.textContent == "" && !leftOperand == "") {
					leftOperand.innerHTML += rightOperand.textContent + "<span id=\"sign\">" + sign.textContent + "</span>";
				} else {
					leftOperand.innerHTML = rightOperand.textContent + "<span id=\"sign\">" + sign.textContent + "</span>";
					rightOperand.textContent = "";
				}		
			break;
			case "-":
				sign.textContent = "-";
				if (rightOperand.textContent == "" && !leftOperand == "") {
					leftOperand.innerHTML += rightOperand.textContent + "<span id=\"sign\">" + sign.textContent + "</span>";
				} else {
					leftOperand.innerHTML = rightOperand.textContent + "<span id=\"sign\">" + sign.textContent + "</span>";
					rightOperand.textContent = "";
				}				
			break;
			case "+":
				sign.textContent = "+";
				if (rightOperand.textContent == "" && !leftOperand == "") {
					leftOperand.innerHTML += rightOperand.textContent + "<span id=\"sign\">" + sign.textContent + "</span>";
				} else {
					leftOperand.innerHTML = rightOperand.textContent + "<span id=\"sign\">" + sign.textContent + "</span>";
					rightOperand.textContent = "";
				}	
			break;
			case "=":
				let operation;
				leftOperandValue = leftOperand.textContent.slice(0, leftOperand.textContent.length-1);
				rightOperandValue = rightOperand.textContent;
				switch (sign.textContent) {
					case "^":
						operation = pow;
						leftOperand.innerHTML = calculate(leftOperandValue, rightOperandValue,operation) 
						rightOperand.textContent = "";					
					break;
					case "/":
						operation = divide;
						leftOperand.innerHTML = calculate(leftOperandValue, rightOperandValue,operation);
						rightOperand.textContent = "";
					break;
					case "*":
						operation = multiply;
						leftOperand.innerHTML = calculate(leftOperandValue, rightOperandValue,operation);
						rightOperand.textContent = "";
					break;
					case "-":
						operation = subtract;
						leftOperand.innerHTML = calculate(leftOperandValue, rightOperandValue,operation);
						rightOperand.textContent = "";
					break;
					case "+":
						operation = add;
						leftOperand.innerHTML = calculate(leftOperandValue, rightOperandValue,operation);
						rightOperand.textContent = "";
					break;
					default:
						break;
				}
			break;

			// inputs
			case "0":
				if (rightOperand.textContent.length < 10) {rightOperand.textContent += "0";}
			break;
			case "1":
				if (rightOperand.textContent.length < 10) {rightOperand.textContent += "1";}
			break;
			case "2":
				if (rightOperand.textContent.length < 10) {rightOperand.textContent += "2";}
			break;
			case "3":
				if (rightOperand.textContent.length < 10) {rightOperand.textContent += "3";}
			break;
			case "4":
				if (rightOperand.textContent.length < 10) {rightOperand.textContent += "4";}
			break;
			case "5":
				if (rightOperand.textContent.length < 10) {rightOperand.textContent += "5";}
			break;
			case "6":
				if (rightOperand.textContent.length < 10) {rightOperand.textContent += "6";}
			break;
			case "7":
				if (rightOperand.textContent.length < 10) {rightOperand.textContent += "7";}
			break;
			case "8":
				if (rightOperand.textContent.length < 10) {rightOperand.textContent += "8";}
			break;
			case "9":
				if (rightOperand.textContent.length < 10) {rightOperand.textContent += "9";}
			break;
			case ".":
				if (rightOperand.textContent.length < 9 && !rightOperand.textContent.includes(".")) {rightOperand.textContent += ".";}
			break;
			case "%":
				// if (rightOperand.textContent.length < 9 && !rightOperand.textContent.includes("%")) {rightOperand.textContent += "%";}
			break;
		} 
	})
}

// main functions

function calculate(AleftOperandValue, ArightOperandValue, Aoperation) {
	let result = Aoperation(AleftOperandValue,ArightOperandValue) + "<span id=\"sign\"></span>";
	return result;
}

// functions
function del() {
	rightOperand.textContent = rightOperand.textContent.slice(0, rightOperand.textContent.length-1);
}
// power
function pow(base, pow) {
	let result = base;
	for (let a = 1; a < pow; a++) {
		result *= base;
	}
	return result; 
}
// divide
function divide(nume, deno) {
	return nume / deno;
}
// multiply
function multiply(num1, num2) {
	return num1 * num2;
}
// subtract
function subtract(num1, num2) {
	return num1 - num2;
}
// add
function add(num1, num2) {
	return num1 - num2;
}
// inputs
var arr = [1,2,3,4,5]
for (var a = 0; a < arr.length; a++) {
	if (3 == arr[a]) {
		arr[a] = arr[a] * 2;
	}
}
console.log(arr)