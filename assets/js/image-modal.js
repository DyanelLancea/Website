document.addEventListener('DOMContentLoaded', () => {
  const modal = document.createElement('div');
  modal.className = 'image-modal';
  modal.innerHTML = '<span class="close">&times;</span><img class="modal-content">';
  document.body.appendChild(modal);

  const modalImg = modal.querySelector('.modal-content');
  const closeBtn = modal.querySelector('.close');

  document.querySelectorAll('.project-img').forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = img.src;
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});