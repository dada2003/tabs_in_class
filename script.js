$(".tabshead a").click(function (e) {
   e.preventDefault();
   $('.tabscontent .hidden').removeClass('hidden');
   $('this').removeClass('hidden');
   var tab=$(this).attr("href");
   !$('.cont').not(tab).addClass('hidden');
   $(tab).fadeIn(400);
});


