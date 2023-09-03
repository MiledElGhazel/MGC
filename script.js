const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting){
          entry.target.classList.add('show');
      } else{
          entry.target.classList.remove('show');
      }
  
    });
  
  })
  
  
  const hiddenElemnets = document.querySelectorAll('.hidden');
  
  hiddenElemnets.forEach((el) => observer.observe(el));

  //-----------------------------------------------------------------------------------------------------------------------------------

  const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

let isDragging = false, startX, startScrollLeft;


//Add EventListener for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ?  -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) =>{
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the intial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; //if isDragging is false return from here
    //Update the scroll position of the carasoul based on the cursor mouvement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () =>{
    isDragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown",dragStart);
carousel.addEventListener("mousemove",dragging);
carousel.addEventListener("mouseup",dragStop);
