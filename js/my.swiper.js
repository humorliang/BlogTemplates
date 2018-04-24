// 轮播图
$(document).ready(function () {
      var mySwiper = new Swiper('.swiper-container', {
          
          // 如果需要分页器
          pagination: {
              spaceBetween: 30,
              el: '.swiper-pagination',
              clickable: true
          },

          // 如果需要前进后退按钮
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },

          // 如果需要滚动条
          scrollbar: {
              el: '.swiper-scrollbar',
          },
      })
})
  