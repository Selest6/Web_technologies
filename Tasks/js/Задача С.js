function verify() {
    console.log("a, h, r, m")
    let a = parseInt(elementA.value);
    let h = parseInt(elementH.value);
    let r = parseInt(elementR.value);
    let m = parseInt(elementM.value);
    console.log(a, h, r, m)

    let cubeV = a**3
    let cylindV = 3.14*h*(r**2)
    let both = cubeV + cylindV

    if (cubeV >= m){
        result = "Да, жидкость поместится"
        document.getElementById("cube").innerText =  result;
        document.getElementsByName("cube")[0].value =  result;
        check1 = true;
    } else {
        result = "Нет, жидкость не поместится"
        document.getElementById("cube").innerText =  result;
        document.getElementsByName("cube")[0].value =  result;
        check1 = false;
    }


    if (cylindV >= m){
        result = "Да, жидкость поместится"
        document.getElementById("cylind").innerText =  result;
        document.getElementsByName("cylind")[0].value =  result;
        check2 = true;
    } else {
        result = "Нет, жидкость не поместится"
        document.getElementById("cylind").innerText =  result;
        document.getElementsByName("cylind")[0].value =  result;
        check2 = false;
    }


    if (both >= m){
        result = "Да, жидкость поместится"
        document.getElementById("both").innerText =  result;
        document.getElementsByName("both")[0].value =  result;
        check3 = true;
    } else {
        result = "Нет, жидкость не поместится"
        document.getElementById("both").innerText =  result;
        document.getElementsByName("both")[0].value = result;
        check3 = false;
    }
}

function send() {
    if (check1 || check2 || check3) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

let result;
let check1 = false;
let check2 = false;
let check3 = false;

const elementA = document.getElementById("a");
elementA.addEventListener('input', verify);

const elementH = document.getElementById("h");
elementH.addEventListener('input', verify);

const elementR = document.getElementById("r");
elementR.addEventListener('input', verify);

const elementM = document.getElementById("m");
elementM.addEventListener('input', verify);

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)
