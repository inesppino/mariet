"use strict";const textMe=document.querySelector(".about-container"),timelineContainer=document.querySelector(".timeline"),skillsContainer=document.querySelector(".skills-container"),skills=document.querySelector("#skills-btn"),downloadBtn=document.querySelector("#download-btn");function toggleSkills(){timelineContainer.classList.contains("hide")||timelineContainer.classList.add("hide"),textMe.classList.contains("hide")||textMe.classList.add("hide"),skillsContainer.classList.contains("hide")?(skillsContainer.classList.remove("hide"),skillsContainer.scrollIntoView({behavior:"smooth"})):(skillsContainer.classList.add("hide"),textMe.classList.remove("hide"))}skills.addEventListener("click",toggleSkills);const timeline=document.querySelector("#timeline-btn");function toggleTimeline(){skillsContainer.classList.contains("hide")||skillsContainer.classList.add("hide"),textMe.classList.contains("hide")||textMe.classList.add("hide"),timelineContainer.classList.contains("hide")?(timelineContainer.classList.remove("hide"),timelineContainer.scrollIntoView({behavior:"smooth"})):(timelineContainer.classList.add("hide"),textMe.classList.remove("hide"))}timeline.addEventListener("click",toggleTimeline);const profilePic=document.querySelector(".profile-pic");function toggleInfo(){textMe.classList.contains("hide")&&(timelineContainer.classList.contains("hide")||timelineContainer.classList.add("hide"),skillsContainer.classList.contains("hide")||skillsContainer.classList.add("hide"),textMe.classList.remove("hide"))}profilePic.addEventListener("click",toggleInfo);