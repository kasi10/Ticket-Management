document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('bus-booking-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const pickup = document.getElementById('bus-pickup').value;
        const destination = document.getElementById('bus-destination').value;
        const date = document.getElementById('bus-date').value;
        const time = document.getElementById('bus-time').value;

        fetch('/api/tickets/book-bus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ pickup, destination, date, time })
        })
        .then(response => response.json())
        .then(result => {
            if (result.message === 'Bus ticket booked successfully') {
                // Display the booking details
                const bookingDetails = `
                    <h4 class="mt-4">Booking Confirmed</h4>
                    <p><strong>Pickup Location:</strong> ${pickup}</p>
                    <p><strong>Destination:</strong> ${destination}</p>
                    <p><strong>Date:</strong> ${new Date(date).toDateString()}</p>
                    <p><strong>Time:</strong> ${time}</p>
                `;
                document.getElementById('booking-details').innerHTML = bookingDetails;
                // Clear the form
                document.getElementById('bus-booking-form').reset();
            } else {
                alert(result.error || 'Failed to book bus ticket');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while booking the bus ticket');
        });
    });
});
