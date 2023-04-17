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

// reset Value when upload new img
function resetValue(){
img.style.filter = 'none';
saturate.value = '100';
contrast.value = '100';
brightness.value = '100';
sepia.value = '0';
grayscale.value = '100';
blur.value = '0';
hueRotate.value ='0';
}
// reset value when click on reset button
reset.addEventListener('click',() => {
saturate.value = '100';
contrast.value = '100';
brightness.value = '100';
sepia.value = '0';
grayscale.value = '100';
blur.value = '0';
hueRotate.value ='0';
img.style.filter = 'none';

})
// hide the button reset, download when loading the page \
window.onload = function(){
    // get the variables and add style none
    download.style.display = 'none';
    reset.style.display = 'none';
}

// 1- get the variable upload 
// 2- onchange - then show the hiding buttons
upload.onchange = function(){
    resetValue();
    download.style.display = 'block';
    reset.style.display = 'block';
    // read the file 
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = () =>{
        img.src = file.result;
    }
}
//======================================
let filters = document.querySelectorAll('ul li input');
filters.forEach(filter => {
    filter.addEventListener('input', function(){
        img.style.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)
        `
    })
}) 

//============================================
// download 
download.addEventListener('click', () => {
   let canvas = document.createElement('canvas');
   canvas.width = img.naturalWidth; 
   canvas.height = img.naturalHeight; 
   let ctx = canvas.getContext('2d');
   ctx.filter = img.style.filter;
   ctx.drawImage(img,0,0);
   let link = document.createElement('a');
   link.download = 'filtered-img.png'
   link.href = canvas.toDataURL();
   link.click();
})