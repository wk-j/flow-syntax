/* @flow */

type X = 'A' | 'B' | 'C'

const f = (x: X): number => {
    if (x === 'A') {
        return 0
    } else if (x === 'B') {
        return 1
    } else if (x === 'C') {
        return 2
    } else {
        (x: empty)
        throw new Error(`${x} is not an element of type 'X'`)
    }
}

const f2 = (x: X): number => {
    if (x === 'A') {
        return 0
    } else if (x === 'B') {
        return 1
    } else {
        return 2
    }
}


var result = f('C');