const img = document.getElementById('img');
const upload = document.getElementById('upload');
const saturate = document.getElementById('saturate');
const contrast = document.getElementById('contrast');
const brightness = document.getElementById('brightness');
const sepia = document.getElementById('sepia');
const grayscale = document.getElementById('grayscale');
const blur = document.getElementById('blur');
const hueRotate = document.getElementById('hue-rotate');
const download = document.getElementById('download');
const reset = document.querySelector('.btn-danger');

// hide the button reset, download when loading the page \
window.onload = function(){
    // get the variables and add style none
    download.style.display = 'none';
    reset.style.display = 'none';
}

// 1- get the variable upload 
// 2- onchange - then show the hiding buttons
upload.onchange = function(){
    download.style.display = 'block';
    reset.style.display = 'block';
    // read the file 
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = () =>{
        img.src = file.result;
    }
}