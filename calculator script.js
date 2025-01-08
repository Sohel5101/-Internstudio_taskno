const resultScreen = document.getElementById("result");

function appendValue(value) {
  resultScreen.value += value;
}

function clearScreen() {
  resultScreen.value = "";
}

function calculateResult() {
  try {
    resultScreen.value = eval(resultScreen.value);
  } catch (error) {
    alert("Invalid Input");
    clearScreen();
  }
}
