        // get all the links with an href starting with '#'
        const scrollLinks = document.querySelectorAll('a[href^="#"]');
        
        // loop through each link and add a click event listener
        scrollLinks.forEach(link => {
          link.addEventListener('click', function(event) {
            event.preventDefault(); // prevent default behavior of link click
        
            // get the target element's ID from the href attribute
            const targetId = this.getAttribute('href');
        
            // use the scrollIntoView method to scroll smoothly to the target element
            document.querySelector(targetId).scrollIntoView({
              behavior: 'smooth'
            });
          });
        });
