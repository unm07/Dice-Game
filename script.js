var button=document.getElementById("roll");

function Roll(){
    var randomNumber1 = Math.random();
    var randomNumber2 = Math.random();
  
    randomNumber1 = randomNumber1 * 6;
    randomNumber1 = Math.floor(randomNumber1);
    randomNumber1 = randomNumber1 + 1;
  
    randomNumber2 = randomNumber2 * 6;
    randomNumber2 = Math.floor(randomNumber2);
    randomNumber2 = randomNumber2 + 1;
  
    var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource1);
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource2);

    if(randomNumber1>randomNumber2){
        var bg_text = document.querySelector("h1");
        bg_text.innerHTML="Player 1 Wins!🚩";
    }
    
    else if(randomNumber1<randomNumber2){
        var bg_text = document.querySelector("h1");
        bg_text.innerHTML="Player 2 Wins!🚩";
    }
    
    else{
        var bg_text = document.querySelector("h1");
        bg_text.innerHTML="Draw!";
    }

};
  
button.addEventListener("click",Roll);