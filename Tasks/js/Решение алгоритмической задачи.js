function verify() {
    console.log("a, h, r, m")
    let a = parseInt(elementA.innerText);
    let h = parseInt(elementH.innerText);
    let r = parseInt(elementR.innerText);
    let m = parseInt(elementM.innerText);
    console.log(a, h, r, m)

    let cubeV = a**3
    let cylindV = 3.14*h*(r**2)
    let both = cubeV + cylindV
    document.getElementById("cylindV").innerText =  cylindV;
    document.getElementById("cubeV").innerText =  cubeV;

    if (cubeV >= m){
        result = "Да, жидкость поместится"
        document.getElementById("cube").innerText =  result;
    } else {
        result = "Нет, жидкость не поместится"
        document.getElementById("cube").innerText =  result;
    }


    if (cylindV >= m){
        result = "Да, жидкость поместится"
        document.getElementById("cylind").innerText =  result;
    } else {
        result = "Нет, жидкость не поместится"
        document.getElementById("cylind").innerText =  result;
    }


    if (both >= m){
        result = "Да, жидкость поместится"
        document.getElementById("both").innerText =  result;
    } else {
        result = "Нет, жидкость не поместится"
        document.getElementById("both").innerText =  result;
    }
}

const elementA = document.getElementById("a");
const elementH = document.getElementById("h");
const elementR = document.getElementById("r");
const elementM = document.getElementById("m");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);