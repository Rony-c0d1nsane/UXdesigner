//exercice basique 1; créer une 
//variable 
var num= 0;
num--;
//var chiffre =3;
console.log(num);
//var chiffre =8;
//console.log(num+chiffre);
//console.log(11 % 3);

var age=57;
var name='José';
var phrase="\"Bonjour "+name+" tu as "+age+" ans aujourd'hui, c'est la fiesta\"";
var last=phrase.length;

console.log(phrase.charAt(last-1));


var passion=["le vélo", "la prospérité"];
var array= [12,"Salut",name,passion];

console.log(array[3][1]);



/* créer un tableau qui s'apelle montab et qui contient 3 nombre
sur ce tableau on utilise la fonction push pour rajouter dans 
le tableau une chaine de caractère, par exemple "hehe"
faisons ensuite un console.log de ce tableau*/
var montab=[5,7,8];
montab.push("hehe");
console.log(montab);
montab.pop();
console.log(montab);




/*Créer 2 variables, name et first name, elles sont initialisées avec des chaines
de caractères
Créer une variables initals=??????
Créer une variable phrase qui est un tableau vide
Dans ce tableau on va ajouter (push) nos variables first name, name, et initials
console log de cette phrase */

var name= "Machin";
var firstName="Chose";

//var initals= name[0]+firstName[0];
var initials=name.charAt(0)+firstName.charAt(0);

var phrase=[];
phrase.push(name,firstName,initials);
console.log(phrase);


function maSuperFonction(){
	console.log("hello");
	console.log(1+2);
}
maSuperFonction();
