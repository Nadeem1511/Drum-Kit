// document.querySelectorAll(".drum")[0].addEventListener("click",testing);
// document.querySelectorAll(".drum")[1].addEventListener("click",testing);
// document.querySelectorAll(".drum")[2].addEventListener("click",testing);
// document.querySelectorAll(".drum")[3].addEventListener("click",testing);
// document.querySelectorAll(".drum")[4].addEventListener("click",testing);
// document.querySelectorAll(".drum")[5].addEventListener("click",testing);
// document.querySelectorAll(".drum")[6].addEventListener("click",testing);
// function testing(){
//     alert("I got clicked");
// }

//Script for click
for (var i=0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var innerButton = this.innerHTML;
        makeSound(innerButton);
        buttonAnimation(innerButton);
    });
}

//Script for Keyboard keys
document.addEventListener("keydown" , function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

//Callback function
function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;
            
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
            break;

        default: 
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
