/*
================================
SERVICE FILTER FUNCTION
================================
Filters services and updates
active button with fade effect
*/

function filterServices(category, button){

let cards = document.querySelectorAll(".service-card");
let buttons = document.querySelectorAll(".filter-btn");


/* remove active state from all buttons */

buttons.forEach(function(btn){

btn.classList.remove("active");

});


/* activate clicked button */

button.classList.add("active");


/* filter cards */

cards.forEach(function(card){

if(category === "all"){

card.style.display="block";

}

else if(card.classList.contains(category)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

}



/*
================================
READ MORE FUNCTION
================================
Expands card text and adjusts
image to show full content
*/

function toggleText(button){

let card = button.closest(".service-card");
let moreText = card.querySelector(".more-text");


if(moreText.style.display === "block"){

moreText.style.display="none";
button.innerText="Read All";

/* return image to cover */
card.classList.remove("expanded");

}

else{

moreText.style.display="block";
button.innerText="Read Less";

/* show full image */
card.classList.add("expanded");

}

}