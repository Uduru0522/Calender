$(".scrollbar .summary-box").hover(
/* On hover */
function(){ 
    $(this).data("animation_classes", []);
    console.log($(this).attr("class"));
    $(this).append("<div class=\"pop-background appear\"></div>");

    let $bg = $(this).children(".pop-background");
    let new_val;

    new_val = $bg.parent().width() * 1.08;
    $bg.css("width", new_val);
    new_val = $bg.parent().height() * 1.0;
    $bg.css("height", new_val);
    new_val = $bg.parent().width() * 0.04;
    $bg.css("margin-left", -new_val);

    $bg.css("top", $bg.parent().offset().top);
    $bg.css("left", $bg.parent().offset().left);
},
/* End hover */
function(){
    $(this).children(".pop-background").remove();
});

$("*").scroll(function(){
    $(".pop-background").remove();
});

// $(".scrollbar .summary-box").hover( function(){
//     let $box = $(this);
    
//     console.log("hover");

//     $box.css("width", $box.width() * 1.08);
// });