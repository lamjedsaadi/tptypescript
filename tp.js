"use strict";
/*function info (){
    for(var i =0 ; i<10 ; i++)
    {
        console.log("i= " + i)
    }
    console.log("final i "+i);
}
info();*/
/*
let somme = (x,y)=>console.log(x+y); // arrow function
somme(1,2);
*/
exports.__esModule = true;
function displayCours(c) {
    console.log("nom " + c.nom + "volume " + c.volume);
}
displayCours({ 'nom': 'angular', 'volume': 30 }, { 'nom': 'angular', 'volume': 30 });
