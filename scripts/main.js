let myImage = document.querySelector('h1');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.jpg') {
      myImage.setAttribute ('src','images/red-panda.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox.jpg');
    }
}

document.querySelector('h1').onclick = function() {
    alert('For more information, go to google.com');
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
