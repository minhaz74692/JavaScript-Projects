

function playSound(property){
    switch (property) {
        case "w":
            let audioA = new Audio("sounds/tom-1.mp3");
            audioA.play();
            break;
        case "a":
            let audioB = new Audio("sounds/tom-2.mp3");
            audioB.play();
            break;
        case "s":
            let audioS = new Audio("sounds/tom-3.mp3");
            audioS.play();
            break;
        case "d":
            let audioD = new Audio("sounds/tom-4.mp3");
            audioD.play();
            break;
        case "j":
            let audioJ = new Audio("sounds/snare.mp3");
            audioJ.play();
            break;
        case "k":
            let audioK = new Audio("sounds/crash.mp3");
            audioK.play();
            break;
        case "l":
            let audioL = new Audio("sounds/kick-bass.mp3");
            audioL.play();
        default:
    };
}
//buttonclick event
let drumNo = document.querySelectorAll(".drum").length;
for (let i = 0; i < drumNo; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("mousedown", function () {
        let buttonInnerHtml = this.innerHTML;
        playSound(buttonInnerHtml);
        this.style.color = "white";
    })
    document.querySelectorAll(".drum")[i].addEventListener("mouseenter", function () {
        this.style.color = "red";
        this.classList.add("animDrum");
    })
    document.querySelectorAll(".drum")[i].addEventListener("mouseout", function () {
        this.style.color = "#DA0463";
        this.classList.remove("animDrum");
    })
};


//Keypress and keyup event
document.addEventListener("keypress", function (e){
    playSound(e.key);
    document.querySelector(`.${e.key}`).style.color = "white";
    document.querySelector(`.${e.key}`).classList.add("animDrum");

})
document.addEventListener("keyup", function (e){
    document.querySelector(`.${e.key}`).style.color = "#DA0463";
    document.querySelector(`.${e.key}`).classList.remove("animDrum");
})