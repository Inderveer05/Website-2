function generateRandomText() {
    var texts = ["quam lacus suspendisse faucibus interdum", "Hello", "sed faucibus turpis in eu", "tellus mauris a diam maecenas", "nullam ac tortor vitae purus", "posuere sollicitudin aliquam ultrices sagittis"];
    var randomIndex = Math.floor(Math.random() * texts.length);
    var randomText = texts[randomIndex];
    document.getElementById("randomText").innerText = randomText;
  }