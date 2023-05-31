function startAutoShow() {
  var showcase = document.getElementById("showcase");
  var images = ["https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_1280.jpg", "https://cdn.pixabay.com/photo/2018/10/02/16/12/nature-3719233_1280.jpg", "https://images.unsplash.com/photo-1680631757284-617846a5ef29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8MzI3NzYwfHxlbnwwfHx8fHw%3D&w=1000&q=80", "https://wallpapercave.com/wp/wp10238280.jpg", ];
  var currentIndex = 0;

  function displayImage() {
    showcase.style.backgroundImage = "url('" + images[currentIndex] + "')";
  }

  function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    displayImage();
  }

  setInterval(nextImage, 4000);
}

startAutoShow();