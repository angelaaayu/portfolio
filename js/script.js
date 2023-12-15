//open the menu 
function openSideMenu() {
    document.getElementById('side-nav-bar').style.width = '100%';
}

//Close the menn
function closeSideMenu(){
    document.getElementById('side-nav-bar').style.width = '0px';
}

var containerEl = document.querySelectorAll('.main-services, .portfolio-cases');
var mixer = mixitup(containerEl, {
    selectors: {
        target: '.mix'
    }
});

// Active filter button setting 
$(document).ready(function() {
$(".filters").on("click", function() {
    // Remove active class from all buttons
    $(".filters").removeClass("active");
    // Add active class to the clicked button
    $(this).addClass("active");
});
});

// Active sort button setting 
$(document).ready(function() {
$(".sort").on("click", function() {
    // Remove active class from all buttons
    $(".sort").removeClass("active");
    // Add active class to the clicked button
    $(this).addClass("active");
});
});


