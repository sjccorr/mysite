const images = document.querySelectorAll('#slider img'); /* selecting the img*/
/* with in the element with an id of 'slider' in the html file */
/* getting a node list which is similar to an array but not an array */
const previousImage = document.getElementById("prev"); /* getting the buttons */
const nextImage = document.getElementById("next"); /* in the html prev/next */

let currentIndex = 0;

function reset() {                            /* removing the active class */
  for (let i = 0; i < images.length; i++) {   /*from the images and hiding */
    images[i].classList.remove('active');     /* them--not visible         */
  }                                           /* incrementing throught node */
}                                             /* list gotten with first line */

function initializeSlider() {                   /* active class in css */
  reset();
  images[currentIndex].classList.add('active');
}

function slideLeft() {
  reset();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  images[currentIndex].classList.add('active');
}

function slideRight() {
  reset();
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  images[currentIndex].classList.add('active');
}

initializeSlider();

previousImage.addEventListener('click', function() {
  slideLeft();
});

nextImage.addEventListener('click', function() {
  slideRight();
});

