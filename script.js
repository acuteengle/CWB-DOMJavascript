
// (1)
document.getElementById("myParagraph").innerHTML = "<span style='color: red'>I am a paragraph</span>";

// (2)
let anotherParagraph = document.getElementById("styledText");

anotherParagraph.style.backgroundColor = "lightblue";

anotherParagraph.style.fontSize = "25px";

anotherParagraph.style.color = "green";

// (3)
let textChanger = document.getElementById("textChanger");
textChanger.addEventListener("click", function () {
    document.getElementById("changingText").innerHTML = "My text changed!";
});

// (4)
let textContainer = document.getElementById("textContainer");

let textAdder = document.getElementById("textAdder");

textAdder.addEventListener("click", function () {
    let paragraph = document.createElement("p");
    paragraph.innerHTML = "I was clicked!";
    textContainer.appendChild(paragraph);
});

textAdder.addEventListener("mouseover", function () {
    let paragraph = document.createElement("p");
    paragraph.innerHTML = "I was moused over!";
    textContainer.appendChild(paragraph);
});

textAdder.addEventListener("mouseout", function () {
    let paragraph = document.createElement("p");
    paragraph.innerHTML = "I was moused out!";
    textContainer.appendChild(paragraph);
});

// (5)
function changeGif() {
    document.getElementById("michael").src = "https://media.giphy.com/media/l46CqLVMWzaJUFPLW/giphy.gif";
}

function changePhoto() {
    document.getElementById("michael").src = "https://img.bleacherreport.net/img/images/photos/003/875/045/f747eca6d77ef4822de3a4c98bb4324e_crop_exact.jpg?h=646&w=970&q=70&crop_x=center&crop_y=top";
}

// (6)
document.getElementById("logger").addEventListener("click", function () {
    console.log("I am being logged");
});

// (7)
document.getElementById("myInput").addEventListener("keydown", function () {
    let inputValue = document.getElementById("myInput").value;
    console.log(inputValue);
})