document.addEventListener('DOMContentLoaded', function () {
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');

    // Event listener for when start date is selected
    startDateInput.addEventListener('change', function () {
        const startDate = this.value;
        alert(`Start Date: ${startDate}`);
        // Add any additional functionality here
    });

    // Event listener for when end date is selected
    endDateInput.addEventListener('change', function () {
        const endDate = this.value;
        alert(`End Date: ${endDate}`);
        // Add any additional functionality here
    });
});
