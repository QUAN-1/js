window.addEventListener("load",function(){
    var focus=document.querySelector(".focus");
    var ul=focus.children[0];
    var w=focus.offsetWidth;
    // console.log(w);
    var ol=focus.children[1];
    var index=0;
    // 利用定时器自动轮播图片
    var timer=setInterval(function(){
        index++;
        var translatex=-index*w;
        ul.style.transition="all .3s";
        ul.style.transform="translateX("+translatex+"px)";
    },3000)
    // 等过渡结束后，再去判断，监听过渡完成的事件transitionend
    ul.addEventListener("transitionend",function(){
        // 必须加大于
        if(index>=3){
            index=0;
            ul.style.transition="none";
            var translatex=-index*w;
            ul.style.transform="translateX("+translatex+"px)";
        }else if(index<0){
            index=2;
            ul.style.transition="none";
            var translatex=-index*w;
            ul.style.transform="translateX("+translatex+"px)";
        }
        // 小圆点跟随变化
        ol.querySelector(".current").classList.remove("current");
        ol.children[index].classList.add("current");
        // 可以写在这里也可以写在css里
        ol.children[index].style.transition="all .3s";
    });
    // 手指滑动轮播
    // 手指一开始点击的位置
    var startX=0;
    // 手指移动的距离
    var moveX=0;
    // 是否移动
    var flag=false;
    ul.addEventListener("touchstart",function(e){
        startX=e.targetTouches[0].pageX;
        clearInterval(timer);
    });
    ul.addEventListener("touchmove",function(e){
        // 手指移动距离
        moveX=e.targetTouches[0].pageX-startX;
        var translatex=-index*w+moveX;
        // 手指拖动的时候取消过渡
        ul.style.transition="none";
        ul.style.transform="translateX("+translatex+"px)";
        // 如果用户手指移动过我们再去判断否则不做判断效果
        flag=true;
        // 禁止屏幕滚动
        e.preventDefault();
    });
    ul.addEventListener("touchend",function(e){
        if(flag){
            if(Math.abs(moveX)>50){
                if(moveX>0){
                    // 如果是右滑就是 播放上一张 moveX 是正值
                    index--;
                }else{
                    index++;
                }
                var translatex=-index*w;
                ul.style.transition="all .3s";
                ul.style.transform="translateX("+translatex+"px)";
            }else{
                var translatex=-index*w;
                ul.style.transition="all .1s";
                ul.style.transform="translateX("+translatex+"px)";
            }
        }
        // 手指离开开始定时器
        clearInterval(timer);
        timer=setInterval(function(){
            index++;
            var translatex=-index*w;
            ul.style.transition="all .3s";
            ul.style.transform="translateX("+translatex+"px)";
        },3000)
    });

    // 返回顶部
    var goBack=document.querySelector(".goBack");
    var nav=document.querySelector("nav");
    window.addEventListener("scroll",function(){
        if(window.pageYOffset>=nav.offsetTop){
            goBack.style.display="block";
        }else{
            goBack.style.display="none";
        }
    });
    goBack.addEventListener("click",function(){
        window.scroll(0,0);
    });
});