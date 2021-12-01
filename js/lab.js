/*
 * Authors: Sonia Ellis, Katana Parker, Raymond Wong, Alexis Adolpho, and Michel Nguyen
 * Created: 11/23/21
 * License: Public Domain
 */


 //finds the button element
 buttonEl = document.getElementById("playbutton");

//"Click to play!" button
 //detects button press
 buttonEl.addEventListener("click", function(){
   document.getElementById("bg-pic").src= "img/fishes.gif";
 });

//button menu
oilEl = document.getElementById("oil");
oilEl.addEventListener("click", function(){
  var newText = "<p>You have chosen oil. This is terrible. The reef has been polluted and living things have been hurt by your actions. </p>";

  document.getElementById("output").innerHTML = newText;
  document.getElementById("bg-pic").src= "img/deadreef.jpg";
})

plasticEl = document.getElementById("plastic");
plasticEl.addEventListener("click", function(){

  document.getElementById("output").innerHTML = "<p>You have chosen plastic. This is terrible. The reef has been polluted and living things have been hurt by your actions. </p>";
  document.getElementById("bg-pic").src= "img/deadreef.jpg";
})

trashEl = document.getElementById("trash");
trashEl.addEventListener("click", function(){

  document.getElementById("output").innerHTML = "<p>You have chosen trash. This is terrible. The reef has been polluted and living things have been hurt by your actions. </p>";
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
