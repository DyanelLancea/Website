class ImageGallery {
  constructor(containerId, images) {
    this.container = document.getElementById(containerId);
    this.images = images;
    this.currentIndex = 0;
    this.init();
  }

  init() {
    this.container.innerHTML = `
      <div class="gallery-container">
        <img class="gallery-image" src="${this.images[0]}" alt="Dashboard ${this.currentIndex + 1}">
        <div class="gallery-counter">${this.currentIndex + 1} / ${this.images.length}</div>
        <button class="gallery-nav gallery-prev">‹</button>
        <button class="gallery-nav gallery-next">›</button>
      </div>
    `;

    this.image = this.container.querySelector('.gallery-image');
    this.counter = this.container.querySelector('.gallery-counter');
    
    this.container.querySelector('.gallery-prev').addEventListener('click', (e) => {
      e.stopPropagation();
      this.prev();
    });
    
    this.container.querySelector('.gallery-next').addEventListener('click', (e) => {
      e.stopPropagation();
      this.next();
    });
    
    this.container.addEventListener('click', (e) => {
      if (!e.target.closest('.gallery-nav')) {
        this.openModal();
      }
    });
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateImage();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateImage();
  }

  updateImage() {
    this.image.src = this.images[this.currentIndex];
    this.counter.textContent = `${this.currentIndex + 1} / ${this.images.length}`;
  }

  openModal() {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
      <span class="close">&times;</span>
      <img class="modal-content" src="${this.images[this.currentIndex]}">
      <button class="gallery-nav gallery-prev" style="position: absolute; left: 20px;">‹</button>
      <button class="gallery-nav gallery-next" style="position: absolute; right: 20px;">›</button>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'block';

    const modalImg = modal.querySelector('.modal-content');
    const closeBtn = modal.querySelector('.close');
    const prevBtn = modal.querySelector('.gallery-prev');
    const nextBtn = modal.querySelector('.gallery-next');

    const updateModalImage = () => {
      modalImg.src = this.images[this.currentIndex];
      this.updateImage();
    };

    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.prev();
      updateModalImage();
    });

    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.next();
      updateModalImage();
    });

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.removeChild(modal);
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.removeChild(modal);
      }
    });
  }
}