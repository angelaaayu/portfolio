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


// Function to redirect to the next unseen portfolio
function redirectToNextPortfolio() {
    // Define an array of filenames for your portfolios
    const portfolioFiles = [
        "portfolio-dorito.html",
        "portfolio-furnitureapp.html",
        "portfolio-ikeaescaperoom.html",
        "portfolio-myhumber.html",
        "portfolio-wisebites.html",
        "portfolio-giftpay.html"
    ];

    // Get the last visited project from local storage
    const lastVisitedProject = localStorage.getItem('lastVisitedProject');

    // Get the index of the last visited project in the portfolioFiles array
    const lastIndex = portfolioFiles.indexOf(lastVisitedProject);

    let nextIndex;

    if (lastIndex === -1) {
        // If the last visited project is not found or local storage is empty,
        // redirect to the first project
        nextIndex = 0;
    } else {
        // Calculate the index of the next unseen project
        nextIndex = (lastIndex + 1) % portfolioFiles.length;
    }

    // Get the filename of the next unseen project
    const nextPortfolioFile = portfolioFiles[nextIndex];

    // Store the next visited project in local storage
    localStorage.setItem('lastVisitedProject', nextPortfolioFile);

    // Redirect to the next unseen project
    window.location.href = nextPortfolioFile;
}

// Add click event listener to the button with class 'nextPortfolioButton'
document.querySelector(".nextPortfolioButton").addEventListener("click", redirectToNextPortfolio);
