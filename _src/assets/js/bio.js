'use strict';

const skills = document.querySelector('#skills-btn');
function toggleSkills(){
  const timelineContainer = document.querySelector('.timeline');
  if(!timelineContainer.classList.contains('hide')){
    timelineContainer.classList.add('hide');
    const main = document.getElementsByTagName('main');
    main[0].style.rowGap = '0rem';
  }
  const skillsContainer = document.querySelector('.skills-container');
  skillsContainer.classList.toggle('hide');
}
skills.addEventListener('click', toggleSkills);

const timeline = document.querySelector('#timeline-btn');
function toggleTimeline(){
  const skillsContainer = document.querySelector('.skills-container');
  if(!skillsContainer.classList.contains('hide')){
    skillsContainer.classList.add('hide');
  }
  const timelineContainer = document.querySelector('.timeline');
  if(timelineContainer.classList.contains('hide')) {
    const main = document.getElementsByTagName('main');
    main[0].style.rowGap = '10rem';
    timelineContainer.classList.remove('hide');
  } else {
    const main = document.getElementsByTagName('main');
    main[0].style.rowGap = '0rem';
    timelineContainer.classList.add('hide');
  }
}
timeline.addEventListener('click', toggleTimeline);

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