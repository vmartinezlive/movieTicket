
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

Movie.prototype.times = function() {
    if (this.times === "12") {
      return "Matinee";
    } else {
      return "General Admission";
    }
  }


$(document).ready(function() {
  $("#project").submit(function(event) {
    event.preventDefault();

    var inputTitles = $("#titles").val();
    var inputTimes = $("#times").val();
    var inputAge = $("#age").val();

    // console.log("From the user" + inputTimes);
    var newMovie = new Movie(inputTitles, inputTimes, inputAge);
    // console.log(newMovie);
    newMovie.price();
    var price = newMovie.price();
    // var time = newMovie.times();

    $("#output").append(price);
  });
});
