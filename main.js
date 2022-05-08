window.addEventListener('scroll', onScroll);
onScroll();

function onScroll(){
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section){
  // local do scroll na tela + altura da viewport / 2
  const targetLine = scrollY + innerHeight / 2; 

  //verificar se a seção passou da linha
  //quais dados vou precisar?

  //           local do scroll onde é o topo da seção
  const sectionTop = section.sectionTop;

  //                   altura da seção  
  const sectionHeigt = section.offsetHeight;

  //o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;


  //verificar se a base está abaixo da linha alvo
  //quais dados vou precisar?
  //                 topo da seção + altura
  const sectionEndsAt = sectionTop + sectionHeigt;

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  //limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id');
  
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);
  
  menuElement.classList.remove('active');

  if(sectionBoundaries){
    menuElement.classList.add('active');
  }

}

function showNavOnScroll() {
  if(scrollY > 0){
    navigation.classList.add('scroll');
  } else {
    navigation.classList.remove('scroll');
  }

  // scrollY == 0? 
  // navigation.classList.remove('scroll') : navigation.classList.add('scroll');
}

function showBackToTopButtonOnScroll(){
  if(scrollY > 500){
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu(){
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #about,
  #about header.
  #about .content`
  );

