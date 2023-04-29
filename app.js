const hamburgerBtn = document.getElementById('hamburger');
const dropdownEl = document.querySelector('.dropdown-menu')
const dropdownLinks = document.getElementsByClassName('dropdown-link');

// Functions
let toggleMenu = () => dropdownEl.classList.toggle('active');

hamburgerBtn.addEventListener('click', toggleMenu) 

for(let i = 0; i < dropdownLinks.length; i++) {
    dropdownLinks[i].addEventListener('click', function() {
        toggleMenu()
    })
}

window.addEventListener('resize', function() {
    if (this.innerWidth > 1000) {
        dropdownEl.classList.remove('active');
    }
})

window.addEventListener('scroll', function() {
    const navBarEl = document.querySelector('.navbar');
    const logoEl = document.querySelector('.navbar-logo');
    if (this.scrollY >= 60) {
        navBarEl.style.position = "sticky"
        navBarEl.style.top = 0 + 'px'
    } else {
        navBarEl.style.position = "static"
    }
    this.scrollY >= 75 ? logoEl.style.display = 'block' : logoEl.style.display = 'none'
})

