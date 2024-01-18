document.addEventListener('DOMContentLoaded', function() {
  var menuIcon = document.getElementById('menu-icon');
  var sidebar = document.getElementById('sidebar');
  var mainContent = document.getElementsByTagName('main')[0];
  var sidebarLinks = sidebar.querySelectorAll('a');

  // Hide initial sections
  var aboutSection = document.getElementById('about');
  var donateSection = document.getElementById('donate');
  aboutSection.style.display = 'none';
  donateSection.style.display = 'none';

  // Toggle sidebar and main content
  menuIcon.addEventListener('click', function(e) {
    e.stopPropagation();
    sidebar.classList.toggle('open');
    mainContent.classList.toggle('open');
  });

  // Close sidebar on link click
  for (var i = 0; i < sidebarLinks.length; i++) {
    sidebarLinks[i].addEventListener('click', function() {
      sidebar.classList.remove('open');
      mainContent.classList.remove('open');
    });
  }

  // Close sidebar when clicking anywhere else
  document.addEventListener('click', function(e) {
    if (!sidebar.contains(e.target) && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      mainContent.classList.remove('open');
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var sidebar = document.getElementById('sidebar');
  var mainContent = document.getElementsByTagName('main')[0];
  var startX;
  var currentX;
  var isOpen = false;

  function handleTouchStart(event) {
    startX = event.touches[0].clientX;
    currentX = startX;
  }

  function handleTouchMove(event) {
    currentX = event.touches[0].clientX;
    var translateX = Math.min(0, currentX - startX);
    sidebar.style.transform = 'translateX(' + translateX + 'px)';
    mainContent.style.transform = 'translateX(' + translateX + 'px)';
  }

  function handleTouchEnd() {
    var sidebarWidth = sidebar.offsetWidth;
    var threshold = sidebarWidth / 2;
    var translateX = currentX - startX;

    if (!isOpen && translateX < -threshold) {
      sidebar.style.transform = 'translateX(-' + sidebarWidth + 'px)';
      mainContent.style.transform = 'translateX(-' + sidebarWidth + 'px)';
      isOpen = true;
    } else if (isOpen && translateX > threshold) {
      sidebar.style.transform = 'translateX(0)';
      mainContent.style.transform = 'translateX(0)';
      isOpen = false;
    }
  }

  sidebar.addEventListener('touchstart', handleTouchStart);
  sidebar.addEventListener('touchmove', handleTouchMove);
  sidebar.addEventListener('touchend', handleTouchEnd);
});
 function showhome(){
  document.getElementById("home").style.display="block";
  document.getElementById("about").style.display="none";
  document.getElementById("donate").style.display="none";
 }
 function showabout(){
  document.getElementById("home").style.display="none";
  document.getElementById("about").style.display="block";
  document.getElementById("donate").style.display="none";
 }
 function showdonate(){
  document.getElementById("home").style.display="none";
  document.getElementById("about").style.display="none";
  document.getElementById("donate").style.display="block";
 }