
// function moviePicks(){
//   this.movies = []
// }
function Movie(title, times, age){
  this.title = title;
  this.times = times;
  this.age = age;

}

Movie.prototype.price = function() {
  var ticketGeneral = 10;
  if (this.age === "youth") {
    ticketGeneral = ticketGeneral - 3;
  } else if (this.age === "senior") {
    ticketGeneral = ticketGeneral - 2;
  }
  return ticketGeneral;
 }


  // } else if (this.title === "Titanic") {
  //   ticketGeneral = ticketGeneral + 1;
  //
  // }
 // console.log("This is the cost of the movie: "ticketGeneral)


// movies.prototype.receipt = function() {
//   return this.title + this.times + this.age + this.price;
// }







$(document).ready(function() {
  $("#project").submit(function(event){
    event.preventDefault();

    var inputTitles = $("#titles").val();
    var inputTimes = $("#times").val();
    var inputAge = $("#age").val();

    // console.log("From the user" + inputTimes);
    var newMovie = new Movie(inputTitles, inputTimes, inputAge);
    var price = newMovie.price();
    // console.log("From the object" + newMovie.title);

    //to run the price prototypw, I need to call it on the newMovie object I just made:
    //newMovie.price();

    //var inputResults = calculate(inputTimes, inputTitles, inputAge );
    $("#output").append(price);
  });
});
