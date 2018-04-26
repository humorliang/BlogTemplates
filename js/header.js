// 导航鼠标hover样式
$(document).ready(function () {
    $('header li a').on({
        mouseover: function () {
            $(this).addClass('active');
        },
        mouseout: function () {
            $(this).removeClass('active');
        }
    })
});