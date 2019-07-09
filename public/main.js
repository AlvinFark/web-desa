var pointerJudul = 0;
var linkGambar = [];
var judul = [];
var database = firebase.database();
            var beritaDesa = database.ref('berita');
            beritaDesa.on('value', function(snapshot){
                snapshot.forEach(function(berita){
                    linkGambar.push(berita.child("img").val());
					judul.push(berita.child("judul").val());
                });
				loadImg();
            });

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
   loadImg();
});

function nextCar(){
    var x = document.getElementById('carousel');
    var instance = M.Carousel.getInstance(x);
    instance.next();
    pointerJudul++;
    if (pointerJudul>2){pointerJudul=0};
    document.getElementById('captionNewsText').innerHTML = judul[pointerJudul];
}

function loadImg(){
 var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {});
    var elem = document.querySelectorAll('.sidenav');
    var instance = M.Sidenav.init(elem, {});

    var carousels = document.querySelectorAll('.isiNews');
    for (var i=0; i<3; i++){
        carousels[i].style.backgroundImage = "url('"+ linkGambar[i] + "')";
    }

    pollFunc(nextCar, 900000, 3000);	
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