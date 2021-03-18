let $return_button = $(".return-button");
let $next_button = $(".next-button");
let $prev_button = $(".prev-button");
let $buttons = [$return_button, $next_button, $prev_button]

/* Enter seperate month page */
$(".page-year .month").click(function(){
    let $year_page = $(".page-year");
    let $month_page = $("#" + $(this).attr("id") + ".page-month");

    $year_page.data("animation_classes", []);
    $month_page.data("animation_classes", []);

    /* Transition (Scale, out) */
    $year_page.addClass("page-scale-up-out")
              .data("animation_classes").push("page-scale-up-out");
 
    /* Attach buttons to current page */
    $buttons.forEach(e => {
        e.detach().appendTo($month_page).toggleClass("default-invis");
    });

    /* Make page appear */
    $month_page.toggleClass("default-invis");

    /* Set year page invisibe */
    $year_page.toggleClass("default-invis");

    /* Transition (Scale, in) */
    $month_page.addClass("page-move-fromBottom page-toTop")
               .data("animation_classes").push("page-move-fromBottom", "page-toTop");
});

/* Back to year page */
$(".page-month").on("click", ".return-button", function(){
    let $year_page = $(".page-year");
    let $month_page = $(this).closest(".page-month");

    console.log("Hello World");
})

/* Switch months */
$(".page-month").on("click", ".prev-button", function(){
    let $month_page = $(this).closest(".page-month");
    let temp = parseInt($month_page.attr("id")) - 1;
    let $new_month = $("#" + (temp == 0 ? 12 : temp) + ".page-month");

    $month_page.data("animation_classes", []);
    $new_month.data("animation_classes", []);

    /* Transition (Scale, out) */
    $month_page.addClass("page-scale-up-out")
              .data("animation_classes").push("page-scale-up-out");
 
    /* Attach buttons to current page */
    $buttons.forEach(e => {
        e.detach().appendTo($new_month).removeClass("default-invis");
    });

    /* Make page appear */
    $new_month.toggleClass("default-invis");

    /* Transition (Scale, in) */
    $new_month.addClass("page-move-fromBottom page-toTop")
               .data("animation_classes").push("page-move-fromBottom", "page-toTop");

    /* Hide old page */
    $month_page.addClass("default-invis");
});

$(".page-month").on("click", ".next-button", function(){
    let $month_page = $(this).closest(".page-month");
    let temp = parseInt($month_page.attr("id")) + 1;
    let $new_month = $("#" + (temp == 13 ? 1 : temp) + ".page-month");

    $month_page.data("animation_classes", []);
    $new_month.data("animation_classes", []);

    /* Transition (Scale, out) */
    $month_page.addClass("page-scale-up-out")
              .data("animation_classes").push("page-scale-up-out");
 
    /* Attach buttons to current page */
    $buttons.forEach(e => {
        e.detach().appendTo($new_month).removeClass("default-invis");
    });

    /* Make page appear */
    $new_month.toggleClass("default-invis");

    /* Transition (Scale, in) */
    $new_month.addClass("page-move-fromBottom page-toTop")
               .data("animation_classes").push("page-move-fromBottom", "page-toTop");

    /* Hide old page */
    $month_page.addClass("default-invis");
});

/* Scedule info box */
$(".summary-box").click(function(){
    console.log(" ghfds hgfxkl nhbdflgkx");
    let $scroll = $(this).closest(".scrollbar");
    let id = parseInt($(this).children(".date").attr("id"));

    $scroll.parent().append("<div class=\"info-box default-invis\" id=\"" + id + "\"></dib");
    let $info_box = $(this).closest(".page-month").children(".info-box");    
    
    /* Attatch elements, add JSOn infuture*/
    $info_box.append("<div class=\"exit-info\"></div>");
    $info_box.append("<div class=\"info-date\"><p>" + id+ "</p></div>");
    $info_box.append("<h1>Today is day " + id + "</h1>");
    $info_box.append("<p>Maybe a good day.</p>");
    $info_box.append("<h2>I am terribly ill right now, gonna improve this in a short time.</h2>");

    $scroll.data("animation_classes", []);
    $info_box.data("animation_classes", []);

    /* Transition Animation */
    $scroll.addClass("fade-out")
           .data("animation_classes").push("fade-out");
    $scroll.addClass("default-invis");
    $info_box.removeClass("default-invis");
    $info_box.addClass("fade-in")
             .data("animation_classes").push("fade-in");
})

/* Remove animation class after transition ends */
const $targets = $(".page-year, .page-month, .scrollbar, .summary-box, .info-box, .pop-background");
$targets.on(
    "webkitAnimationEnd oanimationend msAnimationEnd animationend",
    function(){
        console.log($(this).attr("class") + " Animation ended.");
        try{
            $(this).data("animation_classes").forEach(e => {
               $(this).removeClass(e);
            });
        }
        catch(error){
            console.log(error);
        }
        console.log($(this).attr("class") + " Remove ended.");
    }
)

