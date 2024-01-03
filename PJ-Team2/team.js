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


}

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