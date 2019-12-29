var swiper = new Swiper(".swiper-container", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

/** Follow Link */
const navlinks = document.querySelectorAll('a.nav-link');
const navlinkactive = document.querySelector('a.nav-link.active');
const follow_link = document.querySelector('.follow-link');
window.addEventListener('resize', followactivelink);

function followactivelink() {
  const navlinkactive_loc = navlinkactive.getBoundingClientRect();
  const activecoords = {
    width: navlinkactive_loc.width,
    left: navlinkactive_loc.left
  }
  follow_link.style.width = `${activecoords.width}px`;
  follow_link.style.left = `${activecoords.left}px`;
}
followactivelink();

function followlink() {
  const linkcoords = this.getBoundingClientRect();
  const coords = {
    width: linkcoords.width,
    left: linkcoords.left
  }
  follow_link.style.width = `${coords.width}px`;
  follow_link.style.left = `${coords.left}px`;
}

navlinks.forEach(a => a.addEventListener('mouseenter', followlink));


/** Toggle Sidebar */
const collapsebtn = document.querySelector('.nav-collapse-btn');
collapsebtn.addEventListener('click', function () {
  document.body.classList.toggle('open-sidebar')
});


/** Back To Top */
const back_to_top_btn = document.querySelector('.back-to-top');
back_to_top_btn.addEventListener('click', function gototop() {
  window.scrollTo(0, 0)
});