document.getElementById('submit-recipe-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('recipe-title').value;
  const ingredients = document.getElementById('ingredients').value;
  const instructions = document.getElementById('instructions').value;
  const imageFile = document.getElementById('recipe-image').files[0];
  const editMode = document.getElementById('editMode').value === 'true';
  const editIndex = document.getElementById('editIndex').value;

  if (!title || !ingredients || !instructions) {
      alert("Please fill out all required fields.");
      return;
  }

  const newRecipe = {
      title,
      ingredients,
      instructions
  };

  if (imageFile) {
      const reader = new FileReader();

      reader.onload = function(event) {
          newRecipe.image = event.target.result;  // Store the image as a Data URL
          saveRecipe(newRecipe, editMode, editIndex);
      };

      reader.readAsDataURL(imageFile);  // Convert the file to a Data URL
  } else {
      saveRecipe(newRecipe, editMode, editIndex);
  }
});

function saveRecipe(recipe, editMode, index) {
  let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

  if (editMode) {
      recipes[index] = recipe;  // Update the existing recipe
  } else {
      recipes.push(recipe);  // Add a new recipe
  }

  localStorage.setItem('recipes', JSON.stringify(recipes));

  // Reset form fields
  document.getElementById('submit-recipe-form').reset();
  document.getElementById('editMode').value = 'false';
  document.getElementById('editIndex').value = '';

  // Reload recipes
  loadRecipes();
}

function loadRecipes() {
  const recipesSection = document.getElementById('recipes-section');
  const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
  displayRecipes(recipes);
}

function displayRecipes(recipes) {
  const recipesSection = document.getElementById('recipes-section');
  recipesSection.innerHTML = '';

  recipes.forEach((recipe, index) => {
      const recipeElement = document.createElement('div');
      recipeElement.className = 'recipe-item p-4 mb-4 bg-white rounded-lg shadow-md';
      recipeElement.innerHTML = `
          <h3 class="font-bold text-xl">${recipe.title}</h3>
          <p class="mt-2"><strong>Ingredients:</strong> ${recipe.ingredients}</p>
          <p class="mt-2"><strong>Instructions:</strong> ${recipe.instructions}</p>
          ${recipe.image ? `<img src="${recipe.image}" alt="Recipe Image" class="w-full h-48 object-cover mt-2">` : ''}
          <button onclick="editRecipe(${index})" class="text-blue-500 mt-2">Edit</button>
          <button onclick="deleteRecipe(${index})" class="text-red-500 mt-2">Delete</button>
      `;
      recipesSection.appendChild(recipeElement);
  });
}

function deleteRecipe(index) {
  let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
  recipes.splice(index, 1);
  localStorage.setItem('recipes', JSON.stringify(recipes));
  loadRecipes();
}

window.editRecipe = function(index) {
  let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
  const recipe = recipes[index];

  document.getElementById('recipe-title').value = recipe.title;
  document.getElementById('ingredients').value = recipe.ingredients;
  document.getElementById('instructions').value = recipe.instructions;
  document.getElementById('editMode').value = 'true';
  document.getElementById('editIndex').value = index;

  document.getElementById('form-title').innerText = "Edit Recipe";
  document.querySelector('button[type="submit"]').innerText = "Update Recipe";

  window.scrollTo(0, 0);
};

document.addEventListener('DOMContentLoaded', loadRecipes);
