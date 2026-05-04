document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            
            // Toggle icon between bars and times
            if(navLinks.classList.contains('nav-active')){
                hamburger.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }

    // Active Navigation Link Highlight
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-links a');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].classList.add("active");
        }
    }

    // Modal Logic for Certifications
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close")[0];
    
    const certCards = document.querySelectorAll('.cert-card');
    
    if (modal && certCards.length > 0) {
        certCards.forEach(card => {
            card.addEventListener('click', function() {
                const img = this.querySelector('img');
                modal.style.display = "block";
                modalImg.src = img.src;
                captionText.innerHTML = img.alt;
            });
        });

        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
        
        // Close modal when clicking outside the image
        modal.onclick = function(e) {
            if (e.target !== modalImg && e.target !== captionText) {
                modal.style.display = "none";
            }
        }
    }
});
