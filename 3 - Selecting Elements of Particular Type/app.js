const myHeading = document.getElementById("myHeading");
const notOrange = document.getElementsByClassName("not-orange");
const list = document.getElementsByTagName("li");

for (let i = 0; i < list.length; i++) {
    list[i].style.color = "orange";
}

for (let i = 0; i < list.length; i++) {
    notOrange[i].style.color = "red";
}