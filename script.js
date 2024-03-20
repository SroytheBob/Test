const data = [
    { date: '2024-03-01', event: 'Event 1' },
    { date: '2024-03-15', event: 'Event 2' },
    { date: '2024-04-05', event: 'Event 3' },
    { date: '2023-12-25', event: 'Event 4' },
    { date: '2024-03-20', event: 'Event 5' }
];

// Function to display data in the table
function displayData(filteredData) {
    const tbody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Clear existing rows

    filteredData.forEach(item => {
        let row = tbody.insertRow();
        let cellDate = row.insertCell(0);
        let cellEvent = row.insertCell(1);
        cellDate.innerHTML = item.date;
        cellEvent.innerHTML = item.event;
    });
}

// Initial display of data
displayData(data);

// Function to apply filter
function applyFilter() {
    const filterType = document.getElementById('filter').value;
    const filterValue = document.getElementById('filterValue').value.trim();
    let filteredData = data;

    if (filterType !== 'all' && filterValue !== '') {
        filteredData = data.filter(item => {
            const date = new Date(item.date);
            let valueToCompare;

            switch (filterType) {
                case 'day':
                    valueToCompare = date.getDate();
                    break;
                case 'month':
                    valueToCompare = date.getMonth() + 1; // JavaScript months are 0-indexed
                    break;
                case 'year':
                    valueToCompare = date.getFullYear();
                    break;
                default:
                    return true; // No filtering if unknown filter type
            }

            return valueToCompare == filterValue; // Loose equality for type coercion
        });
    }

    displayData(filteredData);
}
