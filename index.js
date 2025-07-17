
for(let i = 0; i < 7; i++)
{
document.querySelectorAll("button")[i].addEventListener("click",gotClicked);

function gotClicked()
{
    //alert("I got clicked");
    
    //console.log(this.innerText);
    //this.style.color = "white";

    let button = this.innerHTML;
    makeSound(button);
    
}
}

document.addEventListener("keydown", function(){
    //alert("key was pressed");
    makeSound(event.key);
});

function makeSound(key)
{
    switch (key) {
        case "w":
            let audio1 = new Audio("tom-1.mp3");
            audio1.play();
            break;
        case "a":
            let audio2 = new Audio("tom-2.mp3");
            audio2.play();
            break;
        case "s":
            let audio3 = new Audio("tom-3.mp3");
            audio3.play();
            break;
        case "d":
            let audio4 = new Audio("tom-4.mp3");
            audio4.play();
            break;
        case "j":
            let audio5 = new Audio("snare.mp3");
            audio5.play();
            break;
        case "k":
            let audio6 = new Audio("crash.mp3");
            audio6.play();
            break;
        case "l":
            let audio7 = new Audio("kick-bass.mp3");
            audio7.play();
            break;
    
        default:
            alert("❌Key not available for music!");
            break;
    }
    
}