/*
================================
SERVICE FILTER FUNCTION
================================
This function shows services
based on selected category
*/

function filterServices(category){

let cards = document.querySelectorAll(".service-card");

cards.forEach(function(card){

if(category === "all"){

card.style.display = "block";

}

else{

if(card.classList.contains(category)){

card.style.display = "block";

}

else{

card.style.display = "none";

}

}

});

}



/*
================================
READ MORE / READ LESS FUNCTION
================================
Expands hidden service text
*/

function toggleText(button){

let moreText = button.parentElement.querySelector(".more-text");

if(moreText.style.display === "none" || moreText.style.display === ""){

moreText.style.display = "block";

button.innerText = "Read Less";

}

else{

moreText.style.display = "none";

button.innerText = "Read All";

}

}