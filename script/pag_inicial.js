const track = document.querySelector('.lista')
const slides = Array.from(track.children)
const nextButton = document.querySelector('.carrossel-button.next')
const prevButton = document.querySelector('.carrossel-button.prev')

const slideWidth = slides[0].getBoundingClientRect().width

slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px'
});

function moveToSlide(track, currentSlide, targetSlide) {
    track.style.transform = `translateX(-${targetSlide.style.left})`
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')
}

nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide')
    let nextSlide = currentSlide.nextElementSibling

    if (!nextSlide) {
        nextSlide = slides[0]
    }

    moveToSlide(track, currentSlide, nextSlide)
})

prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide')
    let prevSlide = currentSlide.previousElementSibling

    if (!prevSlide) {
        prevSlide = slides[slides.length - 1]
    }

    moveToSlide(track, currentSlide, prevSlide)
})

const slideInterval = 7000

setInterval(() => {
    const currentSlide = track.querySelector('.current-slide')
    let nextSlide = currentSlide.nextElementSibling
    if (!nextSlide) {
        nextSlide = slides[0]
    }

    moveToSlide(track, currentSlide, nextSlide)
}, slideInterval)