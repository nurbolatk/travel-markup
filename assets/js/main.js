/*==================== SCROLL HEADER ====================*/
const header = document.getElementById('header')
const scrollUp = document.getElementById('scroll-up')
document.addEventListener('scroll', (e) => {
  if (this.scrollY >= 100) header.classList.add('header-scrolled')
  else header.classList.remove('header-scrolled')
  if (this.scrollY >= 200) scrollUp.classList.add('show')
  else scrollUp.classList.remove('show')
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

/*=============== TOGGLE THEME ===============*/
const themeToggler = document.getElementById('toggle-theme')
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')

const currentTheme = localStorage.getItem('theme')
if (currentTheme == 'dark') {
  document.body.classList.toggle('dark-theme')
} else if (currentTheme == 'light') {
  document.body.classList.toggle('light-theme')
}

themeToggler.addEventListener('click', function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle('light-theme')
    var theme = document.body.classList.contains('light-theme') ? 'light' : 'dark'
  } else {
    document.body.classList.toggle('dark-theme')
    var theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light'
  }
  localStorage.setItem('theme', theme)
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
})

const x = sr.reveal(`.home__data, .home__social-link, .home__info`, {
  origin: 'top',
  interval: 100,
})

sr.reveal(`.video__description`, {
  origin: 'left',
})

sr.reveal(`.video__content`, {
  origin: 'right',
  interval: 100,
})
