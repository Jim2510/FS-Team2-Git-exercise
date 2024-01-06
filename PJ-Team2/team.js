// Dichiarazione array students

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
    }
]


// Funzione che prende come parametro un array e cicla gli elementi riordinati in ordine alfabetico tramite il metodo sort

function orderStudents(student) {
    student.sort((a, b) => {
        if (a.surname < b.surname) {
            return -1;
        } else {
            return 1;
        }
    }).forEach(element => console.log(`${element.surname} ${element.name}`))
}

// FELICE




/*Creo una funzione che mi ritorna un array ordinato per età crescente(utilizzando il metodo sort che compara le proprietà age degli oggetti).
Tramite il metodo foreach mi stampo il nome e l'età degli oggetti*/

function orderAge(students) {
    return students.sort((student, student2) => student.age - student2.age)
        .forEach((student) => console.log(student.name, student.age))
}

// GABRIELE



// Utilizzo metodo map per restituire un array contentente solo le proprietà ages alla quale viene applicato il sort per mettere in ordine
// gli elementi e viene quindi calcolato l'indice corrispondente all'età centrale. 
// se l'array ha una lunghezza pari, verrà presa l'età a metà tra i due valori centrali tramite il metodo find.

function calculateMiddleAge(students) {
    const ages = students.map(student => student.age).sort((a, b) => a - b)
    const middleIndex = Math.floor(ages.length / 2)
    const middleAge = ages[middleIndex]
    const middleAgedStudent = students.find(student => student.age === middleAge)
    console.log(`Middle age student: ${middleAgedStudent.name} - ${middleAgedStudent.age}`)
}

// GIANMARCO



// funzione che cicla gli elementi dell'array e valuta se la proprietà petName non è una stringa vuota e ne ritorna il valore della proprietà

function petName(students) {
    students.forEach(element => {
        if (element.petName !== "") {
            console.log(element.name + ": " + element.petName)
        }
    });
}

// DAVID




// Chiamata delle funzioni
console.log('Students in alphabetical order: ')
orderStudents(students)
console.log('Students in age order: ')
orderAge(students)
calculateMiddleAge(students)
console.log('Students with pets: ')
petName(students)