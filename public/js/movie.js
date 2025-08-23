document.getElementById('movie-booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const movieTitle = document.getElementById('movie-title').value;
    const date = document.getElementById('movie-date').value;
    const time = document.getElementById('movie-time').value;
    const tickets = document.getElementById('movie-tickets').value;
    
    fetch('/api/tickets/book-movie', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ movieTitle, date, time, tickets })
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server
        console.log('Success:', data);
        
        // Display the booked ticket details
        document.getElementById('ticket-info').innerHTML = `
            <h3>Booked Ticket Details</h3>
            <p>Movie Title: ${movieTitle}</p>
            <p>Date: ${date}</p>
            <p>Showtime: ${time}</p>
            <p>Number of Tickets: ${tickets}</p>
        `;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
