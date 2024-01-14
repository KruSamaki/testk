document.getElementById("about").style.display="none";
      document.getElementById("donate").style.display="none";
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menu-icon').addEventListener('click', function() {
      document.getElementById('sidebar').classList.toggle('open');
      document.getElementsByTagName('main')[0].classList.toggle('open');
    });
  
    var sidebarLinks = document.querySelectorAll('#sidebar a');
    for (var i = 0; i < sidebarLinks.length; i++) {
      sidebarLinks[i].addEventListener('click', function() {
        document.getElementById('sidebar').classList.remove('open');
        document.getElementsByTagName('main')[0].classList.remove('open');
      });
    }
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