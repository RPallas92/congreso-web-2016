var E = require('./parte2_exercises');
var assert = require("chai").assert;

describe("Parte 2 Exercises", function(){  

  //DATA
  var programmingLanguages = E.programmingLanguages;
  var exercise2Result = [
      {
        "id": 70111470,
        "title": "Die Hard",
      },
      {
        "id": 654356453,
        "title": "Bad Boys",
      },
      {
        "id": 65432445,
        "title": "The Chamber",
      },
      {
        "id": 675465,
        "title": "Fracture",
      }
    ];

    var exercise4Result = [
      {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id:432534, time:65876586 }]
      },
      {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id:432534, time:65876586 }]
      }
    ];

    var exercise5Result = [
      {
        "id": 654356453,
        "title": "Bad Boys"
      },
      {
        "id": 675465,
        "title": "Fracture"
      }
    ];


    var exercise7Result = [70111470, 654356453, 65432445, 675465];
      
    var exercise8Result = [
        {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
        {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
        {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
        {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" }
    ];


  //TESTS
  it('Exercise 1', function(){
    assert.deepEqual(E.exercise1(programmingLanguages), programmingLanguages);
  });

  it('Exercise 2', function(){
    assert.deepEqual(E.exercise2(), exercise2Result);
  });

  it('Exercise 3', function(){
    assert.deepEqual(E.exercise3(), exercise2Result);
  });
  it('Exercise 4', function(){
    assert.deepEqual(E.exercise4(), exercise4Result);
  });
  it('Exercise 5', function(){
    assert.deepEqual(E.exercise5(), exercise5Result);
  });
  it('Exercise 7', function(){
    assert.deepEqual(E.exercise7(), exercise7Result);
  });
  it('Exercise 8', function(){
    assert.deepEqual(E.exercise8(), exercise8Result);
  });

});
