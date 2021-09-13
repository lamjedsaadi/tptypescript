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

/*let tab:any[]=[12,"angular",true,"a"];
for(var i =0 ; i<tab.length ; i++)
{
    console.log("i= " + tab[i])
}
console.log("final i "+i);*/
import { cours,etudiant } from "./modele";
function displayCours(c:cours){
    console.log("nom "+c.nom + "volume "+c.volume);

}
displayCours(
    {'nom':'angular','volume':30}
)
