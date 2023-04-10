function findBottomOfTestimonialImage(){
    alert("here");
    let testimonialImage =  document.getElementById("testimonialImage");
    let testimonialSelector =  document.getElementById("testimonialSelector");
    let imageBottomCoord = testimonialImage.getBoundingClientRect().bottom;
    let selectorCoords = testimonialSelector.getBoundingClientRect();
    let selectorTopCoord = selectorCoords.top;
    let selectorBottomCoord = selectorCoords.bottom;
    let selectorOffset = (selectorBottomCoord-selectorTopCoord)/2;

    testimonialSelector.style.top = imageBottomCoord - selectorOffset;
}

window.addEventListener("resize", function() {
    alert("hi");
});
