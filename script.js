/*
  Student Name: Owen Graham
  File Name: script.js
  Date: September 20, 2022
*/

//Global variables
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");

//Hamburger menu function
function hamburger(){
  var menu = document.getElementById("menu-links");
  var logo = document.getElementById("ffc-logo");
  if (menu.style.display === "block" && logo.style.display === "none"){
    menu.style.display = "none";
    logo.style.display = "block";
  } else {
    menu.style.display = "block";
    logo.style.display = "none";
  }
}

//Function to display burpees video
function burpees(){
  videoSource.src = "media/burpees.mp4";
  descriptionSource.src = "media/burpees-descriptions.vtt";
  video.style.display = "block";
  video.load();
}

//Function to display the plank example video
function plank(){
  videoSource.src = "media/plank.mp4";
  descriptionSource.src = "media/plank-descriptions.vtt";
  video.style.display = "block";
  video.load();
}
