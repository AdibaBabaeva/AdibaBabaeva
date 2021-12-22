function describeAge(a){
    return `You're a(n) ${a<13?'kid':a<18?'teenager':a<65?'adult':'elderly'}`
}

function tripleTrouble(one, two, three) {
    let result = '';
    one = one.split('');
    two = two.split('');
    three = three.split('');

    for (let i = 0; i < one.length; i++) {
        result += one[i] + two[i] + three[i];
    }
    return result;
}

