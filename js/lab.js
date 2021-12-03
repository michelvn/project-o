/*
 * Authors: Sonia Ellis, Katana Parker, Raymond Wong, Alexis Adolpho, and Michel Nguyen
 * Created: 11/23/21
 * License: Public Domain
 */

 //finds the button element
 buttonEl = document.getElementById("play-button");

//"Click to play!" button
 //detects button press
 buttonEl.addEventListener("click", function(){
   document.getElementById("bg-pic").src= "img/fishes.gif";
 });

//button menu
oilEl = document.getElementById("oil");
oilEl.addEventListener("click", function(){

  document.getElementById("output").innerHTML = "<p>You have chosen oil. This is terrible. The reef has been polluted and living things have been hurt by your actions. <br><br> Juvenile sea turtles can become trapped in oil and mistake it for food. Dolphins and whales can inhale oil, which affects their lungs, immune function and reproduction. Many birds and animals ingest oil when they try to clean themselves, which can poison them. When oil comes into contact with coral, it can kill them or hinder their reproduction, growth, behavior, and development. The entire reef ecosystem can suffer from an oil spill, affecting the many species of fish, crabs, and other marine invertebrates that live in and around coral reefs. <br><br>(https://response.restoration.noaa.gov/about/media/how-do-oil-spills-affect-coral-reefs.html)<br>(https://oceanservice.noaa.gov/facts/oilimpacts.html)</p>";
  document.getElementById("bg-pic").src= "img/deadreef.jpg";
})

plasticEl = document.getElementById("plastic");
plasticEl.addEventListener("click", function(){

  document.getElementById("output").innerHTML = "<p>Fish, seabirds, sea turtles, and marine mammals can become entangled in and ingest plastic debris. This can cause suffocation, starvation, and drowning. Humans are not immune to this threat: While plastics are estimated to take up to hundreds of years to fully decompose, some of them break down much quicker into tiny particles, which in turn end up in the seafood we eat. Corals that come into contact with plastic have an 89 percent chance of contracting disease, compared with a 4 percent likelihood for corals that do not. <br><br> (https://www.pewtrusts.org/en/research-and-analysis/articles/2018/09/24/plastic-pollution-affects-sea-life-throughout-the-ocean)</p>" ;
  document.getElementById("bg-pic").src= "img/deadreef.jpg";
})

trashEl = document.getElementById("trash");
trashEl.addEventListener("click", function(){

  document.getElementById("output").innerHTML = "<p>Materials in trash like plastic are non-degradable which means they will not be absorbed and recycled. When oceanic creatures and even birds consume plastic inadvertently, they choke on it which causes a steady decline in their population. <br><br> (https://www.marineinsight.com/environment/causes-and-effects-of-ocean-dumping/)</p>";
  document.getElementById("bg-pic").src= "img/deadreef.jpg";
})


//an option we considered for input using a text field and button. Later changed to clicking images.
//Functional, with this part written by Alexis. Accounts for upper and lowercase inputs as described.

    // //takes user input and returns requested item
    // function deadlyItems(str) {
    //   word = str;
    //   if ((word == "oil") || (word == "Oil")) {
    //     return "Oil"
    //   }
    //   else if ((word == "trash") || (word == "Trash")) {
    //     return "Trash"
    //   }
    //   else if ((word == "plastic") || (word == "Plastic")) {
    //     return "Plastic"
    //   }
    // }

            //Would have corresponded to input method described above (line:50)
            //"Get item" button
    //detects a press, gives item description, shows a picture of destroyed reef.
     // $("#input-button").click(function(){
     //    var name = document.getElementById("input").value;
     //    var item = deadlyItems(name);
     //    // var newText = "<p>You have chosen " + item + ". This is terrible. The reef has been polluted and living things have been hurt by your actions. </p>";
     //    var destroyedReef = "img/deadreef.jpg";
     //
     //    document.getElementById("output").innerHTML = newText;
     //    document.getElementById("deadreef").src = destroyedReef;
     //
     // })

     // $("#input-button").classList.toggle("show");
     //   var name = document.getElementById("input").value;
     //   var item = deadlyItems(name);
     //   newText = "<p>You have chosen " + item + ". This is terrible.</p>";
     //   document.getElementById("output").innerHTML = newText;
     // })

            //unused template for running an API on the site
     // var myUrl = "https://xkcd.com/info.0.json";
     //
     //
     // //detects click and runs "runAPI" function.
     // $("#activate").click(runAPI);
     //
     // // //prints to our output div
     // // function printOutput(text){
     // //   $("#output").html(text);
     // //   }
     //
     // //processes JSON from an API. runs API.
     // function runAPI() {
     //   console.log("click");
     //   // Using the core $.ajax() method that Wes showed us in lecture
     //   $.ajax({
     //       // API endpoint
     //       url: myUrl,
     //       // GET request
     //       type: "GET",
     //       // data type
     //       dataType: "json",
     //   })
     //
     //   // If the request succeeds
     //   // data is passed back
     //   .done(function(data) {
     //       console.log("Success:", data);
     //       var comicImg = data.img;
     //       var imgTag = "<img src=" + comicImg + ">";
     //       console.log(comicImg, imgTag);
     //       $("#output1").html(imgTag);
     //
     //       var comicTitle = data.title
     //       var titleTag = comicTitle;
     //       $("#output2").html(titleTag);
     //
     //       var comicAlt = data.alt;
     //       var altTag = comicAlt;
     //       $("#output3").html(altTag);
     //
     //
     //
     //   })
     //
     //   // If the request fails
     //   .fail(function(request,error) {
     //       console.log(request, error);
     //   })
     //
     // }
