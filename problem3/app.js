
const print = () => {
    const input = parseInt(document.getElementById("input").value);
    const arr = [];
    call.innerHTML= "";

    for (let i = 1; i <= input; i++) {
        let temp = "";
        const odd = i % 2 !== 0;
        if (odd) {
            // run normal loop
            for (let k = 1; k <= i; k++) {
                temp += k;
            }
        } else {
            // run Reverse loop
            for (let k = i; k >= 1; k--) {
                temp += k;
            }
        }
        temp += "<br />";
        document.getElementById("call").innerHTML = document.getElementById("call").innerHTML +   temp ;
        arr.push(temp)
    }
    arr.slice(0, arr.length - 1).reverse().map((item) => {
        document.getElementById("call").innerHTML = document.getElementById("call").innerHTML + item;
    })
    
}
