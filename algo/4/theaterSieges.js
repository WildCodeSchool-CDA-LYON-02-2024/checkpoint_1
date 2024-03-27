/*
Un employé de théâtre souhaite obtenir la liste de tous les sièges de sa salle principale.
Dans la salle les places sont réparties comme suit :
   - Il y a 26 colonnes de sièges, numérotées de "1" » à "26".
   - Chaque colonne contient 100 sièges, numérotés de "1" à "100".

Complète la fonction theaterSieges pour qu'elle renvoie un tableau
où chaque sous-tableau répertorie les positions des sièges dans une rangée.

exemple du résultat final :

[
  ["1-1", "1-2", "1-3", ..., "1-100"],
  ["2-1", "2-2", "2-3", ..., "2-100"],
  ...
  ["26-1", "26-2", "26-3", ..., "26-100"]
]
*/

function theaterSieges() {
  let collennes = 26;
  let sieges = 100;
  let array = [];
  for (let i = 1; i <= collennes; i++) {
    let col = [];
    for (let j = 1; j <= sieges; j++) {
      col.push(i + "-" + j);
    }
    array.push(col);
  }
  return array;
}

module.exports = theaterSieges;
