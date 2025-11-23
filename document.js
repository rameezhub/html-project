document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const button = question.querySelector('.expand-btn');
        
        answer.classList.toggle('active');
        button.classList.toggle('active');
      });
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.review-slider');
    const prevBtn = document.querySelector('.review-arrow.prev');
    const nextBtn = document.querySelector('.review-arrow.next');
    let currentIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const slidesToShow = 2;
    const maxIndex = testimonials.length - slidesToShow;

    function updateSlider() {
        const offset = currentIndex * -50;
        slider.style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }
    });
});
// Add this to your existing JavaScript
const gallerySlider = document.querySelector('.gallery-slider');
const galleryPrev = document.querySelector('.gallery-arrow.prev');
const galleryNext = document.querySelector('.gallery-arrow.next');
let galleryIndex = 0;
const galleryItems = document.querySelectorAll('.gallery-item');
const maxGalleryIndex = galleryItems.length - 1;

function updateGallery() {
    gallerySlider.style.transform = `translateX(-${galleryIndex * 100}%)`;
}

galleryPrev.addEventListener('click', () => {
    if (galleryIndex > 0) {
        galleryIndex--;
        updateGallery();
    }
});

galleryNext.addEventListener('click', () => {
    if (galleryIndex < maxGalleryIndex) {
        galleryIndex++;
        updateGallery();
    }
});