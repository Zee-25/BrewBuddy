document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-bar');
  const filterRating = document.getElementById('filter-rating');
  const sortOptions = document.getElementById('sort-options');
  const reviewsSection = document.getElementById('reviews-section');

  // Load Coffee Shop Reviews
  function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    displayReviews(reviews);
  }

  // Display Coffee Shop Reviews
  function displayReviews(reviews) {
    reviewsSection.innerHTML = ''; 

    reviews.forEach((review, index) => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review-item p-4 mb-4 bg-white rounded-lg shadow-md';
        reviewElement.innerHTML = `
            <h3 class="font-bold text-xl">${review.name}</h3>
            <p class="text-gray-700">${review.address}</p>
            <p class="text-yellow-500">Rating: ${review.rating} / 5</p>
            <p>${review.comments}</p>
            ${review.image ? `<img src="${review.image}" alt="Review Image" class="w-full h-48 object-cover mt-2">` : ''}
            <button class="delete-btn text-red-500 mt-2" data-id="${index}">Delete</button>
        `;
        reviewsSection.appendChild(reviewElement);
    });
  }
  
  // Search Bar Function
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const filteredReviews = reviews.filter(review => review.name.toLowerCase().includes(query) || review.address.toLowerCase().includes(query));
    displayReviews(filteredReviews);
  });

  // Filter Function
  filterRating.addEventListener('change', () => {
    const rating = filterRating.value;
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const filteredReviews = rating ? reviews.filter(review => review.rating == rating) : reviews;
    displayReviews(filteredReviews);
  });

  // Sort Function
  sortOptions.addEventListener('change', () => {
    const sortOrder = sortOptions.value;
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

    if (sortOrder === 'date-desc') {
      reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOrder === 'date-asc') {
      reviews.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortOrder === 'rating-desc') {
      reviews.sort((a, b) => b.rating - a.rating);
    } else if (sortOrder === 'rating-asc') {
      reviews.sort((a, b) => a.rating - b.rating);
    }

    displayReviews(reviews);
  });

  // Delete Coffee Shop Review Function
  reviewsSection.addEventListener('click', event => {
    if (event.target.classList.contains('delete-btn')) {
      const index = parseInt(event.target.getAttribute('data-id'), 10);
      let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
      reviews.splice(index, 1); 
      localStorage.setItem('reviews', JSON.stringify(reviews));
      loadReviews(); 
    }
  });

  // Initial load of reviews
  loadReviews();
});
