document.addEventListener('DOMContentLoaded', () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const shopName = urlParams.get('id');
    const coffeeShops = JSON.parse(localStorage.getItem('coffeeShops')) || [];
    const coffeeShop = coffeeShops.find(shop => shop.name === shopName);

    const detailsDiv = document.getElementById('coffee-shop-details');

    if (coffeeShop) {
        detailsDiv.innerHTML = `
            <h2 class="text-2xl font-bold mb-2">${coffeeShop.name}</h2>
            <p><strong>Address:</strong> ${coffeeShop.address}</p>
            <h3 class="mt-4 text-xl font-semibold">Reviews:</h3>
            <ul class="list-disc pl-5">
                ${coffeeShop.reviews.map(review => `<li>${review}</li>`).join('')}
            </ul>
        `;
    } else {
        detailsDiv.innerHTML = `<p>Coffee shop not found.</p>`;
    }
});
