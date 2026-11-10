"1."

const focim=document.getElementById("focim")
focimElem.textContent="Mátrix rendszer"

"2."

const statuszElemek=document.getElementsByClassName("statuszElemek")

"3. Írd ki a konzolra, hogy hány elemet tartalmaz a `statuszElemek` lista!"

console.log(statuszElemek.length)

"4."

statuszElemek[0].textContent = 'Rendszer ellenőrzése folyamatban...'

"5."

statuszElemek[1].textContent = 'Kapcsolódás a hálózathoz...'

"6."

const listaElemek=document.querySelectorAll("listaElemek")

"7."

console.log(listaElemek[0].textContent)

"8."

listaElemek[1].textContent = 'Szerver állapot: ONLINE'

"9."

const nevInput = document.quarySelector("#jatekos-nev-input")

"10."

const inditoGomb = document.quarySelector("#indito-gomb")

"11."

const eredmenyDiv = document.getElementById("eredmeny")

"12. 13. 14. 15."

inditoGomb.addEventListener("click", function(){
    const gombSzovege = inditoGomb.textContent
    const jatekosNev = nevInput.value
    eredmenyDiv.textContent = `Üdvözlünk, ${jatekosNev}! Végrehajtott akció: ${gombSzovege}`
})