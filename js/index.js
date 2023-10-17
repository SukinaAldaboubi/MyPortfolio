const toggleBtn = document.getElementsByClassName('toggle-button')[0]
const navList = document.getElementsByClassName('navbar-links')[0]

toggleBtn.addEventListener('click', () => {
    navList.classList.toggle('active')
})