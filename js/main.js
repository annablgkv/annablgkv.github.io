// nav logic (start)
// --- animation (start)
$(window).scroll(function () {
  console.log($(window).scrollTop()) // проверка работы скролла
  if ($(window).scrollTop() > 20) {
    $('nav.navbar.navbar-toggleable-md.navbar-light').addClass('fixed-top')
    $('nav').css({
      "height": "75px",
      "box-shadow": "2px 2px 24px rgba(0,0,0,0.1)",
      "background": "rgb(246,246,246)",
    })
    $('#enterTop').css({
      "margin-top": "75px",
    })
  } else {
    $('nav.navbar.navbar-toggleable-md.navbar-light').removeClass('fixed-top')
    $('nav').css({
      "height": "116px",
      "box-shadow": "none",
      "background": "rgb(255,255,255)",      
    })
    $('#enterTop').css({
      "margin-top": "0px",
    })
  }
})
// --- animation (end)
// nav logic (end)

// slider logic (start)
$('#carouselExampleIndicators').mouseover(function () {
  $('.buttonsSlider li').css({
    "opacity": "1",
  })
})

$('#carouselExampleIndicators').mouseout(function () {
  $('.buttonsSlider li').css({
    "opacity": "0",
  })
})
// slider logic (end)

// cherryProjects logic (start)
$('.cherryBlocks').mouseover(function () {
  $('.cherryBody', this).css({
    "opacity": "1",
  })
})

$('.cherryBlocks').mouseout(function () {
  $('.cherryBody').css({
    "opacity": "0",
  })
})
// cherryProjects logic (end)
