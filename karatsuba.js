function karatsuba(n1, n2) {
    const charNumbers1 =  n1.toString();
    const charNumbers2 =  n2.toString();
    let p = parseFloat(n1.toString().split("").splice(0,charNumbers1.length/2).join(""));
    let q = parseFloat(n1.toString().split("").splice(charNumbers1.length/2, n1.toString().length).join(""));
    let r = parseFloat(n2.toString().split("").splice(0,charNumbers2.length/2).join(""));
    let s = parseFloat(n2.toString().split("").splice(charNumbers2.length/2, n2.toString().length).join(""));
    let result = p*r*Math.pow(10, charNumbers1.length) + (p*r+q*s-(q-p) * (s-r)) * Math.pow(10, charNumbers1.length/2) + q * s;
    return result;
}

const number = karatsuba(1234,5678);
alert(number);