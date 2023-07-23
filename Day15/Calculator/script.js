const display = document.getElementById('display');

    function appendToDisplay(value) {
      display.innerText += value;
    }

    function clearDisplay() {
      display.innerText = '0';
    }

    function calculate() {
      try {
        //The eval() method evaluates or executes an argument.
        const result = eval(display.innerText);
        display.innerText = result;
      } catch (error) {
        display.innerText = 'Error';
      }
    }

    document.onkeypress = function (event) {
            const key = event.key;
            if (/[\+\-*/.=1234567890]/.test(key)) {
                // Allowed keys: digits, +, -, *, /, ., and =
                if (key === '=') {
                    calculateResult();
                } else {
                    appendToDisplay(key);
                }
            }else{
              alert("Please enter numbers and characters.");
            }
    }
    