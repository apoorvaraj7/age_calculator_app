const inputField = document.querySelectorAll('input')
const labelField = document.querySelectorAll('label')

// input DOM
const dayType = document.querySelector('input[name="dayType"]')
const monthType = document.querySelector('input[name="monthType"]')
const yearType = document.querySelector('input[name="yearType"]')

// array of inputs
const inputs = [dayType, monthType, yearType]

// display DOM
const yearDisplay = document.querySelector('.year-display')
const monthDisplay = document.querySelector('.month-display')
const dayDisplay = document.querySelector('.day-display')


// Error DOM
const errorMsg = document.querySelectorAll('.error-message')




// Validate Click DOM 
document.querySelector('.check').addEventListener('click', () => {

    // yearDisplay.textContent = "12"
    // alert("hello")

    const day = parseInt(dayType.value)
    const month = parseInt(monthType.value)
    const year = parseInt(yearType.value)

    let isValid = true;
    // reset
    errorMsg.forEach((error, index) => {
        error.style.display = "none"
        inputField[index].style.borderColor = ""
        labelField[index].style.color = ""
    })

    // validate inputs
    inputs.forEach((input, index) => {
        if (!input.value) {
            errorMsg[index].style.display = "block"
            inputField[index].style.borderColor = "rgb(208, 9, 9)"
            labelField[index].style.color = "rgb(208, 9, 9)"

            isValid = false

        }
        else if (input === dayType && (day < 1 || day > 31)) {
            errorMsg[index].style.display = "block"
            errorMsg[index].textContent = "Must be a valid day"
            inputField[index].style.borderColor = "rgb(208, 9, 9)"
            labelField[index].style.color = "rgb(208, 9, 9)"
            isValid = false
        }

        else if (input === monthType && (month < 1 || month > 12)) {
            errorMsg[index].style.display = "block"
            errorMsg[index].textContent = "Must be a valid month"
            inputField[index].style.borderColor = "rgb(208, 9, 9)"
            labelField[index].style.color = "rgb(208, 9, 9)"
            isValid = false
        }

        else if (input === yearType && (year < 1900 || year > new Date().getFullYear())) {
            errorMsg[index].style.display = "block"
            errorMsg[index].textContent = "Must be a valid year"
            inputField[index].style.borderColor = "rgb(208, 9, 9)"
            labelField[index].style.color = "rgb(208, 9, 9)"
            isValid = false
        }
    })

    if (isValid) {
        const inputDate = new Date(year, month - 1, day)
        if (inputDate.getDate() !== day || inputDate.getMonth() + 1 !== month || inputDate.getFullYear() !== year) {
            inputField[0].style.borderColor = "rgb(208, 9, 9)"
            labelField[0].style.color = "rgb(208, 9, 9)"
            errorMsg[0].style.display = "block"
            errorMsg[0].textContent = "Must be a valid date"
            // alert("hello")
            return
        }



        // Calculate the age based on current date!

        const currentDate = new Date()
        let ageyears = currentDate.getFullYear() - year
        let agemonths = currentDate.getMonth() - (month - 1)
        let agedays = currentDate.getDate() - day

        if (agedays < 0) {
            agemonths -= 1
            const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0)
            agedays += previousMonth.getDate()
        }

        if (agemonths < 0) {
            ageyears -= 1
            agemonths += 12
        }


        // display

        yearDisplay.textContent = ageyears
        monthDisplay.textContent = agemonths
        dayDisplay.textContent = agedays

    }
    else {
        yearDisplay.textContent = "--"
        monthDisplay.textContent = "--"
        dayDisplay.textContent = "--"
    }

})