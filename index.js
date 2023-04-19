let testimonialSelectorVar = 0;
let testimonialArray = [["John Tarkpor", "Junior Front-end Developer", "\" If you want to lay the best foundation possible I\’d recommend taking this course.\n"
+ "The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. \"", "./images/image-john.jpg"], ["Tanya Sinclair", "UX Engineer", "\" I\’ve been interested in coding for a while but never taken the jump, until now.\n" 
+ "I couldn\’t recommend this course enough. I\’m now in the job of my dreams and so\n" 
+ "excited about the future. \"", "./images/image-tanya.jpg"]]; 

function findBottomOfTestimonialImage(){
    let testimonialImage = document.getElementById("testimonialImage");
    let testimonialSelector = document.getElementById("testimonialSelector");
    let imageBottomCoord = testimonialImage.getBoundingClientRect().bottom;
    let selectorCoords = testimonialSelector.getBoundingClientRect();
    let selectorTopCoord = selectorCoords.top;
    let selectorBottomCoord = selectorCoords.bottom;
    let selectorOffset = (selectorBottomCoord-selectorTopCoord)/2;

    testimonialSelector.style.top = String(imageBottomCoord - selectorOffset) + "px";
}

function incrementButtonPress(){
    if(testimonialSelectorVar < testimonialArray.length){
        testimonialSelectorVar++;
    } else {
        testimonialSelectorVar = 0;
    }
    document.getElementById("testimonialName").innerHTML = testimonialArray[testimonialSelectorVar][0];
    document.getElementById("testimonialRole").innerHTML = testimonialArray[testimonialSelectorVar][1];
    document.getElementById("quoteText").innerHTML = testimonialArray[testimonialSelectorVar][2];
    document.getElementById("testimonialImage").src = testimonialArray[testimonialSelectorVar][3];
    alert(testimonialSelectorVar);
}

function decrementButtonPress(){
    if(testimonialSelectorVar != 0){
        testimonialSelectorVar--;
    } else {
        testimonialSelectorVar = testimonialArray.length;
    }
    document.getElementById("testimonialName").innerHTML = testimonialArray[testimonialSelectorVar][0];
    document.getElementById("testimonialRole").innerHTML = testimonialArray[testimonialSelectorVar][1];
    document.getElementById("quoteText").innerHTML = testimonialArray[testimonialSelectorVar][2];
    document.getElementById("testimonialImage").src = testimonialArray[testimonialSelectorVar][3];
    alert(testimonialSelectorVar);
}

window.onload = findBottomOfTestimonialImage();
window.addEventListener("resize", findBottomOfTestimonialImage);
