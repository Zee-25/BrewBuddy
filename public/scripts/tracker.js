document.addEventListener('DOMContentLoaded', () => {
    const coffeeForm = document.getElementById('tracker-form');
    const logEntries = document.getElementById('log-entries');

    // Load Coffee Entries
    let coffeeEntries = JSON.parse(localStorage.getItem('coffeeEntries')) || [];

    // Render Coffee Entries
    function renderCoffeeEntries() {
        logEntries.innerHTML = '';
        coffeeEntries.forEach((entry, index) => {
            const entryLi = document.createElement('li');
            entryLi.className = 'bg-white p-4 mb-2 rounded-md shadow-sm';

            entryLi.innerHTML = `
                <h3 class="text-xl font-semibold">${entry.type}</h3>
                <p>Date: ${new Date(entry.date).toLocaleDateString()}</p>
                <p>Cups: ${entry.cups}</p>
                <button class="delete-entry bg-red-500 text-white p-1 rounded mt-2" data-index="${index}">Delete</button>
            `;

            logEntries.appendChild(entryLi);
        });

        // Delete Function
        document.querySelectorAll('.delete-entry').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                coffeeEntries.splice(index, 1);
                localStorage.setItem('coffeeEntries', JSON.stringify(coffeeEntries));
                renderCoffeeEntries();
            });
        });
    }

    renderCoffeeEntries();

    coffeeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const date = document.getElementById('date').value;
        const type = document.getElementById('coffee-type').value.trim();
        const cups = document.getElementById('cups').value;

        if (date && type && cups) {
            const newEntry = {
                type,
                cups: parseInt(cups),
                date: new Date(date)
            };

            coffeeEntries.push(newEntry);
            localStorage.setItem('coffeeEntries', JSON.stringify(coffeeEntries));

            coffeeForm.reset();
            renderCoffeeEntries();
        }
    });
});
