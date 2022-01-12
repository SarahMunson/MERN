console.log(hello);
var hello = 'world';
//prediction was that hello would hoist and it did  not. 
// undefined is what was printed

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// I predicted that var needle's global scope would be changed within the function 

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan)

//the function wasnt called - only value 'super cool' was logged

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//I predicted that chicken is what's logged and then half-chicken

// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food)

//I predict food outside of the function will come back undefined and then chicken and fish will log
//it says mean is not a function, improper logic or syntax was used here

console.log(genre);
var genre = 'disco';
rewind();
function rewind(){
    genre = 'punk';
    console.log(genre);
    var genre = 'rock';
    console.log(genre);
}
console.log(genre);

//disco, punk, rock, disco
//it was actually undefined first, again no hoisting

dojo= 'san jose';
console.log(dojo);
learn();
function learn(){
    dojo = 'seattle';
    console.log(dojo);
    var dojo = 'burbank';
    console.log(dojo);
}
console.log(dojo);

// san jose, seattle, burbank, san jose

console.log(makeDojo('Chicago', 65));
console.log(makeDojo('Berkely', 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"
    }
    return dojo;

}