function changeColor() {
    var colors = ["Blue", "Red", "Green", "Black", "Magenta", "Neon", "Yellow", "Purple", "Orange", "Pink", "White"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }