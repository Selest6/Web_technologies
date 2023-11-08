function changer(){
    document.getElementsByTagName('p')[2].childNodes[1].innerText = "Alesya"
    document.getElementsByTagName('p')[1].childNodes[1].innerText = "Voinskaya"
    document.getElementsByTagName('p')[4].childNodes[1].innerText = "XX century"
}


const changedata = document.getElementById("change");
changedata.addEventListener('click', changer);