
Mohammed Shirhaan

//Objects in JS

//In objects, we store key value pairs.

let person = {}

//The above creates empty object.

//We can assign new key and values after creating objects as follows

person.name = 'cat';

// We can also create key value pairs while creating the object itself

let person1 = {
    name: 'shirhaan',
    age: 50
}

//And add new properties/key value pairs later as well

person1.mob = 123;

//The keys in objects are stored as strings behind the scenes.
//So it is optional to give double or single quotes to key names.
let animal = {
    "name" : 'dog'

}

//Without quotes, Key names cannot contain number in the start, but can be after a letter
animal.name1 = "test";

//But you can create key begininning with number while creating objects
let a = {
    1: 'test'
}
//Here 1 will be converted to "1" behind the scenes

//If you want to add a key starting with number, you can use dynamic expression syntax
let b ={};
b[1] = 'test';

//What is dynamic expression syntax in Objects? When is it useful?
// - When the key is stored in another variable, we use dynamic expression syntax - using square brackets
// just like in arrays [].

//For example consider the object
let p = {
    name: "shirhaan",
    age: 100
}

//Lets say the key "name" is stored in another variable called "query"
let query = "name";

//How do we access the name property from object p using "query" variable

//If you try to access p.query, JS will look for a key called "query" itself inside object p