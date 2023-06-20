// console.log("script");

// ex02
// var user=  prompt("give me your username");
// alert("welcome to the website "+ user);


// ex03

var primaryButton= document.querySelector("#primary-button");

function clickEventHandler(){
  console.log("clicked");
};

primaryButton.addEventListener("click", clickEventHandler);
