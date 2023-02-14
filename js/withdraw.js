document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValue("withdraw-field");
  const previousBalanceAmount = getTextElementValue("balance-amount");
  //   error case
  if (
    newWithdrawAmount < 0 ||
    newWithdrawAmount > previousBalanceAmount ||
    isNaN(newWithdrawAmount)
  ) {
    alert("Invalid withdraw amount");
    setInputFieldEmpty("withdraw-field");
    return;
  }
  const previousWithdrawAmount = getTextElementValue("withdraw-amount");
  const totalWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;
  setTextElementValue("withdraw-amount", totalWithdrawAmount);
  setInputFieldEmpty("withdraw-field");

  // balance total
  //   const previousBalanceAmount = getTextElementValue("balance-amount");
  const totalBalanceAmount = previousBalanceAmount - newWithdrawAmount;
  setTextElementValue("balance-amount", totalBalanceAmount);
});
