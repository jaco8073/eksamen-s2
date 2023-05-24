//Tilmeldningsform starter her (Tommy)
select_element = document.getElementById("kønSelect");
let køn = ["Vælg køn (Valgfri)", "Mand", "Kvinde", "Andet"];

// Udvider option-boks baseret på antal køn i array'et
for (let i=0; i < køn.length; i++) {
let opt = køn[i];
select_element.innerHTML += "<option value=\" "+ opt +"\">"+ opt + "</option";
}

document.getElementById("kønSelect").onchange = function(){
    if (document.getElementById("kønSelect").value == 'Vælg køn (Valgfri)');
    else if (document.getElementById("kønSelect").value == 'Mand');
    else if (document.getElementById("kønSelect").value == 'Kvinde');
    else (document.getElementById("kønSelect").value == 'Andet');
}
document.getElementById("kønSelect").selectedIndex = 1;
//Tilmeldningsform slutter her
