function hide() {
   var x = document.getElementById('welcome');
   var y = document.getElementById('login-button');
   var z = document.getElementById('home-box');
   var a = document.getElementById('profile-button');
   var sportsNav = document.getElementById('sports-nav');
   var foot = document.getElementById('footer');
   foot.classList.remove("none");
   sportsNav.classList.remove("nav-up");
   x.classList.add("hide");
   y.classList.add("show-login-button");
   z.classList.add("home-up");
   a.classList.add("none");
   var profilePop = document.getElementById('profile-popup');
   profilePop.classList.remove("popup");
}
	function show() {
   var x = document.getElementById('welcome');
   var y = document.getElementById('login-button');
   var z = document.getElementById('home-box');
   var a = document.getElementById('profile-button');
   var foot = document.getElementById('footer');
   foot.classList.add("none");
   x.classList.remove("hide");
   y.classList.remove("show-login-button");
   z.classList.remove("home-up");
   a.classList.add("none");
   var profilePop = document.getElementById('profile-popup');
   profilePop.classList.remove("popup");
   var sportsNav = document.getElementById('sports-nav');
   sportsNav.classList.add("nav-up");
}
	function showprofilebox() {
   var profilePop = document.getElementById('profile-popup');
   profilePop.classList.add("popup");
}
function hideprofilebox() {
   var profilePop = document.getElementById('profile-popup');
   profilePop.classList.remove("popup");
}
function login() {
   var x = document.getElementById('welcome');
   var y = document.getElementById('login-button');
   var z = document.getElementById('home-box');
   var a = document.getElementById('profile-button');
   var foot = document.getElementById('footer');
   foot.classList.remove("none");
   x.classList.add("hide");
   y.classList.add("none");
   z.classList.add("home-up");
   a.classList.remove("none");
   var sportsNav = document.getElementById('sports-nav');
   sportsNav.classList.remove("nav-up");
}

function searchOpen() {
   var x = document.getElementById('search-bar');
   var y = document.getElementById('search-icon');
   var z = document.getElementById('close-icon');
   x.classList.add("search-open");
   y.classList.add("none");
   z.classList.remove("none");
}
function searchClose() {
   var x = document.getElementById('search-bar');
   var y = document.getElementById('search-icon');
   var z = document.getElementById('close-icon');
   x.classList.remove("search-open");
   y.classList.remove("none");
   z.classList.add("none");
}
function showfilter() {
   var x = document.getElementById('sports-filter');
   x.classList.add("show-sports-filter");
}
function hidefilter() {
   var x = document.getElementById('sports-filter');
   x.classList.remove("show-sports-filter");
}
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tab-show");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// map script goews here
function initMap() {
        var uluru = {lat: -34.397, lng: 150.644};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

// script for matches tabs goes here
function showFriendList() {
   var x = document.getElementById('friend-list-check');
   x.classList.remove(" height");
}


