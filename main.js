var myheading= document.querySelector('h1')
myheading.innerHTML = 'Hello world'

var myimage = document.querySelector('img')
myimage.onclick = function() {
    var mySrc = myimage.getAttribute('src');
    if (mySrc === 'Gelas awal.jpg') {
        myimage.setAttribute('src', 'Gelas 2.jpg')
    } else {
        myimage.setAttribute('src', 'Gelas awal.jpg')
    }
}

var mybutton = document.querySelector('button');
var myheading = document.querySelector('h1');

function setUsername() {
    var myName = prompt('Please Input your name')
    localStorage.setItem('name', myName)
    myheading.innerHTML = 'Mozzila is Cool' + myName
}

if(!localStorage.getItem('name')){
    setUsername()
} else {
    var storedname = localStorage.getItem(' name');
    myheading.innerHTML = 'mozzila is cool' + storedname
}

mybutton.onclick = function(){
    setUsername()
}
