import Ingredient from './classe.js';

import {personne,maison,outil,epicerie,poele,myCuisson,bol} from './objet.js';

let oeuf = new Ingredient("oeuf", "coquille pleine",2)
let oignons = new Ingredient("oignons", "entier",1.5);
let sel = new Ingredient("sel", "moulu",3);
let poivre = new Ingredient("poivre", "moulu",3);
let curcuma = new Ingredient("curcuma", "moulu",2.5);
let paprika = new Ingredient("paprika", "moulu",2.5);

epicerie.ingredients.push(oeuf,oignons,sel,poivre,curcuma,paprika);

console.log(epicerie.ingredients);


console.log(personne,maison,outil,epicerie,poele,myCuisson,bol);


maison.personnes.push(personne);
console.log(`${personne.nom} est a la ${maison.nom}`);
personne.seDeplacer(epicerie.personnes,maison.personnes);
console.log(epicerie,maison);
console.log(`${personne.nom} est actuellement à ${epicerie.nom}`);
personne.prendrePanier();
console.log(epicerie);
console.log(personne);
personne.prendreObjet(epicerie.ingredients);
console.log(personne);
personne.payerArticle(personne.mainDroite);
personne.remettrePanier();
console.log(epicerie);
personne.seDeplacer(maison.personnes,epicerie.personnes);
console.log(epicerie,maison);
console.log(`${personne.nom} rentre a la maison préparer son omelette`);
personne.couper(bol.contenu,outil);
console.log(bol);