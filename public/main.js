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
var event = [
    {
        'nama' : 'a',
        'timestamp' : '1562626260',
        'tempat' : 'x'
    },
    {
        'nama' : 'b',
        'timestamp' : '1562642260',
        'tempat' : 'u'
    },
    {
        'nama' : 'c',
        'timestamp' : '1562625160',
        'tempat' : 'z'
    }
]
for (var i=0; i<3; i++) {
    var date = new Date(event[i].timestamp*1000);
    var bulan;
    switch (date.getMonth()) {
        case 0:
            bulan = 'Januari'
            break;
        case 1:
            bulan = 'Februari'
            break;
        case 2:
            bulan = 'Maret'
            break;
        case 3:
            bulan = 'April'
            break;
        case 4:
            bulan = 'Mei'
            break;
        case 5:
            bulan = 'Juni'
            break;
        case 6:
            bulan = 'Juli'
            break;
        case 7:
            bulan = 'Agustus'
            break;
        case 8:
            bulan = 'September'
            break;
        case 9:
            bulan = 'Oktober'
            break;
        case 10:
            bulan = 'November'
            break;
        case 11:
            bulan = 'Desember'
            break;
        default:
            break;
    }
    event[i].tanggal = date.getDate() + ' ' + bulan + ' ' + date.getFullYear();
    if (date.getHours()<10){event[i].waktu='0'}else{event[i].waktu=''};
    event[i].waktu = event[i].waktu + date.getHours() + ':';
    if (date.getMinutes()<10){event[i].waktu+='0'};
    event[i].waktu = event[i].waktu + date.getMinutes();
};

var timestamp = 1562626260;

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
   loadEvent();
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
    pollFunc(nextCar, 900000, 5000);
}

function loadEvent(){
    document.getElementById('mainCaptionEvents').innerHTML = event[0].nama;
    document.getElementById('tanggalMainEvents').innerHTML = event[0].tanggal;
    document.getElementById('jamMainEvents').innerHTML = event[0].waktu;
    document.getElementById('lokasiMainEvents').innerHTML = event[0].tempat;
    var tanggalSideEvents = document.querySelectorAll('.tanggalSideEvents');
    tanggalSideEvents[0].innerHTML = event[1].tanggal;
    tanggalSideEvents[1].innerHTML = event[2].tanggal;
    var captionSideEvents = document.querySelectorAll('.captionSideEvents');
    captionSideEvents[0].innerHTML = event[1].nama;
    captionSideEvents[1].innerHTML = event[2].nama;
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