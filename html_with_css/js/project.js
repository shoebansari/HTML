burger = document.querySelector('.burger')
navBar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click',()=>{
  navBar.classList.toggle('h-nav-res')
  navList.classList.toggle('v-class-res')
  rightNav.classList.toggle('v-class-res')
})