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


// Function to redirect to a random portfolio starting with "portfolio-"
function redirectToRandomPortfolio() {
    // Define a regular expression to match filenames starting with "portfolio-"
    const filenameRegex = /^portfolio-/;

    // Fetch all HTML files in the same folder
    fetch("./")
        .then(response => response.text())
        .then(html => {
            // Extract filenames from HTML
            const filenames = Array.from(html.matchAll(/href="([^"]+\.html)"/g)).map(match => match[1]);
            
            // Filter out the files that start with "portfolio-"
            const filteredFiles = filenames.filter(filename => filenameRegex.test(filename));

            // Check if there are any matching files
            if (filteredFiles.length > 0) {
                // Generate a random index within the range of filteredFiles array length
                const randomIndex = Math.floor(Math.random() * filteredFiles.length);
                // Get the filename corresponding to the random index
                const randomPortfolioFile = filteredFiles[randomIndex];

                // Construct the URL for the portfolio file
                const portfolioURL = `./html/${randomPortfolioFile}`;

                // Redirect to the random portfolio HTML file
                window.location.href = portfolioURL;
            } else {
                console.error('No portfolio files found starting with "portfolio-"');
            }
        })
        .catch(error => {
            console.error('Failed to fetch HTML files:', error);
        });
}

// Add click event listener to the button with class 'nextPortfolioButton'
document.querySelector(".nextPortfolioButton").addEventListener("click", redirectToRandomPortfolio);