let colorcode = document.getElementsByClassName(".color_code");
let changecolor = document.querySelector(".change_color_btn");
let coppy = document.querySelector(".coppy_btn");
let body = document.querySelector(".body");


changecolor.addEventListener("click", function () {
    let random = Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = '#' + random;
    colorcode.innerHTML = `<p class="color_code">'#' + ${random}</p>`;
})

coppy.addEventListener("click", function () {
    let a 
})