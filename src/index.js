// write your code here

//use DOMContentLoaded to make sure page loads first
document.addEventListener("DOMContentLoaded", (e) => {
    putImagesOnPage();
    addRamen();
});

//See all images of ramen when page loads
function putImagesOnPage() {
    //grab #ramen-menu div
    const ramenMenuDiv = document.querySelector("#ramen-menu");
    //fetch
    fetch('http://localhost:3000/ramens')
        .then(response => response.json())
        .then(data => data.forEach(ramenImg => {
            //create new img for each ramen image
            const newRamenImage = document.createElement('img');
            //add src to each new img
            newRamenImage.src = ramenImg.image;
            //add img to the div so it's visible when the page loads
            ramenMenuDiv.appendChild(newRamenImage);

            //add event listeners to each image so ramen's details populate page
            newRamenImage.addEventListener("click", () => {
                const ramenImageDetails = document.querySelector("div#ramen-detail img");
                ramenImageDetails.src = newRamenImage.src;
                const ramenNameDetails = document.querySelector("div#ramen-detail h2");
                ramenNameDetails.textContent = ramenImg.name;
                const ramenRestaurantDetails = document.querySelector("div#ramen-detail h3");
                ramenRestaurantDetails.textContent = ramenImg.restaurant;
                const ramenRatingDetails = document.querySelector("#rating-display");
                ramenRatingDetails.textContent = ramenImg.rating;
                const ramenCommentDetails = document.querySelector('#comment-display');
                ramenCommentDetails.textContent = ramenImg.comment;
            });
        }));
}

//new ramen
function addRamen() {
    const ramenForm = document.querySelector("#new-ramen");
    const ramenName = document.querySelector("#new-name");
    const ramenRestaurant = document.querySelector("#new-restaurant");
    const ramenImage = document.querySelector("#new-image");
    const ramenRating = document.querySelector("#new-rating");
    const ramenComment = document.querySelector("#new-comment");

    const ramenMenuDiv = document.querySelector("#ramen-menu");


    ramenForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const newRamenImage = document.createElement('img');
        newRamenImage.src = ramenImage.value;
        ramenMenuDiv.appendChild(newRamenImage);
        
        newRamenImage.addEventListener("click", (e) => {
            const ramenImageDetails = document.querySelector("div#ramen-detail img");
            ramenImageDetails.src = newRamenImage.src;
            const ramenNameDetails = document.querySelector("div#ramen-detail h2");
            ramenNameDetails.textContent = ramenName.value;
            const ramenRestaurantDetails = document.querySelector("div#ramen-detail h3");
            ramenRestaurantDetails.textContent = ramenRestaurant.value;
            const ramenRatingDetails = document.querySelector("#rating-display");
            ramenRatingDetails.textContent = ramenRating.value;
            const ramenCommentDetails = document.querySelector('#comment-display');
            ramenCommentDetails.textContent = ramenComment.value;
        }); 
    });
}