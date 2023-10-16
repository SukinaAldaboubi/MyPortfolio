const slides = document.querySelectorAll(".slide")
const currentIndex = document.querySelector('label.current-number')
const allCount = document.querySelector('label.all-count')


var counter = 0;
var isSlideShow = false;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)

const goNext = () => {
    // isSlideShow = false
    if (counter < slides.length - 1) {
    counter++
    slideImg()
    }
}

const goPre = () => {
    // isSlideShow = false
    if (counter > 0) {
    counter--
    slideImg()
    }
}

const slideImg = () => {
    
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
            currentIndex.innerHTML = counter + 1;
            
            if (counter == slides.length - 1) {
                allCount.style.color = 'black'
                allCount.style.fontWeight = 'bold'
            }
        }
    )
}

const slideShow = () => {
    // isSlideShow = true
    // if (isSlideShow) {
    goNext()
    if (counter == slides.length - 1){
        counter = 0;
    }
    setTimeout(slideShow, 2000);
// } else {
//     return
// }
}