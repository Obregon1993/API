


var animals=["dog","cat","rabbit","hamster","goldfish","skunk","bird","turtle","crab","chicken","pig"];



function createButtons() {
  $("#buttons").empty();
        for (let index = 0; index <animals.length; index++) {
        let button = $("<button>"+animals[index]+"</button>");
        button.attr("data-name", animals[index]);
        button.addClass("button");
        $("#buttons").append(" ");
        $("#buttons").append(button);
    }
    
}


 function displayGif () {
    var animalButton=$(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animalButton + "&api_key=KMQSbfo1B09YmfDrVddE8Ul5OJvMoHzD&limit=10";

 
 $.ajax({
    url: queryURL,
    method: "GET"
  })
    
    .then(function(response) {
      
      var results = response.data;
      console.log();

      for (var i = 0; i < results.length; i++) {

        // Only taking action if the photo has an appropriate rating
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
          // Creating a div for the gif
          var gifDiv = $("<div>");

          // Storing the result item's rating
          var rating = results[i].rating;

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + rating);

          // Creating an image tag
          var animalImage = $("<img>");

          // Giving the image tag an src attribute of a proprty pulled off the
          // result item
          animalImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and personImage we created to the "gifDiv" div we created
          gifDiv.append(p);
          gifDiv.append(animalImage);

          // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
          $("#images").prepend(gifDiv);
        }
      }
})

}

$("#add-gif").on("click",function (event) {
  event.preventDefault();

  let gif = $("#gif-input").val().trim();

  animals.push(gif);

  createButtons();
})
$(document).on("click", ".button", displayGif);

createButtons();

      // Calling the renderButtons function to display the intial buttons
      