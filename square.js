$(window).ready(updateWidth);
$(window).resize(updateWidth);

function updateWidth()
{
var square = $('.page-month .scrollbar .date');
var size = square.height();

square.css('width',size);
}