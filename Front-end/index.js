function searchRecipes() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var recipes = document.getElementsByTagName('section');

    for (var i = 0; i < recipes.length; i++) {
        var recipeTitle = recipes[i].querySelector('.recipe-title');
        var recipeText = recipeTitle.textContent || recipeTitle.innerText;

        if (recipeText.toLowerCase().indexOf(input) > -1) {
            recipes[i].style.display = '';
        } else {
            recipes[i].style.display = 'none';
        }
    }
}
function submitReview(event) {
    event.preventDefault();

    const nameInput = document.getElementById('reviewNameInput');
    const contentInput = document.getElementById('reviewContentInput');
    const ratingInput = document.getElementById('reviewRatingInput');
    const reviewsList = document.getElementById('reviewsList');

    const name = nameInput.value;
    const content = contentInput.value;
    const rating = ratingInput.value;

    const reviewItem = document.createElement('li');
    reviewItem.innerHTML = `
        <div class="review-author">${name}</div>
        <div class="review-rating">${rating}</div>
        <div class="review-content">${content}</div>
    `;

    reviewsList.appendChild(reviewItem);

    nameInput.value = '';
    contentInput.value = '';
    ratingInput.value = '';
}
