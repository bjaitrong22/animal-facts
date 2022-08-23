window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
  

    let turtle = document.getElementById("turtle");
    turtle.setAttribute("class", "hidden");
    let whale = document.getElementById("whale");
    whale.setAttribute("class", "hidden");


    const animal = document.querySelector("input#animal").value;

    if (animal === turtle) {
      turtle.removeAttribute("class");
    } else {
      whale.removeAttribute("class");
    }
  };
};
