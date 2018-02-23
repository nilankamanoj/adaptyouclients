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
      var data = {};

      data["user"] = username;
      data["id"] = id;
      data["value"] = difference;
 

  // construct an HTTP request
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://test.com/capture", true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  xhr.send(JSON.stringify(data));
}

