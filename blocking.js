/**
 * Created by KINJAL on 1/11/2017.
 */

//reference the fileSystem module that ships with node
var fs = require('fs');

//Drinks
console.log('Displays Drinks:');
var drinks = fs.readFileSync('drink.txt', 'utf8');
console.log(drinks);

//Foods
console.log('Displays Foods:');
var foods = fs.readFileSync('food.txt', 'utf8');
console.log(foods);
