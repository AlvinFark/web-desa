var pointerJudul = 0;
var linkGambar = [
    "https://ecs7.tokopedia.net/img/cache/700/product-1/2016/8/21/71288/71288_a741fbe7-3489-4385-b879-0c2b2ca28358.jpg",
    "",
    ""
]
var judul = [
    "Penjualan pop ice meningkat selama masa kkn",
    "Pop ice menjadi penyebab wabah batuk pada mahasiswa",
    "Spot diving terindah di kelarik"
]

// batas tommy

function fadeIn(el) {
    el.classList.remove("hide");
    el.classList.add("show");
}

function fadeOut(el) {
    el.classList.remove("show");
    el.classList.add("hide");
}

function pollFunc(fn, timeout, interval) {
    var startTime = (new Date()).getTime();
    interval = interval || 1000;

    (function p() {
        fn();
        if (((new Date).getTime() - startTime ) <= timeout)  {
            setTimeout(p, interval);
        }
    })();
}

window.onscroll = function() {scrollFunction()};

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {});
    var elem = document.querySelectorAll('.sidenav');
    var instance = M.Sidenav.init(elem, {});

    var carousels = document.querySelectorAll('.isiNews');
    for (var i=0; i<3; i++){
        carousels[i].style.backgroundImage = "url('"+ linkGambar[i] + "')";
    }

    pollFunc(nextCar, 900000, 3000);
});

function nextCar(){
    var x = document.getElementById('carousel');
    var instance = M.Carousel.getInstance(x);
    instance.next();
    pointerJudul++;
    if (pointerJudul>2){pointerJudul=0};
    document.getElementById('captionNewsText').innerHTML = judul[pointerJudul];
}

function prevCar(){
    var x = document.getElementById('carousel');
    var instance = M.Carousel.getInstance(x);
    instance.prev();
    pointerJudul--;
    if (pointerJudul<0){pointerJudul=2};
    document.getElementById('captionNewsText').innerHTML = judul[pointerJudul];
}

function scrollFunction() {
}