document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
      type: 'fade', // Type of the slider
      perPage: 1, // Number of slides to display at once
      autoplay: true, // Autoplay the slider
      interval: 10000, // Autoplay interval in milliseconds
      rewind: true,
      autoplay: true,
      arrows:false,
      pagination: false,
      transition: 'fade', // Use fade transition
      speed: 3000, // Duration of the transition in milliseconds
      height: '400px'
      
    });
  
    splide.mount(); // Mount the slider
  });