 // Load Instagram Strip
const origin = window.location.origin;

 document.addEventListener('DOMContentLoaded', function() {
    const instaStrip = document.getElementById('instaStrip');
    if(instaStrip){
    fetch(origin + '/component/instaStrip.html')
      .then(response => response.text())
      .then(data => {
        instaStrip.outerHTML  = data; //replace with footer
      })
      .catch(error => console.error('Error loading Instagram Strip:', error));
    }

  // Load Footer
    const footer = document.getElementById('footer');
    if(footer){
    fetch(origin + '/component/footer.html')
      .then(response => response.text())
      .then(data => {
        footer.outerHTML = data;
      })
      .catch(error => console.error('Error loading Footer:', error));
    }

  //Load Navbar
    const navbar = document.getElementById('navbar');
    if(navbar){
    fetch(origin + '/component/navbar.html')
      .then(response => response.text())
      .then(data => {
        navbar.outerHTML = data;

        const script = document.createElement('script');
        script.src = origin + '/js/navbar.js';
        script.defer = true;
        document.body.appendChild(script);

        })
        .catch(error => console.error('Error loading Navbar:', error));
    }
  });
