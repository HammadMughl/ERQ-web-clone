(() => {
    const burger = document.querySelector(".burger"),
        overlay = document.querySelector(".overlay"),
        header = document.querySelector(".header"),
        navMenu = document.querySelector(".nav-menu");
    burger.addEventListener("click", (event) => {
        header.classList.toggle("active");
        navMenu.classList.toggle("active")
        overlay.classList.toggle("active");

    })
    overlay.addEventListener("click", (event) => {
        navMenu.classList.remove("active")

    })
})();
// mega drop dow menu
(() => {

    // grap from DOm these element

    const menDropdown = document.querySelector(".men-dropdown"),
        megaDropDown = document.querySelector(".mega-menu-men"),
        searchMenu = document.querySelector(".search"),
        expanSearch = document.querySelector(".search-mega-menu"),
        closebtn = document.querySelector(".close-menu "),
        expand = document.querySelector(".serach-inner"),
        header = document.querySelector(".header"),
        overlay = document.querySelector(".overlay");
    // end grabing here


    menDropdown.addEventListener("mouseenter", (event) => {
        megaDropDown.classList.add("active");
        overlay.classList.add("active")
    })
    megaDropDown.addEventListener("mouseleave", (event) => {
        megaDropDown.classList.remove("active");
        overlay.classList.remove("active");
    })
    overlay.addEventListener("click", (event) => {
        megaDropDown.classList.remove("active");
        overlay.classList.remove("active");
        expanSearch.classList.remove("is-active");

    })
    searchMenu.addEventListener("click", (event) => {
        expanSearch.classList.add("is-active");
        overlay.classList.add("active");
        megaDropDown.classList.remove("active");
        expand.classList.add("expand")

    })
    closebtn.addEventListener("click", (event) => {
        expanSearch.classList.remove("is-active");
        overlay.classList.remove("active");
        expand.classList.remove("expand")
    })
    const sc = window.addEventListener("scroll", (event) => {
        if (this.pageYOffset > 100 && this.pageYOffset < 500) {
            header.classList.add("stiky");
            header.classList.remove("hide");
        } else if (this.pageYOffset < 100) {
            header.classList.remove("stiky");
            header.classList.remove("hide");

        } else if (this.pageYOffset > 500) {
            header.classList.remove("stiky");
            header.classList.add("hide");
        }
        console.log(this.pageYOffset)
    })
})();

// mega search click able drop down menu