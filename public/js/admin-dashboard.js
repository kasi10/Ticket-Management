// admin-dashboard.js

document.getElementById('show-bus').addEventListener('click', function() {
    fetch('/api/tickets/bus-tickets')
        .then(response => response.json())
        .then(data => displayData(data, 'Bus Tickets', '/api/tickets/bus-tickets'))
        .catch(error => console.error('Error:', error));
});

document.getElementById('show-train').addEventListener('click', function() {
    fetch('/api/tickets/train-tickets')
        .then(response => response.json())
        .then(data => displayData(data, 'Train Tickets', '/api/tickets/train-tickets'))
        .catch(error => console.error('Error:', error));
});

document.getElementById('show-movie').addEventListener('click', function() {
    fetch('/api/tickets/movie-tickets')
        .then(response => response.json())
        .then(data => displayData(data, 'Movie Tickets', '/api/tickets/movie-tickets'))
        .catch(error => console.error('Error:', error));
});

function displayData(data, title, deleteUrl) {
    const displayDiv = document.getElementById('data-display');
    displayDiv.innerHTML = `<h3>${title}</h3>`;

    if (!Array.isArray(data) || data.length === 0) {
        displayDiv.innerHTML += '<p>No data available</p>';
        return;
    }

    const table = document.createElement('table');
    table.className = 'table table-bordered';

    const headers = Object.keys(data[0]);
    let headerRow = '<thead><tr>';
    headers.forEach(header => headerRow += `<th>${header}</th>`);
    headerRow += '<th>Actions</th>'; // Add Actions column for delete button
    headerRow += '</tr></thead>';
    table.innerHTML = headerRow;

    const tbody = document.createElement('tbody');
    data.forEach(item => {
        let row = '<tr>';
        headers.forEach(header => row += `<td>${item[header]}</td>`);
        row += `<td><button class="btn btn-danger btn-sm delete-btn" data-id="${item._id}">Delete</button></td>`;
        row += '</tr>';
        tbody.innerHTML += row;
    });
    table.appendChild(tbody);
    displayDiv.appendChild(table);

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            fetch(`${deleteUrl}/${id}`, { method: 'DELETE' })
                .then(response => response.json())
                .then(result => {
                    if (result.message.includes('deleted successfully')) {
                        alert(result.message);
                        this.closest('tr').remove();
                    } else {
                        alert(result.message || 'Failed to delete ticket');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('An error occurred while deleting the ticket');
                });
        });
    });
}
