// 加载页面模块
$(document).ready(function () {
    console.log('1');
    // 头部加载
    $('.header-warp').load('layout-header.html');
    //左边加载
    $('.main-warp .con-left').append(function () {
       $(this).load('layout-left.html');
    });
    //右边加载
    $('.main-warp .con-right').append(function () {
        console.log(1);
        $(this).load('layout-right.html');
    });
    //

});