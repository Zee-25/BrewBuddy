document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.some(user => user.username === username)) {
            alert('Username already exists.');
        } else {
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful!');
            window.location.href = 'login.html';
        }
    });
});
