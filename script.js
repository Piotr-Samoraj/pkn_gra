
function papier()
{
    let losowy = Math.floor(Math.random()* 3)
    let parlosuj = document.getElementById("losowanie")
    if (losowy == 0)
        parlosuj.innerHTML = "Komputer wylosował papier: <br> <b>remis</b>"
    else if (losowy == 1)
        parlosuj.innerHTML = "Komputer wylosował kamien: <br> <b>wygrales</b>"
    else 
        parlosuj.innerHTML = "Komputer wylosował nozyce: <br> <b>przegrales</b>"

}
function kamien()
{
    let losowy = Math.floor(Math.random()* 3)
    let parlosuj = document.getElementById("losowanie")
    if (losowy == 0)
        parlosuj.innerHTML = "Komputer wylosował papier: <br> <b>przegrales</b>"
    else if (losowy == 1)
        parlosuj.innerHTML = "Komputer wylosował kamien: <br> <b>remis</b>"
    else 
        parlosuj.innerHTML = "Komputer wylosował nozyce: <br> <b>wygrales</b>"

}
function nozyce()
{
    let losowy = Math.floor(Math.random()* 3)
    let parlosuj = document.getElementById("losowanie")
    if (losowy == 0)
        parlosuj.innerHTML = "Komputer wylosował papier: <br> <b>wygrales</b>"
    else if (losowy == 1)
        parlosuj.innerHTML = "Komputer wylosował kamien: <br> <b>przegrales</b>"
    else 
        parlosuj.innerHTML = "Komputer wylosował nozyce: <br> <b>remis</b>"

}      