var E = require('./parte2_exercises');
var assert = require("chai").assert;

describe("Parte 2 Exercises", function(){  
  var programmingLanguages = E.programmingLanguages;

  it('Exercise 1', function(){
    assert.deepEqual(E.exercise1(programmingLanguages), programmingLanguages);
  });

});
