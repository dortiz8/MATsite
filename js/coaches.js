export let coachInformation = () => {
    let coaches;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "../coaches.json", true);
    xhr.responseType = 'text';
    xhr.send();
    let firstButton = document.getElementById('coachname1');
    let coachButtons = document.querySelectorAll("#coachesButtonDiv button");

    xhr.onload = function () {
        if (xhr.status === 200) {
            coaches = JSON.parse(xhr.responseText);
            let coachCounter = 0;
            displayFirstCoach(coachCounter);
            displayCoaches(coachCounter);

        }
    }

    let displayCoaches = (x)=>{
        firstButton.onclick = ()=>{
            if(x === 0){
                x += 1;
                displayFirstCoach(x);
            }
            else{
                x-= 1;
                displayFirstCoach(x);
            }
        }
    }

    //DISPLAY COACH INFO FUNCTION

    function displayFirstCoach(x) {
        firstButton.innerText = coaches[x].fullname;
        let experience = displayAsP(coaches[x].experience);
        document.getElementById('experience').innerHTML = experience
        document.getElementById('formerTeams').innerHTML = displayAsP(coaches[x].soccerclubs);
        document.getElementById('certifications').innerHTML = displayAsP(coaches[x].certifications)
        document.getElementById('coachPicture').style.backgroundImage = `url('../${coaches[x].picture}')`;
    }


    function displayAsP(array) {
        let post = "";
        array.forEach(element => {
            post += `<p>${element}</p>`;
        });
        return post;
    }

}
