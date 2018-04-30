export function moneyInputMaskAll() {
    document.querySelectorAll('input').forEach(element => {
        if (element.getAttribute('data-money') == "true") {
            Inputmask(moneyInputMask()).mask(element);
        }
    });
}
export function moneyInputMask() {
    return {
        alias: "numeric",
        groupSeparator: ",",
        autoGroup: true,
        digits: 2,
        digitsOptional: false,
        prefix: "Bs ",
        placeholder: "0"
    };
}
export function dateInputMask() {
    return {
        alias: "date",
        inputFormat: "dd/mm/yyyy",
    };
}
export function parseMoney(value) {
    if (!value) {
        return 0;
    }
    let result = value.replace(/(Bs|\s+)/ig, ``);
    result = result.replace(/,/g, ``);
    return result;
}

export function cellPhoneInputMaskAll() {
    document.querySelectorAll('input').forEach(element => {
        if (element.getAttribute('data-cell-phone') == "true") {
            console.log(`found cell phone ${element}`);
            Inputmask(cellPhoneInputMask()).mask(element);
        }
    });
}
export function cellPhoneInputMask() {
    return "(999)-99999";
}
export function phoneInputMaskAll() {
    document.querySelectorAll('input').forEach(element => {
        if (element.getAttribute('data-phone') == "true") {
            console.log(`found phone ${element}`);
            Inputmask(phoneInputMask()).mask(element);
        }
    });
}
export function phoneInputMask() {
    return "(9) 999-999";
}