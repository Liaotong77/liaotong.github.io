const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function caculate() {
  try {
    let result = new Function("return " + display.value)();
    result = new Big(result).toFixed(10);
    result = result.replace(/\.?0+$/, "");
    display.value = result;
  } catch (Error) {
    display.value = "Error";
  }
}
