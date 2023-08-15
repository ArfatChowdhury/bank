document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString)



    const withdrawTotalElement = document.getElementById('withdraw-total')
    const newWithdrawTotalString = withdrawTotalElement.innerText
    const previousWithdrawTotal = parseFloat(newWithdrawTotalString)

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalElementString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalElementString)
      

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount
    balanceTotalElement.innerText = newBalanceTotal
   


    withdrawField.value = ''
})