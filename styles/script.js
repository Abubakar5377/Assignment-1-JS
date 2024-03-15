
// Alert Name

document.getElementById("alertName").onclick = function () {
    document.getElementById("statement").innerHTML = ""
    alert("Muhammad Abu Bakar")
}

// Alert Number

document.getElementById("alertNum").onclick = function () {
    document.getElementById("statement").innerHTML = ""
    alert('1234')
}

// Show Variable Name

document.getElementById("varname").onclick = function () {
    let varName;
    document.getElementById("statement").innerText = "Variable Name"
    document.getElementById("output").innerText = "varName"
}

// CamelCase Example

document.getElementById("camelCase").onclick = function () { 
    document.getElementById("statement").innerText = "Example of CamelCase"
    document.getElementById("output").innerText = "thisIsExampleOfCamelCase" 
}


// Sum 2 Numbers

document.getElementById("sum").onclick = function () {
    let a = 8;
    let b = 6;
    let sum = a + b;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> `
    document.getElementById("output").innerText = `a + b = ${sum}`
}

// Subtract 2 Numbers

document.getElementById("sub").onclick = function () {
    let a = 68;
    let b= 25;
    let sub = a - b;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> `
    document.getElementById("output").innerText = `a - b = ${sub}`
}

// Multiply 2 Numbers

document.getElementById("mul").onclick = function () {
    let a = 5;
    let b = 6;
    let mul = a * b;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> `
    document.getElementById("output").innerText = `a * b = ${mul}`
}

// Divide 2 Numbers

document.getElementById("div").onclick = function () {
    let a = 43;
    let b = 4;
    let div = a / b;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> `
    document.getElementById("output").innerText = `a / b = ${div}`
}

// Calculate Some Numbers

document.getElementById("cal").onclick = function () {
    let a = 52;
    let b= 14;
    let c = 18;
    let result = a/b * c;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> c = ${c} `
    document.getElementById("output").innerText = `a / b * c = ${result}`
}


// clear Statement

document.getElementById("clearStatement").onclick = function () {
    document.getElementById("statement").innerText = ""
}

// clear Statement

document.getElementById("clearOutput").onclick = function(){
    document.getElementById("output").innerText = ""
}