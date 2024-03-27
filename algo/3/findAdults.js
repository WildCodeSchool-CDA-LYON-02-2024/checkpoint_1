/*
Voici un exemple de tableau de personnes.
Écris une fonction qui, à partir d'un tableau similaire reçu en paramètre,
renverra un nouveau tableau, lui-même contenant deux sous-tableaux :
- Le premier contient uniquement des femmes adultes
- Le second ne contient que des hommes adultes
(Étant donné qu'une personne est un adulte si elle a 18 ans ou plus)
*/

function findAdults(persons) {
  let adultWomen = [];
  let adultMen = [];

  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) {
      // console.log("Person age =", persons[i].age);
      if (persons[i].sex === "female") {
        // console.log("Person sex =",persons[i].sex);
        adultWomen.push(persons[i]);
        // console.log("adultWomen", adultWomen);
      }
      if (persons[i].sex === "male") {
        // console.log("Person sex =",persons[i].sex);
        adultMen.push(persons[i]);
        // console.log("adultMen", adultMen);
      }
    }
  }
  persons[0] = adultWomen;
  console.log(persons[0]);
  persons[1] = adultMen;
  console.log(persons[1]);
  return persons[0] + persons[1];
}

module.exports = findAdults;