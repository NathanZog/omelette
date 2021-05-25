let personne = {
    nom : "Lionel Messi",
    lieu : "Barcelone", 
    argent : 400000,
    mainDroite : "",
    mainGauche : "",
    seDeplacer(lieuArrivee, lieuDepart){
        lieuArrivee.push(this);
        lieuDepart.splice(0,1);
    },
    payerArticle(){
        for(let i = 0; i<this.mainDroite.length;i++){
            this.argent -= epicerie.ingredients[i].prix;
            epicerie.caisse += epicerie.ingredients[i].prix;
        }
        console.log(personne.argent)
        console.log(epicerie.caisse)
        bol.contenu.push(epicerie.ingredients)
        this.mainDroite.splice(epicerie.ingredients)
    },
    couper(ingredient,outil){
        for(let i = 0; i < bol.contenu[0].length; i++){
            // attention array dans array
            if(ingredient[0][i].etat == "entier"){
                ingredient[0][i].etat = outil.action;
                console.log(`les ${ingredient[0][i].nom} est ${ingredient[0][i].etat}`)
            }else if(ingredient[0][i].etat == "coquille pleine"){
                ingredient[0][i].etat = "cassé"
                console.log(`l'${ingredient[0][i].nom} sont ${ingredient[0][i].etat}`)
            }else{
                console.log(`etat de ${ingredient[0][i].nom} n'est pas entier`)
            }
        }
    },
    prendrePanier(){
        this.mainDroite = epicerie.paniers.panier1.contenu;
        delete epicerie.paniers.panier1;
    },
    remettrePanier(){
        this.mainDroite = "",
        epicerie.paniers = {panier1 :{
            contenu :[],
        },
        panier2 : {
            contenu :[],
        },
        panier3 :{
            contenu : [],
        },
        panier4: {
            contenu : [],
        },};
    },
    prendreObjet(){
        for(let i = 0; i<epicerie.ingredients.length; i++){
            this.mainDroite.push(epicerie.ingredients[i])
            console.log(`${personne.nom} a pris ${epicerie.ingredients[i].nom} et l'a mis dans son panier`)
        }
    }
}

let maison ={
    nom : "maison",
    personnes : [],
}

let outil ={
    nom : "couteau",
    action : "coupé",
}

let epicerie ={
    nom : "La tienda de Juan",
    caisse : 0,
    personnes : [],
    paniers :{
        panier1 : {
            contenu :[],
        },
        panier2 : {
            contenu :[],
        },
        panier3 :{
            contenu : [],
        },
        panier4: {
            contenu : [],
        },
},
    ingredients :[],
}

let poele ={
    contenu : [],
    cuir(){
        setTimeout(()=>{
            let newMelange = "omelette";
            this.contenu.push(bol.contenu);
            poele.contenu.etat = "cuit";
            console.log(`le ${newMelange} est ${poele.contenu.etat}`)
        },4000)
    }
}


let bol ={
    contenu :[],
    melanger(nomMelange){
        nomMelange = newMelange;
        etat = "pas cuit";
        this.contenu = this.contenu;
    }
}




export {personne,maison,outil,epicerie,poele,bol};