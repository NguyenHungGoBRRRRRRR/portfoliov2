window.addEventListener('scroll', function() {
  var nav = document.querySelector('nav');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 0) {
    nav.style.position = 'fixed';
    nav.style.top = '3%';
  } else {
    nav.style.position = 'absolute';
    nav.style.top = '5%';
  }
});