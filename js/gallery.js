let counter = 0;

export let galleryPresentation = ()=>{
    let picArray = ["url('pics/tempPics/ladderdrill.png')", "url('pics/tempPics/IMG_0689.JPG')",
    "url('pics/tempPics/IMG_0687.jpg", "url('pics/tempPics/IMG_0699.jpg')"];
    let canvas = document.getElementById("galleryPics");

    canvas.style.backgroundImage = picArray[counter];
    counter = (counter +1)% picArray.length;

}
