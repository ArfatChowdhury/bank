document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawTotal = getInnerText('withdraw-total')

    const withdrawInput = InputFieldOutput('withdraw-field')

    const currentWithdrawTotal = withdrawInput + withdrawTotal
    document.getElementById('withdraw-total').innerText = currentWithdrawTotal

    const previousBalanceTotal = getInnerText('balance-total')

    const currentBalanceTotal = previousBalanceTotal - withdrawInput

    // document.getElementById('withdraw-total').InnerText = currentBalanceTotal

    document.getElementById('balance-total').innerText = currentBalanceTotal

})