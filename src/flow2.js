/* @flow */

type MaxRule = {
    type: 'MAX',
    maxValue: number,
}

type MinRule = {
    type: 'MIN',
    minValue: number,
}

type ForAllRule = {
    type: 'FOR_ALL',
    rules: Rule[]
}

type ForSomeRule = {
    type: 'FOR_SOME',
    rules: Rule[]
}

type Rule = MinRule | MaxRule | ForAllRule | ForSomeRule

const validate = (value: number, rule: Rule): boolean => {
    switch (rule.type) {
        case 'MAX':
            return value <= rule.maxValue
        case 'MIN':
            return value >= rule.minValue
        case 'FOR_ALL':
            return rule.rules
                .reduce((acc, nextRule) => acc && validate(value, nextRule), true)
        case 'FOR_SOME':
            return rule.rules
                .reduce((acc, nextRule) => acc || validate(value, nextRule), false)
        default:
            (rule.type: empty)
            throw Error(`rule ${rule.type} is not being handled properly`)
    }
}

const validate2 = (value: number, rule: Rule): boolean => {
    switch (rule.type) {
        case 'MAX':
            return value <= rule.maxValue
        case 'MIN':
            return value >= rule.minValue
        case 'FOR_ALL':
            return rule.rules
                .reduce((acc, nextRule) => acc && validate(value, nextRule), true)
        default:
            return rule.rules
                .reduce((acc, nextRule) => acc || validate(value, nextRule), false)
    }
}