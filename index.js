const inputBox = document.getElementById("inpt-box")
const convertButton = document.getElementById("convert-btn")
const resultContainer = document.getElementById("result-cont")

let myNumber = []
const numbersFromLocalStorage = JSON.parse(localStorage.getItem("myNumbers"))

if (numbersFromLocalStorage) {
    myNumber = numbersFromLocalStorage
    render()
}

inputBox.addEventListener("focus", function () {
    inputBox.placeholder = "";
})

inputBox.addEventListener("blur", function () {
    if (inputBox.value === "") {
        inputBox.placeholder = "Enter number";
    }
})

convertButton.addEventListener("click", function () {
    const inputValue = parseFloat(inputBox.value)
    if (!isNaN(inputValue)) {
        myNumber.push(inputValue)
        localStorage.setItem("myNumbers", JSON.stringify(myNumber))
        render()
    }
})

function render() {
    let mylist = ""
    for (let i = 0; i < myNumber.length; i++) {
        let num = myNumber[i]

        let meters = (num * 3.281).toFixed(3)
        let feet = (num / 3.281).toFixed(3)

        let liters = (num * 0.264).toFixed(3)
        let gallons = (num / 0.264).toFixed(3)

        let kilos = (num * 2.204).toFixed(3)
        let pounds = (num / 2.204).toFixed(3)

        mylist = `                 
            <div class="conv-cont">Length (Meter/Feet)
                <p class="sup-text">${num} meters = ${meters} feet | ${num} feet = ${feet} meters</p>
            </div>
            <div class="conv-cont">Volume (Liters/Gallons)
                <p class="sup-text">${num} liters = ${liters} gallons | ${num} gallons = ${gallons} liters</p>
            </div>
            <div class="conv-cont">Mass (Kilograms/Pounds)
                <p class="sup-text">${num} kilos = ${kilos} pounds | ${num} pounds = ${pounds} kilos</p>
            </div>
        `
    }
    resultContainer.innerHTML = mylist
}


