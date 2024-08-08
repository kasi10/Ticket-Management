document.getElementById('train-booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const pickup = document.getElementById('train-pickup').value;
    const destination = document.getElementById('train-destination').value;
    const date = document.getElementById('train-date').value;
    const time = document.getElementById('train-time').value;
    
    fetch('/api/tickets/book-train', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pickup, destination, date, time })
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server
        console.log('Success:', data);
        
        // Display the booked ticket details
        document.getElementById('booked-ticket').innerHTML = `
            <h3>Booked Ticket Details</h3>
            <p>Pickup Location: ${pickup}</p>
            <p>Destination: ${destination}</p>
            <p>Date: ${date}</p>
            <p>Time: ${time}</p>
        `;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
