const menuItemActive = {
  itemIndex: -1,
};

const aboutMenuItem = document.getElementById("about-menu-item");
const skillMenuItem = document.getElementById("skill-menu-item");
const workMenuItem = document.getElementById("work-menu-item");
const projectMenuItem = document.getElementById("project-menu-item");
const menuItems = [aboutMenuItem, skillMenuItem, workMenuItem, projectMenuItem];

for (let item of menuItems) {
  item.addEventListener("click", onClickMenuItems);
}

function onClickMenuItems(e) {
  switch (e.target.ariaCurrent) {
    case "about-section":
      if (menuItemActive.itemIndex === -1) {
        menuItemActive.itemIndex = 0;
        menuItems[menuItemActive.itemIndex].classList.add("active");
      } else {
        menuItems[menuItemActive.itemIndex].classList.remove("active");
        menuItemActive.itemIndex = 0;
        menuItems[menuItemActive.itemIndex].classList.add("active");
      }
      break;
    case "skills-section":
      if (menuItemActive.itemIndex === -1) {
        menuItemActive.itemIndex = 1;
        menuItems[menuItemActive.itemIndex].classList.add("active");
      } else {
        menuItems[menuItemActive.itemIndex].classList.remove("active");
        menuItemActive.itemIndex = 1;
        menuItems[menuItemActive.itemIndex].classList.add("active");
      }
      break;
    case "work-section":
      if (menuItemActive.itemIndex === -1) {
        menuItemActive.itemIndex = 2;
        menuItems[menuItemActive.itemIndex].classList.add("active");
      } else {
        menuItems[menuItemActive.itemIndex].classList.remove("active");
        menuItemActive.itemIndex = 2;
        menuItems[menuItemActive.itemIndex].classList.add("active");
      }
      break;

    case "projects-section":
      if (menuItemActive.itemIndex === -1) {
        menuItemActive.itemIndex = 3;
        menuItems[menuItemActive.itemIndex].classList.add("active");
      } else {
        menuItems[menuItemActive.itemIndex].classList.remove("active");
        menuItemActive.itemIndex = 3;
        menuItems[menuItemActive.itemIndex].classList.add("active");
      }
      break;
  }
}
