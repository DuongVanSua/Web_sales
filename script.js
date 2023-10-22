document.addEventListener("DOMContentLoaded", function () {
    const navbarMenu = document.querySelector(".navbar-menu");

    
    const menuItems = navbarMenu.querySelectorAll("li");


    menuItems.forEach(function (menuItem, index) {
        menuItem.addEventListener("click", function (event) {
           
            event.preventDefault();

            const titles = document.querySelectorAll(".title h3");

            titles[index].scrollIntoView({ behavior: "smooth" });
        });
    });
});




