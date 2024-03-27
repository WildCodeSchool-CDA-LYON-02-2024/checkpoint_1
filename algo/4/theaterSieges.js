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
  const rows = [];
  const numberRows = 26;
  const seatsPerRow = 100;
  let currentRow = 1;

  while (currentRow <= numberRows) {
    const row = [];
    for (let currentSeat = 1; currentSeat <= seatsPerRow; currentSeat++) {
      row.push(`${currentRow}-${currentSeat}`);
    }
    rows.push(row);
    currentRow++;
  }

  return rows;
}

module.exports = theaterSieges;
