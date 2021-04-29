// //Exo 1
// function bonjour() {
//     return console.log("Bonjour");
// }
// bonjour();
// //Exo2
// function calcul() {
//     return console.log(5+5);
// }
// calcul()
// //Exo3
// function salutation(prenom) {
//     return console.log("Bonjour "+prenom);
// }
// salutation("Andy")
// //Exo4
// function types(param1,param2,param3) {
//     return console.log(typeof param1,typeof param2, typeof param3);
// }
// types(true,"moi",1)

//Exos Logique
//Exo1

// function choose() {
//     let chiffre;
//     let hasard  = 10 //Math.round(Math.random()*20)
//     let i =0;
//     let result;
//     while (i<5 && chiffre!=hasard) {
//         chiffre=+prompt('Devinez le chiffre');
//         result = Math.abs(chiffre-hasard)
//         if (result ==0) { //on a trouvé le bon resultat
//             alert("Yes");
//             i=5 //on sort de la boucle
//         } else if (result==1){ //on est à 1 chiffre de la réponse
//             alert("Brulant");
//             i++ //met le compteur à 1 a chaque fois qu'il rentre dans une condition !
//         } else if(result==2){ //on est à 2 chiffres de la réponse
//             alert("Chaud");
//             i++
//         } else if (result<=5){
//             alert("Tiède");
//             i++
//         }else if (result>=5){
//             alert("Froid");
//             i++
//         }
        
//     }
//     console.log("La partie est terminée");
// }
// choose()

//Exo2 //Faux utiliser tab[i] Pour que la modification soit effectuée (et non element pour juste afficher ce qu'on lui demande ).Le soucis ici cest qu'il ne modifie pas vraiment le tableau. VOIR CORRECTION

// function letters() {
//     let tab =["string",34,true];
//     tab.forEach((element,i) => {
//         let type =typeof element
//         console.log(type);
//         switch (type) {
//             case "string":
//                 return  console.log(element.charAt(0).toUpperCase()+element.substring(1).toLowerCase()); 
//             case "number":
//                 return console.log(Math.pow(element,2)); 
//             case "boolean":
//                 if (element==true) {
//                     return console.log( element=false);
//                 }else{
//                     return console.log( element =true);
//                 }
//             default:
//                 return console.log("Erreur");
//                 ;
//         }
//     });
// }
// letters(); 

//Exo 3 //Voir correction
// let moinMoyenne = [];
// let moyenne = [];
// let plusMoyenne = [];
// function data(prenom,salaire) {
//     if (salaire <1600) {
//         moinMoyenne.push(prenom);
//     } else if (salaire >=1600 && salaire <=1800){
//         moyenne.push (prenom);
//     }else if(salaire >1800){
//         plusMoyenne.push(prenom);
//     }
//     return moinMoyenne,moyenne,plusMoyenne
// }

// data("babar",2000); //Mettre des prompts 
// data("Andy",1500);
// data ("Cactus",1700);
// data("Tomy",1780);
// data("Arek",1000);
// data("Hieroglyphe",2500);

// console.log(moinMoyenne,moyenne,plusMoyenne);


//Ex4
// let concert=[];
// function party(prenom,age) {

//     if (age>=18 && concert.length<7) {
//         concert.push(prenom)
//     } else {
//         console.log("Vous ne rentrez pas");
//     }
//     concert.forEach(element => {
//     element.charAt(0).toUpperCase()+element.substring(1).toLowerCase()
//     });
//     return
// }
// party("andy",16)
// party("cactus",26)
// party("regis",31)
// party("kevin",23)
// party("luc",17)
// party("kangou",19)
// party("karibou",20)
// party("kakahuete",21)
// party("krichka",22)
// party("kraznik",24)


// console.log(concert, concert.length);