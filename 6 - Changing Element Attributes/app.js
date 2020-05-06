const image = document.getElementById("image");
const input = document.getElementById("input");
const button = document.getElementById("submit");
/*alt*/
/*const image = document.querySelector("#image");*/
console.log (image);


button.addEventListener("click", () =>{
    image.src = input.value;
});


