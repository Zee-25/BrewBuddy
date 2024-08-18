document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = `
      <nav class="navbar">
        <div class="space-x-4">
          <a href="index.html" class="hover:underline">My List</a>
          <a href="submit-review.html" class="hover:underline">Submit Review</a>
          <a href="recipes.html" class="hover:underline">Recipes</a>
          <a href="tracker.html" class="hover:underline">Coffee Tracker</a>
          <a href="login.html" class="hover:underline">Login</a>
          <a href="register.html" class="hover:underline">Register</a>
        </div>
      </nav>
    `;
  });
  

