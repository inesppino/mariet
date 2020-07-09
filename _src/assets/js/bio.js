'use strict';

const textMe = document.querySelector('.about-container');
const timelineContainer = document.querySelector('.timeline');
const skillsContainer = document.querySelector('.skills-container');
const skills = document.querySelector('#skills-btn');
const downloadBtn = document.querySelector('#download-btn');

function toggleSkills(){
  if(!timelineContainer.classList.contains('hide')){
    timelineContainer.classList.add('hide');
  }
  if(!textMe.classList.contains('hide')){
    textMe.classList.add('hide');
  }
  if(skillsContainer.classList.contains('hide')) {
    skillsContainer.classList.remove('hide');
    skillsContainer.scrollIntoView({behavior: 'smooth'});
  } else {
    skillsContainer.classList.add('hide');
    textMe.classList.remove('hide');
  }
}
skills.addEventListener('click', toggleSkills);

const timeline = document.querySelector('#timeline-btn');
function toggleTimeline(){
  if(!skillsContainer.classList.contains('hide')){
    skillsContainer.classList.add('hide');
  }
  if(!textMe.classList.contains('hide')){
    textMe.classList.add('hide');
  }
  if(timelineContainer.classList.contains('hide')) {
    timelineContainer.classList.remove('hide');
    timelineContainer.scrollIntoView({behavior: 'smooth'});
  } else {
    timelineContainer.classList.add('hide');
    textMe.classList.remove('hide');
  }
}
timeline.addEventListener('click', toggleTimeline);

const profilePic = document.querySelector('.profile-pic');

function toggleInfo(){
  if(textMe.classList.contains('hide')){
    if(!timelineContainer.classList.contains('hide')){
      timelineContainer.classList.add('hide');
    }
    if(!skillsContainer.classList.contains('hide')){
      skillsContainer.classList.add('hide');
    }
    textMe.classList.remove('hide');
  }
}
profilePic.addEventListener('click', toggleInfo);

function downloadCV() {
  const link = document.createElement('a');
  link.setAttribute('target', '_blank');
  link.setAttribute('href', '/downloads/cv-mariavadellrullan.pdf');
  link.click();
  link.remove();
}
downloadBtn.addEventListener('click', downloadCV);