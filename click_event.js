$(".month").click(function(){
    let $year_page = $(this).closest(".page");
    console.log($year_page);

    /* Scale down */
    $year_page.addClass("scale-up-out");
});