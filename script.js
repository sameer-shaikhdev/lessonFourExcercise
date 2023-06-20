// console.log("script");

// ex02
// var user=  prompt("give me your username");
// alert("welcome to the website "+ user);


// // ex03

// var primaryButton= document.querySelector("#primary-button");

// function clickEventHandler(){
//   console.log("clicked");
// };

// primaryButton.addEventListener("click", clickEventHandler);


//ex 04

var primaryButton = document.querySelector("#primary-button");
var primaryTextArea = document.querySelector("#txt-area");        //text area refernce in javascript

function clickEventHandler() {
  console.log("clicked");
  console.log("input", primaryTextArea.value);                    //taking input from the textarea onclick and consoling it;
};

primaryButton.addEventListener("click", clickEventHandler);

