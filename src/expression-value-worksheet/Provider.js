const variable_name = ['x','y', 'z', 'm', 'n', 's', 't'];

function randomVarName() {
    return variable_name[getRandomInt(0,variable_name.length)]
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function expr1(name, value) {
    const m = getRandomInt(2,6);
    const n = getRandomInt(2,8);
    return {
        text : 	m + "(" + name + " + " + n + ")",
        solution : m * (value + n)

    };
}

function expr2(name, value) {
    const m = getRandomInt(2,6);
    const n = getRandomInt(2,8);
    return {
        text : 	m + "(" + name + " - " + n + ")",
        solution : m * (value - n)
    };
}

function expr3(name, value) {
    const m = getRandomInt(2,6);
    const n = getRandomInt(2,8);
    const t = getRandomInt(2,11);
    return {
        text : 	m + "(" + name + " + " + n + ") + " + t,
        solution : m * (value + n) + t
    };
}

function expr4(name, value) {
    const m = getRandomInt(2,6);
    const n = getRandomInt(2,8);
    const t = getRandomInt(2,11);
    return {
        text : 	m + "(" + name + " + " + n + ") - " + t,
        solution : m * (value + n) - t
    };
}

function expr5(name, value) {
    const m = getRandomInt(2,6);
    const n = getRandomInt(2,8);
    const t = getRandomInt(2,11);
    return {
        text : 	m + "(" + name + " - " + n + ") + " + t,
        solution : m * (value - n) + t
    };
}

function expr6(name, value) {
    const m = getRandomInt(2,6);
    const n = getRandomInt(2,8);
    const t = getRandomInt(2,11);
    return {
        text : 	m + "(" + name + " - " + n + ") - " + t,
        solution : m * (value - n) - t
    };
}

function expr7(name, value, divisors) {
    const m = divisors[getRandomInt(0,divisors.length)];
    const n = getRandomInt(2,8);
    const t = getRandomInt(2,11);
    return {
        text : 	 "(" + name + "/" + m + " + " + n + ") + " + t,
        solution : Math.round((value/m + n) + t)
    };
}

function expr8(name, value, divisors) {
    const m = divisors[getRandomInt(0,divisors.length)];
    const n = getRandomInt(2,8);
    const t = getRandomInt(2,11);
    return {
        text : 	 "(" + name + "/" + m + " - " + n + ") + " + t,
        solution : Math.round((value/m - n) + t)
    };
}

function expr9(name, value, divisors) {
    const m = divisors[getRandomInt(0,divisors.length)];
    const n = getRandomInt(2,8);
    const t = getRandomInt(2,11);
    return {
        text : 	 "(" + name + "/" + m + " + " + n + ") - " + t,
        solution : Math.round((value/m + n) - t)
    };
}

function expr10(name, value, divisors) {
    const m = divisors[getRandomInt(0,divisors.length)];
    const n = getRandomInt(2,8);
    const t = getRandomInt(2,11);
    return {
        text : 	 "(" + name + "/" + m + " - " + n + ") - " + t,
        solution : Math.round((value/m - n) - t)
    };
}

function generateGeneratorTypes() {
    const m1 = getRandomInt(2,8);
    const m2 = getRandomInt(2,8);

    const value = m1 * m2;
    const divisors = [m1, m2, value];

    const name = randomVarName();
    const generatorTypes = [];
    generatorTypes.push(createGeneratorType(name, value, divisors, expr1));
    generatorTypes.push(createGeneratorType(name, value, divisors, expr2));
    generatorTypes.push(createGeneratorType(name, value, divisors, expr3));
    generatorTypes.push(createGeneratorType(name, value, divisors, expr4));
    generatorTypes.push(createGeneratorType(name, value, divisors, expr5));
    generatorTypes.push(createGeneratorType(name, value, divisors, expr6));
    generatorTypes.push(createGeneratorType(name, value, divisors, expr7));
    generatorTypes.push(createGeneratorType(name, value, divisors, expr8));
    generatorTypes.push(createGeneratorType(name, value, divisors, expr9));
    generatorTypes.push(createGeneratorType(name, value, divisors, expr10));

    return generatorTypes;
}

function createGeneratorType(name, value, divisors, expr) {
    const generatorType = expr(name, value, divisors);
    return {
        text: generatorType.text,
        solution: generatorType.solution,
        generator: expr
    };
}

function generateWorksheetExpression(selectedGeneratorTypes) {
    const m1 = getRandomInt(2,8);
    const m2 = getRandomInt(2,8);

    const value = m1 * m2;
    const divisors = [m1, m2, value];

    const name = randomVarName();
    const question = {
        variables : [name],
        values : [value],
        expression : []
    };

    question.expression = selectedGeneratorTypes.map( (selectedGeneratorType) => {
        return selectedGeneratorType.generator(name, value, divisors);
    });

    return question;
}

const expressionProvider = {
    expressionTypes: generateGeneratorTypes(),
    generatorFunction: generateWorksheetExpression
};

export default expressionProvider;