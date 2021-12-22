const slides = document.querySelector(".slides");   
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  slides.style.left = current + "%";
}

// Controls
document.querySelector(".next-slide").addEventListener("click", function () {
  changeSlide();
});

document.querySelector(".prev-slide").addEventListener("click", function () {
  changeSlide(false);
});

// In the controls when we click on the next slide control , it will run the function changeslide()  , so in the changeslide it will take the arugment 
// next , in if condition with the teritory opertator , if current position is greater than max left (end) then current position will change to -100 , 
// if false current is -1 , 
// so it will move the slides with the their positions.


