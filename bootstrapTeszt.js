function ujVisszajelzoSor(tesztneve, visszajelzes) {
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(1);
    var tesztNeveMezo = adatSor.insertCell(0);
    var visszajelzesMezo = adatSor.insertCell(1);
    tesztNeveMezo.innerHTML = `${tesztneve}`;
    visszajelzesMezo.innerHTML = `${visszajelzes}`;
}

function Teszt01() {
    try {
        let tesztElem = document.querySelector("div");
        if (tesztElem.classList == "container") {
            ujVisszajelzoSor("(1.) Oldal fő tartalmának igazítása", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("(1.) Oldal fő tartalmának igazítása", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("(1.) Oldal fő tartalmának igazítása", "HIBA");
    }
}

function Teszt02() {
    let tesztElem = document.querySelector("h1");
    try {
        if (tesztElem.innerHTML == "Tanfolyam regisztráció") {
            ujVisszajelzoSor("(2.) Egyes szintű címsor tartalma", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(2.) Egyes szintű címsor tartalma", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(2.) Egyes szintű címsor tartalma", "HIBA")
    }
}
function Teszt03() {
    let tesztElem = document.querySelector("input");
    try {
        if (tesztElem.type == "text") {
            ujVisszajelzoSor("(3.) Első input mező típusa", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(3.) Első input mező típusa", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(3.) Első input mező típusa", "HIBA")
    }
}

function Teszt04() {
    let tesztElem = document.querySelector("input");
    try {
        if (tesztElem.id == "veznev") {
            ujVisszajelzoSor("(4.) Első input mező azonosítója", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(4.) Első input mező azonosítója", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(4.) Első input mező azonosítója", "HIBA")
    }
}

function Teszt05() {
    let tesztElem = document.querySelector("input");
    try {
        if (tesztElem.classList == "form-control") {
            ujVisszajelzoSor("(5.) Első input mező bootstrap osztálya", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(5.) Első input mező bootstrap osztálya", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(5.) Első input mező bootstrap osztálya", "HIBA")
    }
}

function Teszt06() {
    let tesztElem = document.querySelectorAll("input");
    try {
        if (tesztElem[1].type == "text") {
            ujVisszajelzoSor("(6.) Második input mező típusa", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(6.) Második input mező típusa", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(6.) Második input mező típusa", "HIBA")
    }
}

function Teszt07() {
    let tesztElem = document.querySelectorAll("input");
    try {
        if (tesztElem[1].id == "kernev") {
            ujVisszajelzoSor("(7.) Második input mező azonosítója", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(7.) Második input mező azonosítója", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(7.) Második input mező azonosítója", "HIBA")
    }
}
function Teszt08() {
    let tesztElem = document.querySelectorAll("input");
    try {
        if (tesztElem[1].classList == "form-control") {
            ujVisszajelzoSor("(8.) Második input mező bootstrap osztálya", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(8.) Második input mező bootstrap osztálya", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(8.) Második input mező bootstrap osztálya", "HIBA")
    }
}
function Teszt09() {
    let tesztElem = document.querySelectorAll("input");
    try {
        if (tesztElem[2].type == "text") {
            ujVisszajelzoSor("(9.) Harmadik input mező típusa", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(9.) Harmadik input mező típusa", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(9.) Harmadik input mező típusa", "HIBA")
    }
}
function Teszt10() {
    let tesztElem = document.querySelectorAll("input");
    try {
        if (tesztElem[2].id == "fnev") {
            ujVisszajelzoSor("(10.) Harmadik input mező azonosítója", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(10.) Harmadik input mező azonosítója", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(10.) Harmadik input mező azonosítója", "HIBA")
    }
}
function Teszt11() {
    let tesztElem = document.querySelectorAll("input");
    try {
        if (tesztElem[2].classList == "form-control") {
            ujVisszajelzoSor("(11.) Harmadik input mező bootstrap osztálya", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(11.) Harmadik input mező bootstrap osztálya", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(11.) Harmadik input mező bootstrap osztálya", "HIBA")
    }
}
function Teszt12() {
    let tesztElem = document.querySelectorAll("input");
    try {
        if (tesztElem[3].type == "password") {
            ujVisszajelzoSor("(12.) Negyedik input mező típusa", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(12.) Negyedik input mező típusa", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(12.) Negyedik input mező típusa", "HIBA")
    }
}
function Teszt13() {
    let tesztElem = document.querySelectorAll("input");
    try {
        if (tesztElem[3].id == "pass1") {
            ujVisszajelzoSor("(13.) Negyedik input mező azonosítója", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(13.) Negyedik input mező azonosítója", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(13.) Negyedik input mező azonosítója", "HIBA")
    }
}
function Teszt14() {
    let tesztElem = document.querySelectorAll("input");
    try {
        if (tesztElem[3].classList == "form-control") {
            ujVisszajelzoSor("(14.) Negyedik input mező bootstrap osztálya", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(14.) Negyedik input mező bootstrap osztálya", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(14.) Negyedik input mező bootstrap osztálya", "HIBA")
    }
}
function Teszt15() {
    let tesztElem = document.querySelectorAll("input");
    try {
        if (tesztElem[4].type == "password") {
            ujVisszajelzoSor("(15.) Ötödik input mező típusa", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(15.) Ötödik input mező típusa", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(15.) Ötödik input mező típusa", "HIBA")
    }
}
function Teszt16() {
    let tesztElem = document.querySelectorAll("input");
    try {
        if (tesztElem[4].id == "pass2") {
            ujVisszajelzoSor("(16.) Ötödik input mező azonosítója", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(16.) Ötödik input mező azonosítója", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(16.) Ötödik input mező azonosítója", "HIBA")
    }
}
function Teszt17() {
    let tesztElem = document.querySelectorAll("input");
    try {
        if (tesztElem[4].classList == "form-control") {
            ujVisszajelzoSor("(17.) Ötödik input mező bootstrap osztálya", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(17.) Ötödik input mező bootstrap osztálya", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(17.) Ötödik input mező bootstrap osztálya", "HIBA")
    }
}
function Teszt18() {
    let tesztElem = document.querySelectorAll("input");
    try {
        if (tesztElem[5].id == "email") {
            ujVisszajelzoSor("(18.) Hatodik input mező azonosító", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(18.) Hatodik input mező azonosító", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(18.) Hatodik input mező azonosító", "HIBA")
    }
}

function Teszt19() {
    let tesztElem = document.querySelectorAll("input");
    try {
        if (tesztElem[5].type == "email") {
            ujVisszajelzoSor("(19.) Hatodik input mező típusa", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(19.) Hatodik input mező típusa", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(19.) Hatodik input mező típusa", "HIBA")
    }
}

function Teszt20() {
    let tesztElem = document.querySelectorAll("input");
    try {
        if (tesztElem[5].classList == "form-control") {
            ujVisszajelzoSor("(20.) Hatodik input mező bootstrap osztálya", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(20.) Hatodik input mező bootstrap osztálya", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(20.) Hatodik input mező bootstrap osztálya", "HIBA")
    }
}

function Teszt21() {
    let tesztElem = document.querySelectorAll("input");
    try {
        if (tesztElem[6].type == "tel") {
            ujVisszajelzoSor("(21.) Hetedik input mező típusa", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(21.) Hetedik input mező típusa", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(21.) Hetedik input mező típusa", "HIBA")
    }
}
function Teszt22() {
    let tesztElem = document.querySelectorAll("input");
    try {
        if (tesztElem[6].id == "tel") {
            ujVisszajelzoSor("(22.) Hetedik input mező azonosítója", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(22.) Hetedik input mező azonosítója", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(22.) Hetedik input mező azonosítója", "HIBA")
    }
}

function Teszt23() {
    let tesztElem = document.querySelectorAll("input");
    try {
        if (tesztElem[6].classList == "form-control") {
            ujVisszajelzoSor("(23.) Hetedik input mező bootstrap osztálya", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(23.) Hetedik input mező bootstrap osztálya", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(23.) Hetedik input mező bootstrap osztálya", "HIBA")
    }
}

function Teszt24() {
    let tesztElem = document.querySelectorAll("input");
    try {
        let igazErtek = false;
        for (let i = 0; i < 6; i++) {
            if (tesztElem[i].classList == "form-control") {
                igazErtek = true;
            }
        }
        if (igazErtek == true) {
            ujVisszajelzoSor("(24.) Form-control osztály minden mezőhöz hozzárendelve", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(24.) Form-control osztály minden mezőhöz hozzárendelve", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(24.) Form-control osztály minden mezőhöz hozzárendelve", "HIBA")
    }
}

function Teszt25() {
    let tesztElem = document.querySelectorAll("label");
    try {
        if (tesztElem[0].innerHTML == "Vezeték név:") {
            ujVisszajelzoSor("(25.) Első label tartalma", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(25.) Első label tartalma", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(25.) Első label tartalma", "HIBA")
    }
}
function Teszt25_1() {
    let tesztElem = document.querySelectorAll("label");
    try {
        if (tesztElem[1].innerHTML == "Kereszt név:") {
            ujVisszajelzoSor("(25.) Második label tartalma", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(25.) Második label tartalma", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(25.) Második label tartalma", "HIBA")
    }
}
function Teszt25_2() {
    let tesztElem = document.querySelectorAll("label");
    try {
        if (tesztElem[2].innerHTML == "Felhasználói név:") {
            ujVisszajelzoSor("(25.) Harmadik label tartalma", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(25.) Harmadik label tartalma", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(25.) Harmadik label tartalma", "HIBA")
    }
}
function Teszt25_3() {
    let tesztElem = document.querySelectorAll("label");
    try {
        if (tesztElem[3].innerHTML == "Jelszó:") {
            ujVisszajelzoSor("(25.) Negyedik label tartalma", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(25.) Negyedik label tartalma", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(25.) Negyedik label tartalma", "HIBA")
    }
}
function Teszt25_4() {
    let tesztElem = document.querySelectorAll("label");
    try {
        if (tesztElem[4].innerHTML == "Jelszó ismét:") {
            ujVisszajelzoSor("(25.) Ötödik label tartalma", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(25.) Ötödik label tartalma", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(25.) Ötödik label tartalma", "HIBA")
    }
}
function Teszt25_5() {
    let tesztElem = document.querySelectorAll("label");
    try {
        if (tesztElem[5].innerHTML == "E-mail cím:") {
            ujVisszajelzoSor("(25.) Hatodik label tartalma", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(25.) Hatodik label tartalma", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(25.) Hatodik label tartalma", "HIBA")
    }
}
function Teszt25_6() {
    let tesztElem = document.querySelectorAll("label");
    try {
        if (tesztElem[6].innerHTML == "Telefonszám:") {
            ujVisszajelzoSor("(25.) Hetedik label tartalma", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(25.) Hetedik label tartalma", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(25.) Hetedik label tartalma", "HIBA")
    }
}

function Teszt26() {
    let tesztElem = document.querySelectorAll("small");
    try {
        if (tesztElem[0].classList == "form-text text-muted") {
            ujVisszajelzoSor("(26.) Felhasználói név alatti osztályai", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(26.) Felhasználói név alatti osztályai", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(26.) Felhasználói név alatti osztályai", "HIBA")
    }
}

function Teszt27() {
    let tesztElem = document.querySelectorAll("small");
    try {
        if (tesztElem[0].innerHTML == "Beceneve, mely mások számára is látható.") {
            ujVisszajelzoSor("(27.) Felhasználói név alatti tartalom", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(27.) Felhasználói név alatti tartalom", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(27.) Felhasználói név alatti tartalom", "HIBA")
    }
}

function Teszt28() {
    let tesztElem = document.querySelectorAll("small");
    try {
        if (tesztElem[1].classList == "form-text text-muted") {
            ujVisszajelzoSor("(28.) E-mail mező alatti üzenet osztályai", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(28.) E-mail mező alatti üzenet osztályai", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(28.) E-mail mező alatti üzenet osztályai", "HIBA")
    }
}

function Teszt29() {
    let tesztElem = document.querySelectorAll("small");
    try {
        if (tesztElem[1].innerHTML == "Ide továbbítjuk a legfontosabb tanfolyam információkat.") {
            ujVisszajelzoSor("(29.) E-mail mező alatti üzenet tartalma", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(29.) E-mail mező alatti üzenet tartalma", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(29.) E-mail mező alatti üzenet tartalma", "HIBA")
    }
}

function Teszt30() {
    let tesztElem = document.querySelectorAll("small");
    try {
        if (tesztElem[2].classList == "form-text text-muted") {
            ujVisszajelzoSor("(30.) Telefon mező alatti üzenet osztályai", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(30.) Telefon mező alatti üzenet osztályai", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(30.) Telefon mező alatti üzenet osztályai", "HIBA")
    }
}

function Teszt31() {
    let tesztElem = document.querySelectorAll("small");
    try {
        if (tesztElem[2].innerHTML == "Ha szeretne akár azonnal értesülni a fontosabb hírekről") {
            ujVisszajelzoSor("(31.) Telefon mező alatti üzenet tartalma", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(31.) Telefon mező alatti üzenet tartalma", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(31.) Telefon mező alatti üzenet tartalma", "HIBA")
    }
}
function Teszt32() {
    let tesztElem = document.querySelectorAll("small");
    try {
        let igazErtek = false;
        for (let i = 0; i < 3; i++) {
            if (tesztElem[i].classList == "form-text text-muted") {
                igazErtek = true;
            }
        }
        if (igazErtek == true) {
            ujVisszajelzoSor("(32.) Small mezők osztályai", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(32.) Small mezők osztályai", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(32.) Small mezők osztályai", "HIBA")
    }
}

function Teszt33() {
    let tesztElem = document.querySelector("button");
    try {
        if (tesztElem.classList == "btn btn-primary form-control") {
            ujVisszajelzoSor("(33.) Gomb alapértelmezett bootstrap osztálya", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(33.) Gomb alapértelmezett bootstrap osztálya", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(33.) Gomb alapértelmezett bootstrap osztálya", "HIBA")
    }
}

function Teszt34() {
    let tesztElem = document.querySelector("button");
    try {
        if (tesztElem.classList[1] == "btn-primary") {
            ujVisszajelzoSor("(34.) Gomb színe", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(34.) Gomb színe", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(34.) Gomb színe", "HIBA")
    }
}

function Teszt35() {
    let tesztElem = document.querySelector("button");
    try {
        if (tesztElem.classList[2] == "form-control") {
            ujVisszajelzoSor("(35.) Gomb méretének módosítása, form-control segítségével", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(35.) Gomb méretének módosítása, form-control segítségével", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(35.) Gomb méretének módosítása, form-control segítségével", "HIBA")
    }
}

function Teszt36() {
    let tesztElem = document.querySelector("button");
    try {
        if (tesztElem.innerHTML == "Regisztrálok") {
            ujVisszajelzoSor("(36.) Gomb felirata", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(36.) Gomb felirata", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(36.) Gomb felirata", "HIBA")
    }
}

function Teszt37() {
    let tesztElem = document.querySelectorAll("option");
    try {
        if (tesztElem.length == 4) {
            ujVisszajelzoSor("(37.) Select mezőben lévő elemek száma", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(37.) Select mezőben lévő elemek száma", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(37.) Select mezőben lévő elemek száma", "HIBA")
    }
}

function Teszt38() {
    let tesztElem = document.querySelectorAll("option");
    try {
        let igazErtek = false;
        for (let i = 0; i < tesztElem.length; i++) {
            if (tesztElem[i].selected == 1) {
                igazErtek = true;
            }
        }
        if (igazErtek == true) {
            ujVisszajelzoSor("(38.) Select mezőben kiválasztott elemnek az értéke!", "Megfelelő")
        }
        else {
            ujVisszajelzoSor("(38.) Select mezőben kiválasztott elemnek az értéke!", "NEM Megfelelő")
        }
    }
    catch {
        ujVisszajelzoSor("(38.) Select mezőben kiválasztott elemnek az értéke!", "HIBA")
    }
}

function fuggvenyekMeghivasa() {
    Teszt38();
    Teszt37();
    Teszt36();
    Teszt35();
    Teszt34();
    Teszt33();
    Teszt32();
    Teszt31();
    Teszt30();
    Teszt29();
    Teszt28();
    Teszt27();
    Teszt26();
    Teszt25_6();
    Teszt25_5();
    Teszt25_4();
    Teszt25_3();
    Teszt25_2();
    Teszt25_1();
    Teszt25();
    Teszt24();
    Teszt23();
    Teszt22();
    Teszt21();
    Teszt20();
    Teszt19();
    Teszt18();
    Teszt17();
    Teszt16();
    Teszt15();
    Teszt14();
    Teszt13();
    Teszt12();
    Teszt11();
    Teszt10();
    Teszt09();
    Teszt08();
    Teszt07();
    Teszt06();
    Teszt05();
    Teszt04();
    Teszt03();
    Teszt02();
    Teszt01();
}

fuggvenyekMeghivasa();