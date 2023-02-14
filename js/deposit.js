document.getElementById("deposit-btn").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValue("deposit-field");
  //   error case
  if (newDepositAmount < 0 || isNaN(newDepositAmount)) {
    alert("invalid deposited amount");
    setInputFieldEmpty("deposit-field");
    return;
  }
  const previousDepositAmount = getTextElementValue("deposit-amount");
  const totalDepositAmount = newDepositAmount + previousDepositAmount;
  setTextElementValue("deposit-amount", totalDepositAmount);
  setInputFieldEmpty("deposit-field");

  // balance total
  const previousBalanceAmount = getTextElementValue("balance-amount");
  const totalBalanceAmount = previousBalanceAmount + newDepositAmount;
  setTextElementValue("balance-amount", totalBalanceAmount);
});
