document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositInputField = document.getElementById('deposit-field');
    const newDepositAmountString = depositInputField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)


    const DepositTotalElement = document.getElementById('deposit-total')
    const previousDepositTotalString = DepositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    const currentDepositTotal = previousDepositTotal + newDepositAmount;


    DepositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalElementString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalElementString)

 const currentBalanceTotal = previousBalanceTotal + newDepositAmount
 
 balanceTotalElement.innerText = currentBalanceTotal

















        depositInputField.value = '';
})