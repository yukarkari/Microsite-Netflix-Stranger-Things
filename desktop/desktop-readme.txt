Rich Banner Take Over Netflix Stranger Things Guide

======================================================================================

Materi :
css/styles_drag.css
semua yang ada di folder "strangerthings-assets"
microsite.html

--------------------------------------------------------------------------------------

Untuk Banner, href & class menggunakan script dibawah

Premium Head
<a href="javascript:void(0);" class="strangerthings-premiumhead">
    <img src="strangerthings-assets/970x250.jpg">
</a>

Giant
<a href="javascript:void(0);" class="strangerthings-giantbanner">
    <img src="strangerthings-assets/300x600.jpg">
</a>

MR3
<a href="javascript:void(0);" rel="noopener noreferrer" class="strangerthings-mr3-desktop">
    <img src="strangerthings-assets/300x250.jpg">
</a>

Horizontal Ad
<a href="javascript:void(0);">
    <img src="strangerthings-assets/1100x50.jpg">
</a>

<a href="javascript:void(0);" class="strangerthings-horad">
    <img src="strangerthings-assets/1100x150.jpg">
</a>

Pin Ad, Video Embed, Microsite & Other
<link rel="stylesheet" type="text/css" href="css/styles_drag.css" />
<div id="draggable" class="pin-draggable strangerthings-pinad">
    <small style="color: #000;font-size: 9px;line-height: 1.5em !important;background: #fff;border-radius: 10px;display: block;padding: 1px 5px;width: 115%;">Klik Untuk Pengalaman The Upside Down</small>
    <img src="strangerthings-assets/200x200.png" alt="">
    <a href="javascript:void(0);" style="position: absolute;left: 0;
    top: 0; width: 100%; height: 100%;"></a>
</div>
<div class="close-draggable close-banner">
    <img src="images/100x100.png" />
    <small style="color: #000;font-size: 9px;line-height: 1.5em !important;background: #fff;border-radius: 10px;display: block;padding: 1px 5px;width: 228%;position: absolute;right: 0;text-align: right;">Klik Tombol Close Untuk Mengembalikan Tampilan Halaman Normal</small>
</div>
<div class="fullpinoverlay" style="display: none;">
    <iframe src="microsite.html" style="height: 100%;width: 100%;" frameborder="0"></iframe>
</div>

<div class="strangerthings-video-wrap">
    <div class="strangerthings-overlay-video-wrap">
        <video autoplay muted id="strangerthings-video-overlay-content">
            <source src="strangerthings-assets/video-overlay.mp4" type="video/mp4" />
        </video>
    </div>
    <div id="audio-control" class="muted">
       <img src="strangerthings-assets/icon-audio-mute.png" class="btn-mute">
       <img src="strangerthings-assets/icon-audio-unmute.png" class="btn-unmute">
    </div>
    <div class="strangerthings-btn-next">
        <img src="strangerthings-assets/btn-next.png">
    </div>
    <div class="strangerthings-btn-close">
        <img src="strangerthings-assets/btn-close.png">
    </div>
</div>

<div class="strangerthings-normalize-wrap">
    <div class="strangerthings-normalize-content">
        <div class="strangerthings-normalize-next">
            <img src="strangerthings-assets/btn-next.png">
        </div>
    </div>
</div>

<link rel="stylesheet" href="strangerthings-assets/layout.css" type="text/css">
<script>
  document.body.classList.add('theme-dark');
  var triggerVideoOverlay1 = document.querySelector('.strangerthings-premiumhead');
  var triggerVideoOverlay4 = document.querySelector('.strangerthings-giantbanner');
  var triggerVideoOverlay5 = document.querySelector('.strangerthings-horad');
  var triggerVideoOverlay6 = document.querySelector('.strangerthings-pinad');
  var triggerVideoOverlay7 = document.querySelector('.strangerthings-mr3-desktop');
  var strangerVideoOverlay = document.getElementById("strangerthings-video-overlay-content");
  var videoBtnNext = document.querySelector('.strangerthings-btn-next');
  var videoOverlay = document.querySelector('.strangerthings-video-wrap');
  var videoBtnClose = document.querySelector('.strangerthings-btn-close');
  var strangerRoots = document.querySelector('.strangerthings-bg-root');
  var strangerNormalize = document.querySelector('.strangerthings-normalize-wrap');
  var strangerNormalizeBtn = document.querySelector('.strangerthings-normalize-next');
  var fullpinoverlay = document.querySelector('.fullpinoverlay');
  var pin = document.querySelector('.pin-draggable');
  var pinBannerClose = document.querySelector('.close-draggable');
  var wrap = document.getElementsByTagName("BODY")[0];
  triggerVideoOverlay1.addEventListener("click", function() {
    videoOverlay.style.display = "block";
    setTimeout(function() {
      console.log("bluer");
      videoOverlay.classList.add("nobluer");
    }, 200);
    strangerVideoOverlay.play();
  });
  triggerVideoOverlay4.addEventListener("click", function() {
    videoOverlay.style.display = "block";
    setTimeout(function() {
      console.log("bluer");
      videoOverlay.classList.add("nobluer");
    }, 200);
    strangerVideoOverlay.play();
  });
  triggerVideoOverlay5.addEventListener("click", function() {
    videoOverlay.style.display = "block";
    setTimeout(function() {
      console.log("bluer");
      videoOverlay.classList.add("nobluer");
    }, 200);
    strangerVideoOverlay.play();
  });
  triggerVideoOverlay6.addEventListener("click", function() {
    videoOverlay.style.display = "block";
    setTimeout(function() {
      console.log("bluer");
      videoOverlay.classList.add("nobluer");
    }, 200);
    strangerVideoOverlay.play();
  });
  triggerVideoOverlay7.addEventListener("click", function() {
    videoOverlay.style.display = "block";
    setTimeout(function() {
      console.log("bluer");
      videoOverlay.classList.add("nobluer");
    }, 200);
    strangerVideoOverlay.play();
  });
  document.getElementById('strangerthings-video-overlay-content').addEventListener('ended', myHandler, false);

  function myHandler(e) {
    window.scrollTo(0, document.querySelector(".fullpinoverlay").scrollHeight);
    wrap.classList.add('rotate-page');
    fullpinoverlay.style.display = "block";
    setTimeout(function() {
      console.log("bluer");
      fullpinoverlay.classList.add("nobluer");
    }, 200);
    setTimeout(function() {
      console.log("bluer");
      strangerNormalize.classList.add("show");
    }, 5000);
    setTimeout(function() {
      console.log("bluer");
      strangerNormalize.classList.add("showfx");
    }, 5100);
  }
  videoBtnClose.addEventListener("click", function() {
    videoOverlay.style.display = "none";
    videoOverlay.classList.remove("nobluer");
    strangerVideoOverlay.pause();
  });
  videoBtnNext.addEventListener("click", function() {
    strangerVideoOverlay.pause();
    window.scrollTo(0, document.querySelector(".fullpinoverlay").scrollHeight);
    wrap.classList.add('rotate-page');
    fullpinoverlay.style.display = "block";
    setTimeout(function() {
      console.log("bluer");
      fullpinoverlay.classList.add("nobluer");
    }, 200);
    setTimeout(function() {
      console.log("bluer");
      strangerNormalize.classList.add("show");
    }, 5000);
    setTimeout(function() {
      console.log("bluer");
      strangerNormalize.classList.add("showfx");
    }, 5100);
  });
  strangerNormalizeBtn.addEventListener("click", function() {
    fullpinoverlay.classList.add('normalize-rotate');
    strangerNormalize.classList.remove("show");
    strangerNormalize.classList.remove("showfx");
    pinBannerClose.style.display = "block";
  });
  pinBannerClose.addEventListener("click", function() {
    fullpinoverlay.classList.remove('normalize-rotate');
    strangerNormalize.classList.remove("show");
    strangerNormalize.classList.remove("showfx");
    wrap.classList.remove('rotate-page');
    pinBannerClose.style.display = "none";
    fullpinoverlay.style.display = "none";
    fullpinoverlay.classList.remove("nobluer");
    videoOverlay.style.display = "none";
    videoOverlay.classList.remove("nobluer");
  });
</script>
<script type="text/javascript">
  $('#audio-control').click(function() {
    if ($("#strangerthings-video-overlay-content").prop('muted')) {
      $("#strangerthings-video-overlay-content").prop('muted', false);
      $(".btn-mute").hide();
      $(".btn-unmute").show();
    } else {
      $("#strangerthings-video-overlay-content").prop('muted', true);
      $(".btn-unmute").hide();
      $(".btn-mute").show();
    }
  });
</script>