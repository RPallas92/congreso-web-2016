var R = require('ramda');
  
// Example Data
var programmingLanguages = ["Haskell", "Elm", "PureScript", "Java", "Scala"];


// Exercise 1:
// ============
// Añade a allLanguages todos los elementos de programmingLanguages utilizando forEach y devuelve allLanguages
var exercise1 = function(programmingLanguages){
  var allLanguages = []
  programmingLanguages.forEach(lang => allLanguages.push(lang))
  return allLanguages 
} 



module.exports = { programmingLanguages: programmingLanguages,
                   exercise1: exercise1
                 };
