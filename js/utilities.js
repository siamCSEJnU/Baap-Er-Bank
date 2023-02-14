function getTextElementValue(elementId) {
  const element = document.getElementById(elementId);
  const stringValue = element.innerText;
  const value = parseFloat(stringValue);
  return value;
}

// get value from input field
function getInputFieldValue(inputFieldId) {
  const element = document.getElementById(inputFieldId);
  const stringValue = element.value;
  const value = parseFloat(stringValue);
  return value;
}

// set element value
function setTextElementValue(elementId, newValue) {
  const element = document.getElementById(elementId);
  element.innerText = newValue;
}

//set input field value after inserting
function setInputFieldEmpty(fieldId) {
  document.getElementById(fieldId).value = "";
}
