/*==================== SCROLL HEADER ====================*/
const header = document.getElementById('header')
document.addEventListener('scroll', (e) => {
  if (this.scrollY >= 100) header.classList.add('header-scrolled')
  else header.classList.remove('header-scrolled')
})

/*==================== TOGGLE MOBILE NAV ====================*/
const navMenu = document.getElementById('nav-menu')
const navMenuToggle = document.getElementById('nav-toggle')
const navMenuClose = document.getElementById('nav-close')
const navMenuLinks = navMenu.querySelectorAll('.nav__link')

function closeNavMenu() {
  navMenu.classList.remove('open')
}

function openNavMenu() {
  navMenu.classList.add('open')
}

navMenuToggle.addEventListener('click', openNavMenu)
navMenuClose.addEventListener('click', closeNavMenu)
navMenuLinks.forEach((link) => link.addEventListener('click', closeNavMenu))

/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper('.discover__container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
})

/*=============== VIDEO ===============*/
const videoButton = document.getElementById('video-button')
const video = document.getElementById('video-file')
const videoButtonIcon = videoButton.getElementsByTagName('i')[0]
function togglePlayPause() {
  videoButtonIcon.classList.toggle('ri-pause-line')
  videoButtonIcon.classList.toggle('ri-play-line')
}
videoButton.addEventListener('click', () => {
  if (video.paused) {
    video.play()
    togglePlayPause()
  } else {
    video.pause()
    togglePlayPause()
  }
})
video.addEventListener('ended', togglePlayPause)
