function random(num){
  // picking a random number between 0 and num
  return Math.floor(Math.random()*num);
}

function randomColors(num){
  //make an array
  var arr = [];
  //color contains red, green ,blue
  //slecting red, green, blue between 0-255
  var r,g,b;
  for(var i=0; i<num; i++){
    r = Math.floor(Math.random()*256);
    g = Math.floor(Math.random()*256);
    b = Math.floor(Math.random()*256);
    arr.push("rgb("+r+", "+g+", "+b+")");
  }
  //returning that color
  return arr;
}

//function to assign colors to squares
function assignColors(){
  for(var i=0; i<numSquares; i++){
    squares[i].style.backgroundColor = colors[i];
  }
}

//function to reset everything
function Reset(){
  //generate new random Colors
  colors = randomColors(numSquares);
  //select a new random color
  selectedColor.textContent = colors[random(colors.length)];
  //change colors of squares
  assignColors();
  //change background color of h1
  h1.style.backgroundColor = "#232323";
  //change reset text back to New Colors
  reset.textContent = "New Colors";
  //change content of prompt
  prompt.textContent = "";
}

//number of squares
var numSquares = 6;
//picking numsquares number of random colors
var colors = randomColors(numSquares);
//selecting all squares
var squares = document.querySelectorAll(".square");
//To display a selected color to find it in given colors
var selectedColor = document.querySelector(".selectedColor");
selectedColor.textContent = colors[random(colors.length)];
//Selecting paragraph
var prompt = document.querySelector("#prompt");
//h1
var h1 = document.querySelector("h1");
//reset button
var reset = document.getElementById("reset");
//easy and hard buttons
var easybtn = document.getElementById("easybtn");
var hardbtn = document.getElementById("hardbtn");


//Assigning each color of colors array to squares
assignColors();

//reset button
reset.addEventListener("click", Reset);

easybtn.addEventListener("click", function(){
  easybtn.classList.add("selected");
  hardbtn.classList.remove("selected");
  numSquares = 3;
  Reset();
  for(var i=numSquares; i<6; i++){
    squares[i].style.display = "none";
  }
});

hardbtn.addEventListener("click", function(){
  easybtn.classList.remove("selected");
  hardbtn.classList.add("selected");
  numSquares = 6;
  Reset();
  for(var i=3; i<numSquares; i++){
    squares[i].style.display = "block";
  }
});

for(var i=0; i<squares.length; i++){
  //checking whether chosen color is the same as that of selected color
  squares[i].addEventListener("click", function(){
    var chosenColor = this.style.backgroundColor;
    if(selectedColor.textContent === chosenColor){
      prompt.textContent = "CORRECT!";
      for(var j=0; j<squares.length; j++){
        squares[j].style.backgroundColor = chosenColor;
      }
      h1.style.backgroundColor = chosenColor;
      reset.textContent = "Play Again!";
    } else {
      prompt.textContent = "Try Again";
      this.style.backgroundColor = "#232323";
    }
  });

}
