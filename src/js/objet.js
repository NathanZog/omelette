let personne = {
    nom : "Lionel Messi",
    lieu : "Barcelone", 
    argent : 400000,
    mainDroite : "",
    mainGauche : "",
    seDeplacer(lieu){

    },
    payerArticle(article){

    },
    couper(ingredient,outil){

    },
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
    personnes : [],
    paniers :[],
    ingredients :[],
}

let poele ={
    contenu : [],
    cuir(){
        this.contenu = "cuit";
    }
}
let myCuisson = setTimeout(poele.cuir,4000);

let bol ={
    contenu :[],
    melanger(nomMelange){
        newMelange = `${nomMelange} pas cuit`
    }
}


export {personne,maison,outil,epicerie,poele,myCuisson,bol};