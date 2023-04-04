const Calculator = require("./internal_modules/calculator");

const  calculator = new Calculator();
const operations = [
    'a',
    '1 + 1',
    '-123 + 123123',
    '8 * 0',
    '1239123 * 12313',
    '123 / -12',
    '313123 / 0'
];

calculator.verboseMode = true;
calculator.showErrorStack = true;

operations.forEach(operation => {
    try {
        console.log(`\nResultado de ${operation} é: ${calculator.resolveOperation(operation)}\n`);
    } catch (e) {
        console.error(e.message + ': ' + operation);
    };
});