document.getElementById('submit-review-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('coffee-shop-name').value;
  const address = document.getElementById('coffee-shop-address').value;
  const rating = document.getElementById('rating').value;
  const comments = document.getElementById('review-comments').value;
  const imageFile = document.getElementById('review-image').files[0];

  if (!name || !address || !rating) {
      alert("Please fill out all required fields.");
      return;
  }

  const newReview = {
      name,
      address,
      rating,
      comments
  };

  if (imageFile) {
      const reader = new FileReader();

      reader.onload = function(event) {
          newReview.image = event.target.result;  // Store the image as a Data URL

          let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
          reviews.push(newReview);
          localStorage.setItem('reviews', JSON.stringify(reviews));

          // Redirect to the main page after submission
          window.location.href = "index.html";
      };

      reader.readAsDataURL(imageFile);  // Convert the file to a Data URL
  } else {
      // No image file, directly store the review
      let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
      reviews.push(newReview);
      localStorage.setItem('reviews', JSON.stringify(reviews));

      // Redirect to the main page after submission
      window.location.href = "index.html";
  }
});
