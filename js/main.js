"use strict";

// NAV Dropdown -------------------
function dropDown() {
  $(this).find("ul").stop().slideToggle();
  $(this).find("ul").parent().find("a").toggleClass("activeNav");
  $(this).find("ul > li > a").removeClass("activeNav");
}

$("nav ul li ul").hide();
$("nav ul li").mouseenter(dropDown);
$("nav ul li").mouseleave(dropDown);
// --------------------------------

// FAQ Section -------------------
$(document).ready(function(){
	$(".box").click(function(){
	  $(this).next().slideToggle("fast");
	  $(this).find('i').toggle();
	});  
});
// --------------------------------



const hamburgerIconEl = document.querySelector(".hamburger-icon");
const hamburgerCloseIconEl = document.querySelector(".hamburger-close-icon");
const navEl = document.querySelector(".header-nav__nav");
const hamburgerNavBg = document.querySelector(".hamburger-nav-bg");
const overlayQuery = document.querySelector(".nav-overlay");

const closeNav = function () {
  overlayQuery.style.visibility = "hidden";
  hamburgerNavBg.classList.remove("hamburger-nav-bg__show");
  navEl.classList.remove("header-nav__nav__show");
  hamburgerCloseIconEl.classList.remove("hamburger-close-icon__show");
  hamburgerIconEl.style.visibility = "visible";
};

hamburgerIconEl.addEventListener("click", function () {
  hamburgerNavBg.classList.add("hamburger-nav-bg__show");
  navEl.classList.add("header-nav__nav__show");
  overlayQuery.style.visibility = "visible";
  hamburgerCloseIconEl.classList.add("hamburger-close-icon__show");
  hamburgerIconEl.style.visibility = "hidden";
});

overlayQuery.addEventListener("click", closeNav);
hamburgerCloseIconEl.addEventListener("click", closeNav);
