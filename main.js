



const displayDropdownMenu = (menuItemClass, dropDownMenuClass) => {
    const menuItem = document.getElementById(menuItemClass);
    const dropDownMenu = document.querySelector(dropDownMenuClass);
    menuItem.addEventListener("click", () => {
        dropDownMenu.classList.toggle("active");
    })
}

displayDropdownMenu('dropDown1', '.feature-list');
displayDropdownMenu('dropDown2', '.company-list');




