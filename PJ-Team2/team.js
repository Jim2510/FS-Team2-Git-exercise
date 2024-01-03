const students = [{
    name: "Gabriele",
    surname: "Nicotra",
    age: 23,
    city: "Catania",
    hobby: "Cinema",
    favoriteFood: "Pizza",
    favoriteVideoGame: "Call of Duty",
    favoriteFilm: "A clockwork orange",
    favoriteBook: "1984",
    petName: ""


},
{
    name: "Felice",
    surname: "Curcetti",
    age: 33,
    city: "Foggia",
    hobby: "Cinema",
    favoriteFood: "Sushi",
    favoriteVideoGame: "",
    favoriteFilm: "",
    favoriteBook: "",
    petName: ""


},
{
    name: "Gianmarco",
    surname: "Guglielmino",
    age: 29,
    city: "Lodi",
    hobby: "Music Producer",
    favoriteFood: "Italian food",
    favoriteVideoGame: "Counter Strike",
    favoriteFilm: "Casino",
    favoriteBook: "LOTR",
    petName: "Walter"


},
{
    name: "David",
    surname: "Bodrug",
    age: 22,
    city: "Milano",
    hobby: "Gym",
    favoriteFood: "Sushi",
    favoriteVideoGame: "COD",
    favoriteFilm: "Joker",
    favoriteBook: "you & me",
    petName: "Pollon"


},

]

function nome(student) {

    student.sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }).forEach(element => console.log(element.name))

    student.sort(function (a, b) {
        if (a.surname < b.surname) {
            return -1;
        }
        if (a.surname > b.surname) {
            return 1;
        }
        return 0;
    }).forEach(element => console.log(element.surname))

}
nome(students)

//utilizzato metodo 'sort()' per mettere in ordine alfabetico comparandole proprieta 'name' e 'surname' dell oggetto e il metodo 'forEac()' per iterare l array .

// - Print the team in age order (name age).
function task2(students) {
    return students.sort((student, student2) => student.age - student2.age)
        .forEach((student) => console.log(student.name, student.age))

}
task2(students)
/*Creo una funzione che mi ritorna un array ordinato per età crescente(utilizzando il metodo sort che compara le proprietà age degli oggetti).
Tramite il metodo foreach mi stampo il nome e l'età degli oggetti*/


function calculateMiddleAge(students) {

    // utilizzo del metodo map per ritornare un nuovo array con le proprietà age degli oggetti ordinate.
    const ages = students.map(student => student.age).sort((a, b) => a - b);
    // indice età intermedia
    const middleIndex = Math.floor(ages.length / 2);
    // applicazione di middleIndex sull'array mappato
    const middleAge = ages[middleIndex];
  
    // metodo find che restituisce solo un elemento che rispecchia la condizione che restituisce l'emento desiderato comparandolo con la
    // variabile middleAge
    const middleAgedStudent = students.find(student => student.age === middleAge);
    console.log(`Middle age student: ${middleAgedStudent.name} - ${middleAgedStudent.age}`);
  }
  

  // chiamata della funzione
  calculateMiddleAge(students);
