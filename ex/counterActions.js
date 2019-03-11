export function inc() {
    return { type: 'INC' }
}

export function dec() {
    return { type: 'DEC' }
}

export function valueChanged(e) {
    return {
        type: 'VALUE_CHANGED',
        payload: e.target.value
    }
}