document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Get the background image URL and the title from the data attributes
            const imageUrl = this.style.backgroundImage.slice(5, -2);
            const imageTitle = this.getAttribute('data-title');
            
            // Set the content for the lightbox
            lightboxImg.src = imageUrl;
            lightboxCaption.innerHTML = imageTitle;
            
            // Display the lightbox
            lightbox.style.display = 'block';
        });
    });
});

// Function to close the lightbox, called by the close button and the backdrop click
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
