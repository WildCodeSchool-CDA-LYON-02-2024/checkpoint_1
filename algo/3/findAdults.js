/*
Voici un exemple de tableau de personnes.
Écris une fonction qui, à partir d'un tableau similaire reçu en paramètre, renverra un nouveau tableau, lui-même contenant deux sous-tableaux :
- Le premier contient uniquement des femmes adultes
- Le second ne contient que des hommes adultes
(Étant donné qu'une personne est un adulte si elle a 18 ans ou plus)
*/

function findAdults(persons) {
  for (let index in persons) {
    console.log(index);
  }

  // let table = [];
  // let adultWomen = [];
  // let adultMen = [];
  //
  // for (let person in persons) {
  //   if (person.age >= 18) {
  //     if (person.sex === "female") {
  //       adultWomen.push(person);
  //       console.log(adultWomen);
  //     } else adultMen.push(person);
  //   }
  // }
  //
  // return table = adultWomen + adultMen;
  // return table;
}

module.exports = findAdults;