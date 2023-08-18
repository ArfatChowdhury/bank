

document.getElementById('btn-deposit').addEventListener('click', function(){
    // deposit section 

const depositTotalElement = document.getElementById('deposit-total')
const depositTotalString = depositTotalElement.innerText
const depositTotal = parseFloat(depositTotalString)



// deposit input section 
// const depositInputField = document.getElementById('deposit-field')
// const depositInputFieldString = depositInputField.value
// const depositInput = parseFloat(depositInputFieldString)
const depositInput = InputFieldOutput('deposit-field')



const newDepositTotal = depositTotal + depositInput
depositTotalElement.innerText = newDepositTotal

const balanceTotalElement = document.getElementById('balance-total')
const balanceTotalElementString = balanceTotalElement.innerText
const balanceTotal = parseFloat(balanceTotalElementString)

const newBalance  = depositInput + balanceTotal
balanceTotalElement.innerText = newBalance
})