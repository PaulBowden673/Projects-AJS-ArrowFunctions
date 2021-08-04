/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [26,27,30];
//let john = ages[0];
//let mary = ages[1];
//let harry = ages[2];
let [john, mary, harry] = ages
console.log(john)
// Destructuring objects
let jobs = {
    mike: 'pilot',
    alex: 'wingman',
    alan: 'steward',
}
let {mike, alex, alan} = jobs
console.log(mike, alex,alan)

// Destructuring subsets
let languages = ['french', 'german','english','chinese']
let [john1, john2] = languages
console.log(john1, john2)
let [,,mary1 , mary2] = languages
console.log( mary1, mary2)
// Using rest parameter syntax
let fruits = ['apple','grape','cherry','kiwi']
let [fav, fav1, ...others] = fruits
console.log(fav,fav1,others)
//Modal Solution
let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const makeList = arr => {
    let list = [];
    for(let itm of arr) {
        let {subjects} = itm;
        list.push(...subjects);
    }
    return [...new Set(list)].sort();
};

let [first, second, ...rest] = makeList(students);
console.log(first, second, rest);
