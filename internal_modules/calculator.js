class Calculator {
    verboseMode = false;
    showErrorStack = false;

    constructor() {}

    add (n1, n2) {
        try {
            const firstOperating = this.#parse(n1);
            const secondOperating = this.#parse(n2);
            return firstOperating + secondOperating;
        } catch (e) {
            this.#logError(e);
            throw new Error(`Invalid add operation: ${n1} + ${n2}`);
        };
    };
    
    subtract (n1, n2) {
        try {
            const firstOperating = this.#parse(n1);
            const secondOperating = this.#parse(n2);
            return firstOperating - secondOperating;
        } catch (e) {
            this.#logError(e);
            throw new Error(`Invalid subtract operation: ${n1} - ${n2}`);
        };
    };
    
    multiply (n1, n2) {
        try {
            const firstOperating = this.#parse(n1);
            const secondOperating = this.#parse(n2);
            return firstOperating * secondOperating;
        } catch (e) {
            this.#logError(e);
            throw new Error(`Invalid multiply operation: ${n1} * ${n2}`);
        };
    };
    
    divide (n1, n2) {
        try {
            const firstOperating = this.#parse(n1);
            const secondOperating = this.#parse(n2);
            return firstOperating / secondOperating;
        } catch (e) {
            this.#logError(e);
            throw new Error(`Invalid divide operation: ${n1} / ${n2}`);
        };
    };
    
    
    #parse(n1) {
        const parseNumber = parseInt(n1);
        if (isNaN(parseNumber)) throw new Error('Invalid parse, argument is NaN');
        return parseNumber;
    }

    resolveOperation(operation) {
        const operationAsString = operation;
        var operation = operation.split(' ');
        
        if (operation.length !== 3) {
            throw new Error(`Invalid pattern: ${operationAsString}. Should be a string in pattern: 'number' 'operator' 'number'. Exemple: 1 + 1`);
        }

        const operator = operation[1];
        const firstOperating = operation[0];
        const secondOperating = operation[2];
    
        switch (operator) {
            case '+':
                try {
                    const result = this.add(firstOperating, secondOperating);
                    this.#log(`Resultado de ${operationAsString} é: ${result}`);
                    return result;
                } catch (e) {
                    this.#logError(e);
                    throw new Error('Invalid add operation: ' + operationAsString);
                }
            case '-':
                try {
                    const result = this.subtract(firstOperating, secondOperating);
                    this.#log(`Resultado de ${operationAsString} é: ${result}`);
                    return result;
                } catch (e) {
                    this.#logError(e);
                    throw new Error('Invalid subtract operation: ' + operationAsString);
                }
            case '*':
                try {
                    const result = this.multiply(firstOperating, secondOperating);
                    this.#log(`Resultado de ${operationAsString} é: ${result}`);
                    return result;
                } catch (e) {
                    this.#logError(e);
                    throw new Error('Invalid multiply operation: ' + operationAsString);
                }
            case '/':
                try {
                    const result = this.divide(firstOperating, secondOperating);
                    this.#log(`Resultado de ${operationAsString} é: ${result}`);
                    return result;
                } catch (e) {
                    this.#logError(e);
                    throw new Error('Invalid divide operation: ' + operationAsString);
                }
            default:
                this.#logError(`Invalid operation: ${operationAsString}`);
                throw new Error(`Invalid operation: ${operationAsString}`);
        }
    }
    
    #log(message) {
        if(this.verboseMode) console.log(message);
    }
    
    #logError(error) {
        if(this.showErrorStack) console.error(error.stack);
        else if(this.verboseMode) console.error(error.message);
        
    }
}

module.exports = Calculator;