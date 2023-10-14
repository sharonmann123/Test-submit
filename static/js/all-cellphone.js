let banner_list = document.querySelector('.banner-list');
let banners = document.querySelectorAll('.banner');
let prev_btn = document.getElementById('prev-button');
let next_btn = document.getElementById('next-button');
let active_banner = 0;
let number_of_banners = banners.length - 1;

next_btn.onclick = function() {
    if (active_banner + 1 > number_of_banners) {
        active_banner = 0;
    } else {
        active_banner += 1;
    }
    reloadBanner();
}

function reloadBanner() {
    let check_left_distance = banners[active_banner].offsetLeft;
    banner_list.style.left = -check_left_distance + 'px';
}

prev_btn.onclick = function() {
    if (active_banner - 1 < 0) {
        active_banner = number_of_banners;
    } else {
        active_banner -= 1;
    }
    reloadBanner();
}
