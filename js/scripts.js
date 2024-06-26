let count = 1;

setInterval(function(){
    nextImage();
}, 5000);

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }
    var radioBtn = document.getElementById("radio" + count);
    if (radioBtn) {
        radioBtn.checked = true;
    }
}
