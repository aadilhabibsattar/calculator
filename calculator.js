let calculation = localStorage.getItem('calculation') || '';

displayCalculation()

function saveCalculation() {
    localStorage.setItem('calculation', calculation);
}

function updateCalculation(value) {
    if (calculation.length < 15) {
        calculation += value;
        displayCalculation();
        saveCalculation();
    }
}

function displayCalculation() {
    document.querySelector('.js-calculation').innerHTML = calculation;
}

function evaluateCalculation() {
    try {
        let evalCalculation = calculation
            .replace(/\^/g, '**')
            .replace(/÷/g, '/')  
            .replace(/×/g, '*');  

        let result = eval(evalCalculation);
        let resultString = result.toString();

        if (resultString.length > 15) {
            if (Number.isInteger(result)) {
                resultString = resultString.substring(0,15);
            } else {
                resultString = result.toFixed(3);
            }
        }

        calculation = resultString; 
        displayCalculation();
        saveCalculation;
    } catch {
        calculation = 'Error';
        displayCalculation();
    }
}

function clearCalculation() {
    calculation = '';
    displayCalculation();
    localStorage.setItem('calculation', calculation);
}

function deleteCalculation() {
    calculation = calculation.slice(0, -1);
    displayCalculation();
    saveCalculation();
}

function powerCalculation() {
    calculation += '^';
    displayCalculation();
    saveCalculation();
}