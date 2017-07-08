const toggleNavbar = () => {

  const setActive = (e) => {
    e.currentTarget.classList.toggle('active');
    const linkContainers = document.getElementsByClassName('link-container');
    for (var linkContainer of linkContainers) {
      if (linkContainer.style.display === '') {
        linkContainer.style.display = 'none';
      }
      linkContainer.style.display = linkContainer.style.display === 'none' ? 'block' : 'none';
    }
  };

  const toggleElement = document.getElementById('nav-toggle');

  toggleElement.onclick = setActive;
};

export default toggleNavbar;
