document.addEventListener("keydown", function() {
    document.querySelector("body").innerHTML = document.querySelector("body").innerHTML + String.fromCharCode(33 + Math.floor(Math.random() * (126 - 33)));
  })