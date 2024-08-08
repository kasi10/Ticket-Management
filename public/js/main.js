// Login form submission handler
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
        if (result.message === 'Login successful') {
            // Redirect based on role
            if (username === 'admin@gmail.com') {
                window.location.href = 'admin-dashboard.html'; // Redirect to admin dashboard
            } else {
                window.location.href = 'select.html'; // Redirect to normal user dashboard
            }
        } else {
            alert(result.message || 'Login failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during login. Please try again.');
    });
});

// Registration form submission handler
document.getElementById('register-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    fetch('/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(result => {
        if (result.message === 'User registered successfully') {
            window.location.href = 'login.html'; // Redirect to login page after successful registration
        } else {
            alert(result.message || 'Registration failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during registration. Please try again.');
    });
});
