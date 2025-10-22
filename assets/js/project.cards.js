function scrollProjectsLeft(containerId) {
  const wrapper = document.getElementById(containerId);
  if (wrapper) {
    wrapper.scrollBy({ left: -320, behavior: 'smooth' });
  }
}

function scrollRight(containerId) {
  const wrapper = document.getElementById(containerId);
  if (wrapper) {
    wrapper.scrollBy({ left: 320, behavior: 'smooth' });
  }
}