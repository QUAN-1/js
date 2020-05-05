window.addEventListener("load",function(){
    var swiper = new Swiper('.swiper-container', {
        //spaceBetween: 30,//在slide之间设置距离
        centeredSlides: true,//设定为true时，active slide会居中，而不是默认状态下的居左。
        autoplay: {
            delay: 1000,//1秒切换一次
            disableOnInteraction: false,//触摸后自动切换停止
        },
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
        },
        navigation: {
            nextEl: '.swiper-button-next',//前后按钮//没出现
            prevEl: '.swiper-button-prev',
          },
      });
});