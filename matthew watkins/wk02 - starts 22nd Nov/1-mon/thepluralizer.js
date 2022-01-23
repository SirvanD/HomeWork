
function pluralizer ( noun , number ) {
    if (number === 1) {
        return `${number} ${noun}`
    } else {
        return `${number} ${noun}\'s`
    }
}

pluralizer()