
// const toggleMenu = () => {
//   // Toggle the "menu--open" class on your menu refence. 
//   el.classList.toggle('.menu--open');
// }

// // Start Here: Create a reference to the ".menu" class
// const menu = document.querySelector('.menu');
// // create a reference to the ".menu-button" class
// const menuButton = document.querySelector('.menu-button');
// // Using your menuButton reference, add a click handler that calls toggleMenu
// menuButton.addEventListener('click', toggleMenu)
// $(document).ready(function(){
  class Menu {
    constructor(menu) {
      this.menu = menu;
      this.menuButton = document.querySelector('.menu-button');
      this.menuButton.addEventListener('click', () => this.toggleMenu())
    }
    toggleMenu() {
      // Toggle the "menu--open" class on your menu refence. 
      console.log('toggleMenu', this);
      $(".menu").slideToggle();
      // $(".menu").animate({
      //   direction: 'left'
      // }, 1000);
      this.menu.classList.toggle('menu--open');
      
  
     
  
    }
  }
  
  
  // Start Here: Create a reference to the ".menu" class
  const menu = new Menu(document.querySelector('.menu'));
  console.log(menu);

  
  // const menu = document.querySelector('.menu');
  // new Menu(menu)
  // create a reference to the ".menu-button" class
  // Using your menuButton reference, add a click handler that calls toggleMenu
// });

