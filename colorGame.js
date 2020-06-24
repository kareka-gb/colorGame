function random(num){
  return Math.floor(Math.random()*num);
}

function randomColors(num){
  var arr = [];
  var r,g,b;
  for(var i=0; i<num; i++){
    r = Math.floor(Math.random()*256);
    g = Math.floor(Math.random()*256);
    b = Math.floor(Math.random()*256);
    arr.push("rgb("+r+", "+g+", "+b+")");
  }
  return arr;
}

var numSquares = 6;
var colors = randomColors(numSquares);

var squares = document.querySelectorAll(".square");

//To display a selected color to find it in given colors
var selectedColor = document.querySelector(".selectedColor");
selectedColor.textContent = colors[random(colors.length)];

//Selecting paragraph
var prompt = document.querySelector("p");

//Assigning each color of colors array to squares
for(var i=0; i<squares.length; i++){
  squares[i].style.backgroundColor = colors[i];
  //checking whether chosen color is the same as that of selected color
  squares[i].addEventListener("click", function(){
    var chosenColor = this.style.backgroundColor;
    if(selectedColor.textContent === chosenColor){
      prompt.textContent = "CORRECT!";
      for(var j=0; j<squares.length; j++){
        squares[j].style.backgroundColor = chosenColor;
      }
    } else {
      prompt.textContent = "Try Again";
      this.style.backgroundColor = "#232323";
    }
  });

}
