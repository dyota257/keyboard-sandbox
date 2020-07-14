// document.addEventListener("keydown", function() {
//     document.querySelector(".writepage").innerHTML = document.querySelector(".writepage").innerHTML + String.fromCharCode(33 + Math.floor(Math.random() * (126 - 33)));
//   })



document.addEventListener("keydown", function() {
  var key = event.key;
  var text = document.querySelector(".writepage");
  switch (key) {
    
    case "Backspace":
      // if (text.innerHTML.trim().lastIndexOf("<span")===-1){
        var lastSpace = text.innerHTML.trim().lastIndexOf(" ");
        var textHead = text.innerHTML.slice(0, lastSpace);
        console.log(textHead);
        var textTail = text.innerHTML.slice(lastSpace);
        console.log(textTail);
        text.innerHTML = textHead+ "<span style=\"text-decoration:line-through double; color:darkred\">" + textTail + "</span>";
      // } 
      // else {
      //   var lastSpan = text.innerHTML.trim().lastIndexOf("<span");
      //   var textHead = text.textContent.slice(0, lastSpan);
      //   var lastSpace = textHead.trim().lastIndexOf(" ");
      //   var textHeadHead = textHead.slice(0, lastSpace);

      //   var textHeadTail = textHead.slice(lastSpace);
        
      //   textHead = textHeadHead + "<span style=\"text-decoration:line-through double; color:darkred\">" + textHeadTail + "</span>";
        
      //   var textTail = text.innerHTML.slice(lastSpan);
        
      //   text.innerHTML = textHead + textTail;
      //   console.log(textHead);
      // }

      console.log("last space at " + text.innerHTML.lastIndexOf(" "))
      break;
    case "Shift":
      break;
    case "CapsLock":
      break;
    case "Control":
      break;
    case "Alt":
      break;
    case "Meta":
      break;
    case "Tab":
      text.innerHTML = text.innerHTML + "    ";
      break;
    case "Enter":
      text.innerHTML = text.innerHTML + "<br>";
      break;
    default:
      text.innerHTML = text.innerHTML + event.key;
      break;
  }

  console.log(text.innerHTML);
  console.log(event.key);
})