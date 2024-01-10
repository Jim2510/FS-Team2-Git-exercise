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
        petName: null
    },
    {
        name: "Felice",
        surname: "Curcetti",
        age: 33,
        city: "Foggia",
        hobby: "Cinema",
        favoriteFood: "Sushi",
        favoriteVideoGame: "",
        favoriteFilm: null,
        favoriteBook: null,
        petName: null
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

const orderBySurname = (array = []) =>  array.sort((a, b) => a.surname.localeCompare(b.surname));

// FELICE


function orderAge(students) {
    return students.sort((student, student2) => student.age - student2.age)
        .forEach((student) => console.log(student.name, student.age))
}

// GABRIELE


const middleAge = (array = []) => Math.floor(array.reduce((sum, stud) => sum + stud.age, 0) / array.length)

// GIANMARCO

function petName(students) {
    students.forEach(element => {
        if (element.petName !== null) {
            console.log(element.name + ": " + element.petName)
        }
    });
}

// DAVID




// Chiamata delle funzioni
console.log(`Students in alphabetical order: `, orderBySurname(students))
orderAge(students)
console.log('Età media: ', middleAge(students))
console.log('Students with pets: ')
petName(students)