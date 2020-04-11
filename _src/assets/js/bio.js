'use strict';

const skills = document.querySelector('#skills-btn');
function showSkills(){
  const skillsContainer = document.querySelector('.skills-container');
  skillsContainer.classList.toggle('hide');
}
skills.addEventListener('click', showSkills);

const profilePic = document.querySelector('.profile-pic');

function showInfo(){
  const texto = document.querySelector('.about-container');
  texto.classList.remove('hide');
}

profilePic.addEventListener('mouseover', showInfo);

function hideInfo(){
  const texto = document.querySelector('.about-container');
  texto.classList.add('hide');
}

profilePic.addEventListener('mouseout', hideInfo);