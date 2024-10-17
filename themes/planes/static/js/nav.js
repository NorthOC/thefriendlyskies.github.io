let nav_burger = document.getElementById("nav-burger");
let open_icon = document.getElementById("open-nav");
let close_icon = document.getElementById("close-nav");
let nav = document.getElementById("nav");

nav_burger.addEventListener('click', function(event){
  nav.classList.toggle("nav-active");
  open_icon.classList.toggle("open-nav-btn");
  close_icon.classList.toggle("open-nav-btn");
});

document.addEventListener('click', function(event) {
  if(nav.classList.contains("nav-active") && !event.target.isEqualNode(nav_burger) && !event.target.isEqualNode(nav) && !nav.contains(event.target) && !nav_burger.contains(event.target)) {
      nav.classList.remove("nav-active");
      close_icon.classList.remove("open-nav-btn");
      open_icon.classList.add("open-nav-btn");

  }
});