/**
 * Created by KINJAL on 1/11/2017.
 */


//link to fileSystem library
var fs = require('fs');



//get Drinks
var drinks = fs.readFile('drink.txt','utf8', function
    (err, drinks) {
        if(err){
            console.log(err);
            return;
        }
        //if we get drinks, print them out
    console.log(drink);

    //drink heading
    console.log('\nDisplay Foods: ');
});
//drink heading
console.log('Display Drinks: ');



//get Foods
var foods = fs.readFile('food.txt','utf8', function
    (err, foods) {
    //if we get drinks, print them out
    console.log(food);
});

