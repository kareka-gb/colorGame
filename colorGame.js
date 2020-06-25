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
  h1.style.backgroundColor = "rgb(8, 195, 255)";
  //change reset text back to New Colors
  reset.textContent = "New Colors";
  //change content of prompt
  prompt.textContent = "";
}

//maximum number of maxSquares
var maxSquares = 6;
//number of squares
var numSquares = maxSquares;
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
//game mode easy or hard
var mode = document.querySelectorAll(".mode");


//Assigning each color of colors array to squares
assignColors();

//reset button
reset.addEventListener("click", Reset);

//mode
for(var i=0; i<mode.length; i++){
  mode[i].addEventListener("click", function(){
    mode[0].classList.remove("selected");
    mode[1].classList.remove("selected");
    this.classList.add("selected");
    if(this.textContent == "Easy"){
      numSquares = 3;
    } else {
      numSquares = 6;
    }
    Reset();
    //DIsplaying numSquares number of squares
    for(var i=0; i<numSquares; i++){
      squares[i].style.display = "block";
    }
    //removing other squares
    for(var i=numSquares; i<maxSquares; i++){
      squares[i].style.display = "none";
    }
  });
}

for(var i=0; i<squares.length; i++){
  //checking whether chosen color is the same as that of selected color
  squares[i].addEventListener("click", function(){
    var chosenColor = this.style.backgroundColor;
    if(selectedColor.textContent === chosenColor){
      prompt.textContent = "Correct!";
      for(var j=0; j<squares.length; j++){
        squares[j].style.backgroundColor = chosenColor;
        squares[j].style.boxShadow = "-5px 5px 5px white";
      }
      h1.style.backgroundColor = chosenColor;
      reset.textContent = "Play Again!";
    } else {
      prompt.textContent = "Try Again";
      this.style.backgroundColor = "#232323";
      this.style.boxShadow = "none";
    }
  });

}
