

function main() {
    var text = document.getElementById('text').value;
    if (text == "")
    {
        alert("Please enter a text ");
    }
    else
    {
        createqr(text);
    }
}

function createqr(text){
    var image = document.getElementById("image");
    image.src = "https://api.qrserver.com/v1/create-qr-code/?size=256x256&data="+text;
    image.style.display = "flex";
    document.getElementById("s-text").style.display = "block";
    document.getElementById("s-text").innerText = text;
}
var text = "QR Code Generator"; 
var i= 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("title").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 250); 
    }
}
window.onload = function() {
    typeWriter();
};