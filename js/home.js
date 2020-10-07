
//GALLERY DISPLAY

let counter = 0; 

let galleryPresentation = ()=>{
    let picArray = ["url('pics/tempPics/ladderdrill.png')", "url('pics/tempPics/IMG_0689.JPG')",
    "url('pics/tempPics/IMG_0687.jpg", "url('pics/tempPics/IMG_0699.jpg')"];
    let canvas = document.getElementById("galleryPics"); 

    canvas.style.backgroundImage = picArray[counter]; 
    counter = (counter +1)% picArray.length; 
   
}

setInterval(()=>{
    galleryPresentation(); 
}, 3000); 



// DISPLAY COACHES INFORMATION

let coaches;  
var xhr = new XMLHttpRequest();
xhr.open('GET', "coaches.json", true);
xhr.responseType = 'text';
xhr.send();
let firstButton =   document.getElementById('coachname1'); 
let coachButtons = document.querySelectorAll("#coachesButtonDiv button");

xhr.onload = function() {
    if(xhr.status === 200) {
        coaches = JSON.parse(xhr.responseText);
        displayFirstCoach(0);
  
    } 
} 

//ROTATE THROUGH COACHES

let coachCounter = 0; 
function displayOtherCoaches(){
       if (coachCounter < 2) {
        coachCounter += 1;
        displayFirstCoach(coachCounter);
       
        console.log(coachCounter); 
       } else {
           coachCounter = 0; 
        displayFirstCoach(coachCounter); 

       }
    
   
}

//DISPLAY COACH INFO FUNCTION 

function displayFirstCoach(x){
    firstButton.innerText = coaches[x].fullname; 
   let experience = displayAsP(coaches[x].experience); 
   document.getElementById('experience').innerHTML = experience
   document.getElementById('formerTeams').innerHTML = displayAsP(coaches[x].soccerclubs); 
   document.getElementById('certifications').innerHTML = displayAsP(coaches[x].certifications)
    document.getElementById('coachPicture').src = coaches[x].picture; 
}
 

function displayAsP(array){
    let post = ""; 
    array.forEach(element => {
        post += `<p>${element}</p>`;
    });
    return post; 
}


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