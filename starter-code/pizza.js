// Write your Pizza Builder JavaScript in this file.

$(document).ready(function(){

$(".btn-green-peppers").click(function () {
  if ($(this).hasClass("active")) {
    $("#pizza .green-pepper").fadeToggle("green-pepper");
    $(this).removeClass("active")
  } else {
    $(this).addClass("active")
  }
});

$(".btn-mushrooms").click(function () {
  if ($(this).hasClass("active")) {
    $(".mushroom div").fadeToggle("cap stem");
    $(this).removeClass("active")
  } else {
    $(this).addClass("active")
  }
})

$(".btn-pepperonni").click(function () {
  if ($(this).hasClass("active")) {
    $("#pizza .pep").fadeToggle("pep");
    $(this).removeClass("active")
  } else {
    $(this).addClass("active")
  }
})

$(".btn-sauce").click(function () {
  if ($(".crust .sauce").hasClass("sauce-white")) {
    $(".crust .sauce").removeClass("sauce-white");
    $(this).removeClass("active")
  } else {

    $(".sauce").addClass("sauce-white");
  }
})

$(".btn-crust").click(function () {
  if ($(this).hasClass("active")) {
    $(".crust").removeClass("crust-gluten-free");
    
  } else {
    $(".crust").addClass("crust-gluten-free");
    
  }
})

})