// const depositInputField = document.getElementById('deposit-field')
// const depositInputFieldString = depositInputField.value
// const depositInput = parseFloat(depositInputFieldString)



function InputFieldOutput(inputId){
    InputField = document.getElementById(inputId)
    InputFieldString = InputField.value
    const InputValue = parseFloat(InputFieldString)
    InputField.value = ''
    return InputValue ;
}


// const depositTotalElement = document.getElementById('deposit-total')
// const depositTotalString = depositTotalElement.innerText
// const depositTotal = parseFloat(depositTotalString)


function getInnerText(innerTextId){
    const TotalElement = document.getElementById(innerTextId)
    const TotalElementString = TotalElement.innerText
    const total = parseFloat(TotalElementString)
    return total;
}