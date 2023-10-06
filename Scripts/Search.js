
let searchContainer =  document.getElementById("search-container");
let searchBox =  document.getElementById("search-div");
let searchImg = document.getElementById("search-img1");
let searchText = document.getElementById("search-text");
let noSubmit = document.querySelector("form.nosubmit").clientWidth;
let search = document.querySelector("input.nosubmit");
let title = document.querySelectorAll(".card-title");
let image = document.querySelectorAll(".card img");
let len = image.length


let dataArr = [];

for(let i=0;i<len;i++){
    dataArr.push({
        name:title[i].innerHTML,
        img:image[i].src
    })
}

let variableSrc =""

function searching(){
   let inputs = search.value.toLowerCase();
  

   for (const obj of dataArr) {
    if (obj.name.toLowerCase().includes(inputs)) {
        searchImg.src = obj.img;
        
        searchText.innerHTML = obj.name;
        visible();
        variableSrc = obj.img;
        
        
       
    }
}


}

 var h2Elements = document.querySelectorAll('h2.card-title');
    

searchContainer.addEventListener("click",()=>{
    
for (var i = 0; i < h2Elements.length; i++) {
    var h2 = h2Elements[i];
    if (h2.textContent == searchText.innerHTML) {
      
      var section = h2.parentElement;
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      break; 
    }
  }
      
    
     notVisible()
})


visible();




searchContainer.style.width= noSubmit +'px'
searchContainer.style.display = "none"





function visible(){
    searchContainer.style.display = "block"
}

function delayedTrigger(callback, delay) {
    setTimeout(callback, delay);
  }
function notVisible(){
    delayedTrigger(()=>{searchContainer.style.display = "none"
},1000);
    
}




searchImg.src = image[0].src
