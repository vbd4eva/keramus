const pageNav = document.querySelector('.page-nav');

pageNav.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') return;

  const targetData = e.target.dataset.section;

  const targetSection = document.querySelector(
    `.page-content [data-section="${targetData}"]`,
  );

  const activeSection = document.querySelector(
    '.page-content__section--active',
  );

  if (activeSection && activeSection.dataset.section !== targetData) {
    activeSection.classList.remove('page-content__section--active');
  }
  targetSection.classList.toggle('page-content__section--active');
});
