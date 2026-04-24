const el = document.getElementById("text");

function removeText() {
    document.getElementById("text").classList.toggle("display");
    document.getElementsByClassName("btns")[5].classList.toggle("active");
}

function blueColor() {
    el.style.color = "blue";
}

function redColor() {
    el.style.color = "red";
}

function greenColor() {
    el.style.color = "green";
}

function yellowColor() {
    el.style.color = "yellow";
}
