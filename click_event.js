$(".month").click(function(){
    let $year_page = $(this).closest(".page");
    console.log("#" + $(this).attr("id") + ".page-month");
    let $month_page = $("#" + $(this).attr("id") + ".page-month");
    console.log($year_page);
    console.log($month_page);

    /* Scale down */
    $year_page.addClass("page-scale-up-out");
    $month_page.toggleClass("default-invis");
    $month_page.addClass("page-move-fromBottom page-toTop");
});