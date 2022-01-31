let first = document.getElementById("first")
let second = document.getElementById("second")
const mediaQuery = window.matchMedia("(min-height: 375px)")

if (mediaQuery == matchMedia) {
    alert("Please stay in portrait mode bubo")
}
//=====INPUTS=====
function num1() {
    first.textContent += 1
}
function num2() {
    first.textContent += 2
}
function num3() {
    first.textContent += 3
}
function num4() {
    first.textContent += 4
}
function num5() {
    first.textContent += 5
}
function num6() {
    first.textContent += 6
}
function num7() {
    first.textContent += 7
}
function num8() {
    first.textContent += 8
}
function num9() {
    first.textContent += 9
}
function num0() {
    first.textContent += 0
}
function percent() {
    // if (first.textContent.includes("%") == true) {
    
    //     first.textContent = first.textContent.replace("%", "%")
    // }else {
    // first.textContent += "%"
    // }
    alert("Please convert a percentage into decimal first because nagrigat ag panunut ti program na.")
}
function point() {
    if (first.textContent.includes(".") == true) {
    
        first.textContent = first.textContent.replace(".", ".")
    }else {
    first.textContent += "."
    }
    // alert("Sorry, point sign is not yet functional.")
}
//=====Operations=====
function ac() {
    first.textContent = null
    second.textContent = null
}
function del() {
   first.textContent = first.textContent.slice(0, -1)
}
function multiply() {
    second.innerText = first.textContent + " × "
    first.textContent = null
}
function divide() {
    second.innerText = first.textContent + " ÷ "
    first.textContent = null
}
function add() {
    second.innerText = first.textContent + " + "
    first.textContent = null
}
function subtract() {
    second.innerText = first.textContent + " - "
    first.textContent = null
}
function equal() {
    let add = " + "
    let subtract = " - "
    let multiply = " × "
    let divide = " ÷ "
    if (second.textContent.includes(multiply) == true) {
        second.textContent = second.textContent.slice(0, -3)
        second.textContent = second.textContent + multiply + first.textContent
        first.textContent = parseFloat(first.textContent) * parseFloat(second.textContent)
    }else if (second.textContent.includes(divide) == true) {
        second.textContent = second.textContent.slice(0, -3)
        second.textContent = second.textContent + divide + first.textContent
        first.textContent = parseFloat(second.textContent) / parseFloat(first.textContent)
    }else if (second.textContent.includes(add) == true) {
        second.textContent = second.textContent.slice(0, -3)
        second.textContent = second.textContent + add + first.textContent
        first.textContent = parseFloat(first.textContent) + parseFloat(second.textContent)
    }else if (second.textContent.includes(subtract) == true) {
        second.textContent = second.textContent.slice(0, -3)
        second.textContent = second.textContent + subtract + first.textContent
        first.textContent = parseFloat(second.textContent) - parseFloat(first.textContent)
    }
    
}
