const form = document.getElementById('recipe-form'); 
const recipeSection = document.querySelector('.recipes'); 

form.addEventListener('submit') (e) => { e.preventDefault(); 

const name = document.getElementById('recipe-name').value; 
const description = document.getElementById('recipe-description').value; 
const imageUrl = document.getElementById('recipe-image').value; 

const newCard = document.createElement('div');
newCard.classList.add('recipe-card');
newCard.innerHTML = '
<img src="${imageUrl || 'placeholder.jpg'}" alt="${name}">
    <><h2>${name}</h2><p>${description}</p><button>Read More</button></>
';      




recipeSection.appendChild(newCard);

form.reset(); 
});