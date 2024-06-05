const zoomIn = document.querySelector(".zoom_in");
const zoomOut = document.querySelector(".zoom_out");
const download = document.querySelector("#download");
const containeur = document.querySelector(".containeur");
const ctrlBtn = document.querySelector(".ctrl_btn");
const body = document.querySelector("body");
const profileImg = document.querySelector(".profile_text img");
const frame = document.querySelector(".frame");
const clossFrame = document.querySelector(".frame .close");

console.log(containeur);

let defaultvalue = 1;

zoomIn.addEventListener("click", ()=>{
    defaultvalue+=.02;
    containeur.style.transform = "scale("+`${defaultvalue}`+")"; 
    })

zoomOut.addEventListener("click", ()=>{
    defaultvalue-=.02;
    containeur.style.transform = "scale("+`${defaultvalue}`+")"; 
})

download.addEventListener("click", ()=>{
    let downloadLink = document.createElement("a");
    let url = "./images/";
    downloadLink.href = url;
    downloadLink.download = "cv.jpg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    downloadLink.remove();
    alert("cv telechargé avec succes !");
})

profileImg.addEventListener("dblclick", ()=>{
    frame.className = frame.className == "frame active" ? "frame close":"frame active";
    containeur.className.toggle = "active";
})

clossFrame.addEventListener("click", ()=>{
    frame.className = frame.className == "frame active" ? "frame close":"frame active";
})