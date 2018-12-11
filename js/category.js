window.addEventListener('load', function() {
    // 初始化分类左侧的滚动
    new Swiper('.category-left .swiper-container', {
        //滑动方向
        direction: 'vertical',
        // 控制多屏滑动 内容滚动的原理就是多屏滚动
        slidesPerView: 'auto',
        // 支持鼠标拖动  滑动只有手机上才能滑动
        mousewheelControl: true,
        // 利用惯性自动滚动  松手后自动到顶部或者到底部
        freeMode: true,
        //防止文字模糊
        roundLengths: true
    });
    // 初始化分类右侧的滚动
    new Swiper('.category-right .swiper-container', {
        //滑动方向
        direction: 'vertical',
        // 控制多屏滑动 内容滚动的原理就是多屏滚动
        slidesPerView: 'auto',
        // 支持鼠标拖动  滑动只有手机上才能滑动
        mousewheelControl: true,
        // 利用惯性自动滚动  松手后自动到顶部或者到底部
        freeMode: true,
        //防止文字模糊
        roundLengths: true,
        //给右边添加一个滚动条  注意使用4.0的对象方式传参
        scrollbar: {
            el: '.swiper-scrollbar',
        }
    });


    // 设置左侧点击吸顶，样式改变
    var categoryLinks = document.querySelectorAll(".category-left a");
    var swiperContainer = document.querySelector(".swiper-container");
    var swiperWrapper = document.querySelector(".swiper-wrapper");
    var swiperSlider = document.querySelector(".swiper-slide");
    for (var i = 0; i < categoryLinks.length; i++) {
        categoryLinks[i].setAttribute("index", i);
        categoryLinks[i].addEventListener("click", function() {
            var translateY = this.offsetHeight * this.getAttribute("index");
            var maxTranslateY = swiperSlider.offsetHeight - swiperContainer.offsetHeight;
            if (translateY > maxTranslateY) {
                translateY = maxTranslateY;
            }

            swiperWrapper.style.transform = "translate3d(0px, " + -translateY +"px, 0px)";
            for(var i = 0; i < categoryLinks.length; i ++) {
                categoryLinks[i].parentNode.classList.remove("active");
            }

            this.parentNode.classList.add("active");
        })
    }
});
