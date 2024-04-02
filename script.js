// Event listener for opening the menu
document.querySelector('.menu-togglet').addEventListener('click', function() {
    var menu = document.querySelector('.nav-main-menu');
    menu.classList.add('show');
});

// Event listener for closing the menu
document.querySelector('.menu-close .close-button').addEventListener('click', function(event) {
    event.stopPropagation();
    var menu = document.querySelector('.nav-main-menu');
    menu.classList.remove('show');
});