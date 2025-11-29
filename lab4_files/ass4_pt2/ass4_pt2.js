const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images = [
  {
    filename: 'pic1.jpg',
    alt: 'Human eye close up'
  },
  {
    filename: 'pic2.jpg',
    alt: 'Rock formation close up'
  },
  {
    filename: 'pic3.jpg',
    alt: 'Purple and white flowers'
  },
  {
    filename: 'pic4.jpg',
    alt: 'Ancient Egyptian art'
  },
  {
    filename: 'pic5.jpg',
    alt: 'Large moth on a tree leaf'
  }
];

//defining the updateDiplayedImage function */
function UpdateDisplayedImage(e){
  
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.alt;
  
}

const baseURL = './Images/';

for (const image of images){

  const newImage = document.createElement('img');
  
  newImage.setAttribute('src', image.filename);
  newImage.setAttribute('alt', image.alt); 

  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', UpdateDisplayedImage);
}