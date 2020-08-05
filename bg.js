const body = document.querySelector("body");

const IMG_NUMBER = 3

function handleImgLoad(){
    console.log("finished loading");
}

function paintImage(ImgNumber){
    const image = new Image();
    image.src = `Images/${ImgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
    image.addEventListener("loadend", handleImgLoad);
    /**if you working at API you'll need it, cuz it doesn't have loading 
    you don't need it now..!**/
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}


function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();