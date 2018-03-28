var data = "user="+username;

var xhr = new XMLHttpRequest();


xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://adaptyoumain.herokuapp.com/capture/control");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.send(data);

var arrayLength = elements.length;
for (var i = 0; i < arrayLength; i++) {
    element = elements[i];
document.getElementById(element).addEventListener("click", function(e){
    mouseClick(e.target.id);
});
document.getElementById(element).addEventListener("mouseover", function(e){
    mouseIn(e.target.id);
});
document.getElementById(element).addEventListener("mouseout", function(e){
    mouseOut(e.target.id);
});
}

var time = 0;

function mouseIn(id){
    time = Date.now();
}
function mouseOut(id){
    var difference = Date.now()-time;
    sendData(id,difference);
    
}
function mouseClick(id){
    sendData(id,0);
}    
function sendData(id,difference){
var data = "user="+username+"&id="+id+"&value="+difference;

var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://adaptyoumain.herokuapp.com/capture/save",true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send(data);
}

