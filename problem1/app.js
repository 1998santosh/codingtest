class calculate {
    constructor(num1, num2, op) {
        this.num1 = num1;
        this.num2 = num2;
        this.op = op;
    }
    add = () => {
        return this.num1 + this.num2;
    }
    sub() {
        return this.num1 - this.num2;
    }
    mul() {
        return this.num1 * this.num2;
    }
    div() {
        return this.num1 % this.num2;
    }

}
function calc() {
    let num1 = parseInt(document.getElementById('value1').value);
    let num2 = parseInt(document.getElementById('value2').value);
    let op = document.getElementById('operator').value;
    let result = document.getElementById('result');
    result.innerHTML = ""
    let output;

    var c = new calculate(num1, num2, op);

    switch (op) {
        case "add":
            output = c.add();
            break;
        case "sub":
            output = c.sub();
            break;
        case "mul":
            output = c.mul();
            break;
        case "div":
            output = c.div();
        default:
            break;
    }
    result.innerHTML = output;

}