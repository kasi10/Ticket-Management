document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(result => {
        if (result.isAdmin) {
            window.location.href = 'admin-dashboard.html'; // Redirect to admin dashboard
        } else if (result.message === 'Login successful') {
            window.location.href = 'select.html'; // Redirect to normal user page
        } else {
            alert(result.message || 'Login failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during login. Please try again.');
    });
});
