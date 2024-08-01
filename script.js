
// health condition
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        // Collapse any other expanded content
        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) {
                item.classList.remove('active');
            }
        });

        // Toggle the clicked content
        content.classList.toggle('active');
    });
});
//nav bar
document.getElementById('navbar-toggler').onclick = function() {
    var nav = document.getElementById('navbarNav');
    nav.classList.toggle('hidden');
}

//homepg
let slideIndex = 0;
            showSlides();
            
            function showSlides() {
              let i;
              let slides = document.getElementsByClassName("mySlides");
              for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
              }
              slideIndex++;
              if (slideIndex > slides.length) {slideIndex = 1}
              slides[slideIndex-1].style.display = "block";
              setTimeout(showSlides, 5000); // Change image every 2 seconds
            }

     //video chenn tapak dam dam
     document.getElementById('openModal').addEventListener('click', function() {
        document.getElementById('videoModal').classList.remove('hidden');
        document.getElementById('videoElement').play();
      });
  
      document.getElementById('closeModal').addEventListener('click', function() {
        document.getElementById('videoModal').classList.add('hidden');
        document.getElementById('videoElement').pause();
        document.getElementById('videoElement').currentTime = 0;
      });
  
      document.getElementById('videoModal').addEventListener('click', function(event) {
        if (event.target === this) {
          document.getElementById('videoModal').classList.add('hidden');
          document.getElementById('videoElement').pause();
          document.getElementById('videoElement').currentTime = 0;
        }
      });