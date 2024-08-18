document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Handle login logic here
    console.log('Login attempted with:', username, password);
  
    // Redirect to the main page on successful login
    window.location.href = 'index.html';
  });
  