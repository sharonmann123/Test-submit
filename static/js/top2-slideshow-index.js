const bannerList = document.querySelector(".top-banner-slideshow__banners")
const banners = bannerList.querySelectorAll('a')
const prevBtn = document.querySelector('.top-banner-slideshow__buttons--moved .top-banner-slideshow__prev-btn')
const nextBtn = document.querySelector('.top-banner-slideshow__buttons--moved .top-banner-slideshow__next-btn')

let currentBannerIndex = 0;

function showBanner(bannerIndex) {
    const widthSlide = bannerList.clientWidth;
    const widthBanner = widthSlide*.495*bannerIndex;
    const widthGap = widthSlide*0.01*bannerIndex;
    bannerList.style.transform = `translateX(-${widthBanner+widthGap}px)`
}
console.log(banners.length);
nextBtn.onclick = function () {
    currentBannerIndex+=2;
    if (currentBannerIndex <= banners.length - 1 ) {
        if (currentBannerIndex == banners.length-1 && banners.length % 2 != 0) {
            currentBannerIndex-=1;
        }
    }
    else {
        currentBannerIndex = 0;
    }
    showBanner(currentBannerIndex)
}


prevBtn.onclick = function () {
    currentBannerIndex-=2;
    if (currentBannerIndex < -1 ) {
        currentBannerIndex = banners.length -2;
    }
    if (currentBannerIndex == -1 && banners.length % 2 != 0){
        currentBannerIndex+=1
    }
    showBanner(currentBannerIndex)
}

setInterval(() => {
    if (window.innerWidth >= 922){
        currentBannerIndex+=2;
        if (currentBannerIndex <= banners.length - 1 ) {
            if (currentBannerIndex == banners.length-1 && banners.length % 2 != 0) {
                currentBannerIndex-=1;
            }
        }
        else {
            currentBannerIndex = 0;
        }
    }
    showBanner(currentBannerIndex)
}, 5000)

