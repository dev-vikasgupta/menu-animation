// Init Main Project
function initProject() {
  const open = document.querySelector('#rotating-menu #open')
  const close = document.querySelector('#rotating-menu #close')
  const container = document.querySelector('#rotating-menu .container')
  open.addEventListener('click', () => {
    container.classList.add('show-nav')
  })
  close.addEventListener('click', () => {
    container.classList.remove('show-nav')
  })
}
initProject()
