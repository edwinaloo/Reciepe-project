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
