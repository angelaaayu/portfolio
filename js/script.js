//open the menu 
function openSideMenu() {
    document.getElementById('side-nav-bar').style.width = '100%';
}

//Close the menu
function closeSideMenu(){
    document.getElementById('side-nav-bar').style.width = '0px';
}

/* // Add or remove the 'active' class when the filter button is clicked
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.filters').forEach(item => {
        item.addEventListener('click', event => {
            item.classList.toggle('active');
        });
    });

    // Active filter button setting 
    $(".filters").on("click", function() {
        // Remove active class from all buttons
        $(".filters").removeClass("active");
        // Add active class to the clicked button
        $(this).addClass("active");
    });

    // Active sort button setting 
    $(".sort").on("click", function() {
        // Remove active class from all buttons
        $(".sort").removeClass("active");
        // Add active class to the clicked button
        $(this).addClass("active");
    });
}); */

/* // Assuming you have properly defined .main-services and .portfolio-cases as your container elements
var containerEl = document.querySelectorAll('.main-services, .portfolio-cases');
var mixer = mixitup(containerEl, {
    selectors: {
        target: '.mix'
    }
});
 */


// Function to redirect to a random portfolio within the same folder
function redirectToRandomPortfolio() {
    // Define an array of filenames for your portfolios
    const portfolioFiles = [
        "portfolio-dorito.html",
        "portfolio-furnitureapp.html",
        "portfolio-ikeaescaperoom.html",
        "portfolio-myhumber.html",
        "portfolio-wisebites.html"
    ];

    // Generate a random index within the range of portfolioFiles array length
    const randomIndex = Math.floor(Math.random() * portfolioFiles.length);
    // Get the filename corresponding to the random index
    const randomPortfolioFile = portfolioFiles[randomIndex];

    // Redirect to the random portfolio HTML file
    window.location.href = randomPortfolioFile;
}

// Add click event listener to the button with class 'nextPortfolioButton'
document.querySelector(".nextPortfolioButton").addEventListener("click", redirectToRandomPortfolio);