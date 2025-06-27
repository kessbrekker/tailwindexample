document.addEventListener('DOMContentLoaded', function () {
    const submenu = document.querySelector('.sub-menu');
    const submenuList = submenu.querySelector('.sub-menu-list');
    const submenuLink = submenu.querySelector('a');

    submenuLink.addEventListener('click', function (e) {
      e.preventDefault();
      submenuList.classList.toggle('hidden');
    });
  });
  