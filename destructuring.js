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