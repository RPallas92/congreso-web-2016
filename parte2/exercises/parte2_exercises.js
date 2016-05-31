var R = require('ramda');
  
// Example Data
var programmingLanguages = ["Haskell", "Elm", "PureScript", "Java", "Scala"];

var newReleases = [
      {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id:432534, time:65876586 }]
      },
      {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
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


var movieLists = [
      {
        name: "Instant Queue",
        videos : [
          {
            "id": 70111470,
            "title": "Die Hard",
            "boxarts": [
              { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
              { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
          },
          {
            "id": 654356453,
            "title": "Bad Boys",
            "boxarts": [
              { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
              { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id:432534, time:65876586 }]
          }
        ]
      },
      {
        name: "New Releases",
        videos: [
          {
            "id": 65432445,
            "title": "The Chamber",
            "boxarts": [
              { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
              { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
          },
          {
            "id": 675465,
            "title": "Fracture",
            "boxarts": [
              { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
              { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
              { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id:432534, time:65876586 }]
          }
        ]
      }
    ];


// Exercise 1:
// ============
// Añade a allLanguages todos los elementos de programmingLanguages utilizando forEach y devuelve allLanguages
var exercise1 = function(programmingLanguages){
  var allLanguages = []

  //TODO


  return allLanguages 
} 

//Exercise 2
//====================
// Proyecta {id, title} en videoAndTitlePairs y devuelvelo
var exercise2 = function(){
  var videoAndTitlePairs = [];

  //TODO


  return videoAndTitlePairs;
    
}

//Exercise 3
//====================
// Lo mismo que el ejercicio 2, utilizando map
var exercise3 = function(){
  //TODO
}

//Exercise 4:
//=============
// Filtra los nuevos lanzamientos cuyo rating sea mayor que 4 y devuelvelos
var exercise4 = function(){
  //TODO
}

//Exercise 5:
//=============
// Encadena las funciones filter y map para seleccionar el id y el title de todos los videos con rating 5 y devuelve el resultado
var exercise5 = function(){
  //TODO
}

//Exercise 6: 
//================
// Implementa concatAll

Array.prototype.concatAll = function() {
  var results = [];
  //TODO

  return results;
};


//Exercise 7
//===============
//  Utiliza map y concatAll para aplanar movieLists en una lista de ids de video

var exercise7 = function(){ 
  //TODO
}


//Exercise 8
//===============
// Utiliza una o más meves map, concatAll y filter para crear un array con los siguientes ítems a partir de movieLists
// [
//     {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
//     {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
//     {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
//     {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
// ];
var exercise8 = function(){ 
  //TODO
}






module.exports = { programmingLanguages: programmingLanguages,
                   exercise1: exercise1,
                   exercise2: exercise2,
                   exercise3: exercise3,
                   exercise4: exercise4,
                   exercise5: exercise5,
                   exercise7: exercise7,
                   exercise8: exercise8
                 };
