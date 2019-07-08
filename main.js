function fadeIn(el) {
    el.classList.remove("hide");
    el.classList.add("show");
    console.log("s")
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

var pointerJudul = 0;
var judul = [
    "Penjualan pop ice meningkat selama masa kkn",
    "Pop ice menjadi penyebab wabah batuk pada mahasiswa",
    "Spot diving terindah di kelarik"
]

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {});
    var elem = document.querySelectorAll('.sidenav');
    var instance = M.Sidenav.init(elem, {});
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