
// this is the Javascript file for my website. this is for the external JS but there is also some internal JS such as for the cookie popup in the home page and others throughout the website


// JavaScript for changing the images every few seconds

let currentImage = 1; // Start with the first image

function changeImage() {
  const imageElement = document.getElementById('winner-image');  // the if function is used so if the page is on the first immage, it will swap to image 2 after. 
  
  if (currentImage === 1) {
    imageElement.src = 'pastwinner2.jpg'; // Image 2
    currentImage = 2;  // Update current image index
  } else {
    imageElement.src = 'pastwinner1.jpg'; // Image 1
    currentImage = 1; }
}

// Change the image every 4 seconds // this is so the past winner images change every 4 seconds. 

setInterval(changeImage, 4000); // 4000 milliseconds = 4 seconds
