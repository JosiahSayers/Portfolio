const overlay = document.querySelector('.project-overlay');
const overlayImg = document.querySelector('.project-overlay img');


const projectImages = document.querySelectorAll('.project-img')
projectImages.forEach(imgNode => {
  imgNode.addEventListener('click', (event) => {
    overlay.classList.remove('hide');
    overlayImg.src = event.path[0].src;
    overlayImg.classList.remove('hide');
  })
});

overlay.addEventListener('click', () => {
  overlay.classList.add('hide');
  overlayImg.classList.add('hide');
});

const projectContainers = document.querySelectorAll('#projects div.project-boxes-container div.container');
  projectContainers.forEach(container => {
    container.addEventListener('mouseenter', event => {
      event.path[0].children[1].children[0].classList.add('name-hover');
  })
})
projectContainers.forEach(container => {
  container.addEventListener('mouseleave', event => {
    event.path[0].children[1].children[0].classList.remove('name-hover');
  })
});