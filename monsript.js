/* ================== SHOW MENU ================== */

const showMenu  = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Validate thet variable exist
    if(toggle && nav) {
        toggle.addEventListener("click", () =>{
            // We add the show-menu class to the div tag with the nav-manu class
            nav.classList.toggle("show-menu")
        }) 
    }
}
showMenu("nav-toggle", "nav-menu")

/* =============== REMOVE MENU MOBILE =============== */

const navLink = document.querySelectorAll(".nav-link")

function linkAction() {
    const navMenu = document.getElementById("nav-menu")
    // When we click in each nav-link, we remove the show-menu class
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

/* =============== SCROLL SECTION ACTIVE LINK =============== */

const section = document.querySelectorAll("section[id]")

function scrollActive() {
    const scrollY =window.pageYOffset

    section.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute("id")

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-menu a[href*="+ sectionId +"]").classList.add("active-link")
        } else {
            document.querySelector(".nav-menu a[href*="+ sectionId +"]").classList.remove("active-link")
        }
    })
}
window.addEventListener("scroll", scrollActive)

/* ================ CHANGE BACKGROUND HEADER ================ */
function scrollHeader(){
    const header = document.getElementById("header")
    //When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

 /* ================ SHOW SCROLL ================ */
 function scrollTop() {
    const scrollTop = document.getElementById("scroll-top");
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the tag with the scrollUp 
    if(this.scrollY >= 560) scrollTop.classList.add("show-scroll"); 
    else scrollTop.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollTop)

/* ================ DARK / LIGHT THEME ================ */
const themeButton = document.getElementById("theme-button")
const darkTheme = "dark-theme"
const iconTheme = "bx-sun"

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")

// We obtain the current theme that the interface validate the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light"
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun"

// We validate if the user previously shose the topic
if(selectedTheme) {
    // If the validation is fullfiled we ask what the issue was to know if we actived the dark mode
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
    themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](iconTheme)
}

// Activate / Desactivate the theme manually with the button
    themeButton.addEventListener("click", () => {
    // Add or remove the dark/light icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // We save the theme and the current icon thet the user chose
    localStorage.setItem("selected-theme", getCurrentTheme())
    localStorage.setItem("selected-icon", getCurrentIcon())
})

/* ===========  SCROLL REVEAL ANIMATION  =========== */
const sr = ScrollReveal({
    distance: "40px",
    duration: 1800,
    reset: true,
})

sr.reveal(`.home-data, .home-img, 
            .decoration-data, 
            .accessory-content, 
            .footer-content`,{
    origin: "top",
    interval: 200,
})

sr.reveal(`.share-img, .send-content`,{
    origin: "left",
})

sr.reveal(`.share-data, .send-img`,{
    origin: "rigth",
})