window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
  
    let turtle = document.getElementById("turtles");
    turtle.setAttribute("class", "hidden");
    
    let whale = document.getElementById("whales");
    whale.setAttribute("class", "hidden");

    let dolphin = document.getElementById("dolphins");
    dolphin.setAttribute("class", "hidden");

    let didNotChoose = document.getElementById("didNotChoose");
    didNotChoose.setAttribute("class", "hidden");

    const animal = document.querySelector("input#animal").value;

    if (animal === "turtles") {
      turtle.removeAttribute("class");
    } else if (animal === "whales") {
      whale.removeAttribute("class");
    } else if (animal === "dolphins") {
      dolphin.removeAttribute("class");
    } else {
      didNotChoose.removeAttribute("class");
    }
  };
};
