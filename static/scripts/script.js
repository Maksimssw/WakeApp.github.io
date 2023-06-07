window.addEventListener('DOMContentLoaded', () => {
  {
    window.onload = function () {
      document.body.classList.add('loaded_hiding');
      window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
      }, 500);
    }
  }

  {
    // Modal window
    const openModal = document.querySelector('[data-modal-open]')
    const modal = document.querySelector('[data-modal]')

    const toggleModal = () => {
      modal.classList.remove('modal_hidden')
      modal.classList.toggle('modal_close')
    }

    openModal.addEventListener('click', toggleModal)

    modal.addEventListener('click', (event) => {
      if (event.target.classList.contains('modal')) toggleModal()
    })

    window.addEventListener('keydown', (event) => {
      if (!modal.classList.contains('modal_close')) {
        event.code === 'Escape' ? toggleModal() : ''
      }
    })
  }

  {
    // Mobile menu
    const hamburger = document.querySelector('[data-hamburger]');
    const menu = document.querySelector('[data-menu]');

    const toggleMenu = () => {
      hamburger.classList.toggle('hamburger_active')
      menu.classList.toggle('menu_active')

      if (menu.classList.contains('menu_active')) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }

    hamburger.addEventListener('click', toggleMenu)
  }
})