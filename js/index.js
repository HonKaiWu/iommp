//tap栏
$(document).ready(function () {
    //需求:鼠标进入哪个li,让当前的li添加active类,其他删除;
    //    然下面的div中的div对应索引值的添加selected,其他的删除;

    //绑定事件;li;
    $(".tab>li").click(function () {
        //1.让当前的li添加active类,其他删除;(点亮盒子)
        $(this).addClass("active").siblings("li").removeClass("active");
        //2.然下面的div中的div对应索引值的添加selected,其他的删除;
        $(".products>div").eq($(this).index()).addClass("selected").siblings("div").removeClass("selected");
    });
});
//tap栏下分组
$(".list_dt").on("click", function () {
    $('.list_dd').stop();
    $(this).siblings("dt").removeAttr("id");
    if ($(this).attr("id") == "open") {
        $(this).removeAttr("id").siblings("dd").slideUp();
    } else {
        $(this).attr("id", "open").next().slideDown().siblings("dd").slideUp();
    }
});
$(".list_li").on("click", function () {
    $(this).addClass("dlactive").siblings("li").removeClass("dlactive");

});
//top排名
$(".top>.list-top>dt").on("click", function () {
    $(this).addClass("activetop").siblings().removeClass("activetop");
})

// 点击隐藏
// $(document).ready(function(){  
//     // var isHiden = true; /*控制切换菜单*/  
//     $('.co').click(function(){  
//         alert(1);
//         if(isHiden){  
//             $('.wrapper').animate({left:'-=210px'});//菜单块向右移动  
//         }else{  
//             $('.wrapper').animate({left:'+=210px'}); //菜单块向左移动  
//         }  
//         isHiden = !isHiden;  
//     });  
// }); 
var isHiden = false;
function barHide() {
    
    if (isHiden == false) {
        $('#toleft').animate({"left": "-210px"},710);
        $(".co").animate({"left": "-0px"},300);
        $(".navleft").animate({"width":0},"normal");
        isHiden = true;
    }else if((isHiden == true)){
        $('#toleft').animate({"left": 0},"normal");
        $(".co").animate({"left": "210px"},"normal");
        isHiden = false;
        $(".navleft").css({"width":"210px"});
    }
}
$('.co').on("click", function () {
    barHide();
});
    // var isHiden = true; /*控制切换菜单*/ 
    // // console.log(isHiden) 
    // if(isHiden){
    //     $(".co").on("click",function(){
    //         // alert(1);    
    //         $('#toleft').animate({"left": "-100%"},"normal");
    //         $(".co").animate({"left": "-0px"},"normal");
    //         isHiden = false;
    //         console.log(isHiden)

    //     })  
    // }else{
    //     $(".co").on("click",function(){
    //         // alert(1);    
    //         $('#toleft').animate({"right": "-100%"},"normal");
    //         $(".co").animate({"right": "-0px"},"normal");
    //         isHiden = true;
    //         console.log(2)
            
    //     })  
    // }


//  滚屏