



const displayDropdownMenu = (menuItemClass, dropDownMenuClass) => {
    const menuItem = document.getElementById(menuItemClass);
    const dropDownMenu = document.querySelector(dropDownMenuClass);
    menuItem.addEventListener("click", () => {
        dropDownMenu.classList.toggle("active");
    })
}

displayDropdownMenu('dropDown1', '.feature-list');
displayDropdownMenu('dropDown2', '.company-list');
displayDropdownMenu('dropDown2-mobile', '.company-list-mobile');
displayDropdownMenu('dropDown1-mobile', '.feature-list-mobile');


function toggleMenu () { 
    const menuButton = document.querySelector('.icon-menu img');
    menuButton.addEventListener("click", () => {
    
    const navMenuList = document.querySelector('.menu-list-component');
    navMenuList.classList.add("showHide");
    const iconCloseMenu = document.querySelector('.icon-close-menu img');
    iconCloseMenu.addEventListener("click", () => {
    navMenuList.classList.remove("showHide");
    })    
});

}

toggleMenu();


