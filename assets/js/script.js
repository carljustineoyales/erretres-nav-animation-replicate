let navigation = document.getElementById('nav')
let images = document.getElementById('floatingImgs')
let logo = document.getElementById('logo')
let drawer = document.getElementById('drawer')
let checkBox = document.getElementById('menu')
let body = document.getElementById('body')
let menuIcon = document.getElementById('menuIcon')

checkBox.checked = false

function addClasses() {
  navigation.classList.add("afterScrollPadding")
  images.classList.add('adjustedImgs')
  logo.classList.add('logo--visible')
}

function removeClasses() {
  navigation.classList.remove("afterScrollPadding")
  images.classList.remove('adjustedImgs')
  logo.classList.remove('logo--visible')
}

window.addEventListener('scroll', function () {

  if (window.scrollY > 1) {
    addClasses()

  } else {
    removeClasses()

  }
})

function toggleMenu() {


  if (checkBox.checked) {

    addClasses()
    body.style = "overflow: hidden"
    drawer.classList.add('openDrawer')
    menuIcon.classList.add("close")

  } else {

    removeClasses()
    body.style = "overflow: auto"
    drawer.classList.remove('openDrawer')
    menuIcon.classList.remove("close")

  }
}

