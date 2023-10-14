const bannersContainer = document.querySelector('.top-banner-slideshow__banners')
const banners = bannersContainer.querySelectorAll('a')
const prevBtn = document.querySelector('.top-banner-slideshow--positioned .top-banner-slideshow__prev-btn')
const nextBtn = document.querySelector('.top-banner-slideshow--positioned .top-banner-slideshow__next-btn')

// banners.forEach(element => {
//     console.log(element.getAttribute('data-index'))
//     element.innerHTML = "abc"
//     banner1.replaceWith(banner2)
// });
let currentBanner = 0;

function showBanner(indexBanner) {
    const sliderIndex = indexBanner/2
    const w = bannersContainer.clientWidth * sliderIndex
    const gap = bannersContainer.clientWidth * 0.01 * sliderIndex;
    bannersContainer.style.transform = `translateX(-${w + gap}px)`   
}

// setInterval(() => {
//     showBanner(currentBanner)
//     currentBanner +=2;
//     if(currentBanner > banners.length -1) {
//         currentBanner = 0;
//     }
// }, 10000)

prevBtn.onclick = function() {
    currentBanner -=2;
    if(currentBanner === -1){
        currentBanner +=1;
    } else if(currentBanner < - 1) {
        currentBanner = banners.length -2;
    }
    showBanner(currentBanner)
}
nextBtn.onclick = function() {
    currentBanner +=2;
    if(currentBanner === banners.length -1){
        currentBanner -=1;
    } else if(currentBanner > banners.length - 1) {
        currentBanner =0;
    }
    showBanner(currentBanner)
}
