const input = document.getElementById('input');
const button = document.getElementById('submit');
const showhide = document.getElementById('showhide-btn');
const list = document.getElementById('list');


showhide.addEventListener("click", ()=>{
     if(list.style.display == "none") {
         list.style.display = "block";
         showhide.textContent = "hide";
     } else {
         list.style.display = "none";
         showhide.textContent = "show";
     }
});


button.addEventListener('click', () => {
     let listItem = document.createElement('li');
     let list = document.getElementsByTagName('ul')[0];
     listItem.textContent = input.value;
     console.log (listItem);
     list.appendChild(listItem);
     input.value = '';
});