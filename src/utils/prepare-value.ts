function clearString(string: string) {
    const numberPattern = /\d+/g;
    const res = string.match( numberPattern )?.join('');

    if (!res) {
        return 0
    }

    return res
}

// возвращает значение только цифры в допустимых пределах "min", "max"
export function prepareValue(string: string, min: number, max: number):number {
    let value = +clearString(string);
    value = value < min ? min : value;
    value = value > max ? max : value;
    return value
}