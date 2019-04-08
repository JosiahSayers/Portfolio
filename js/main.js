const overlay = document.querySelector('.project-overlay');
const overlayImg = document.querySelector('.project-overlay img');
const projectContainers = document.querySelectorAll('#projects div.project-boxes-container div.container');
const projectImages = document.querySelectorAll('.project-img');

// Event listeners to set current image in overlay
projectImages.forEach(imgNode => {
  imgNode.addEventListener('click', (event) => {
    overlay.classList.remove('hide');
    overlayImg.src = event.path[0].src;
    overlayImg.classList.remove('hide');
  });
  imgNode.addEventListener('touchend', (event) => {
    overlay.classList.remove('hide');
    overlayImg.src = event.path[0].src;
    overlayImg.classList.remove('hide');
  });
});

// Event listener to remove overlay when clicked or ESC pressed
overlay.addEventListener('click', () => {
  overlay.classList.add('hide');
  overlayImg.classList.add('hide');
});
document.addEventListener('keydown', event => {
  if(event.keyCode === 27) {
    overlay.classList.add('hide');
    overlayImg.classList.add('hide');
  }
});

// event listener to add style to project name when user hovers over project box
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