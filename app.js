window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".navbar").style.backgroundColor = "black";
  } else {
    document.querySelector(".navbar").style.backgroundColor = "transparent";
  }
}