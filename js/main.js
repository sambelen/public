const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
});

document.addEventListener('contextmenu',function(e){
  e.preventDefault();
}, false);

// document.addEventListener('keydown',function(e){
//   if(e.ctrlKey || e.keyCode == 123)
//   {
//     e.stopPropagation();
//     e.preventDefault();
//   }
// })

$(window).on('load',()=>{
var slider = ``;
firebase.database().ref('website').child('slides').child('front page').once('value',(data)=>{
  data.forEach(element => {
    slider+=`
      <div class="swiper-slide" style="z-index: 9 !important;">
        <div class="card-image">
          <img class="imgSlider" src="${element.val().link}" alt="Image Slider">
        </div>
      </div>
    `;
  });
}).then(() => {
  $("#sliders").html(slider)
    var swiper = new Swiper(".swiper-container", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        preventClicks: true,
        coverflowEffect: {
          rotate: 80,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
          delay: 5000,
        }
      });
  })
})