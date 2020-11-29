import {galleryPresentation} from '../js/gallery.js';
import {coachInformation} from '../js/coaches.js';
//GALLERY DISPLAY
setInterval(()=>{
    galleryPresentation();
}, 3000);
//COACH INFORMATION DISPLAY
coachInformation();



//CALENDAR

let calendarButton = document.getElementById('calendarButton');

calendarButton.onclick = ()=>{
    let calendar = document.getElementById('googleCalendar');
    if(calendarButton.innerText === "SCHEDULE ++"){
        calendarButton.innerText = "SCHEDULE --";
        calendar.style.display = 'block';
    }else{
        calendarButton.innerText = "SCHEDULE ++";
        calendar.style.display = 'none';
    }


}

//GENERAL CLOSE BUTTON

let xButtons = document.getElementsByClassName("x");

for (const x of xButtons) {
    x.onclick = ()=>{
        x.parentNode.parentNode.style.display = 'none';
    }
}

//GENERAL INFO LINKS

let links = document.querySelectorAll("#generalInfoSection a");

for(const link of links){
    link.onclick = ()=>{
        if (link.innerText === "Privacy Policy") {
            document.getElementsByClassName("generalInformation")[0].style.display = "block";

        }
        else if(link.innerText === "National D Lincese Details"){

            window.open('https://learning.ussoccer.com/coach/courses/available/3/course-info', '_blank');
        }
        else if(link.innerText === "Waiver Information"){
            document.getElementsByClassName("generalInformation")[1].style.display = "block";
        }
    }
}
