document.addEventListener('DOMContentLoaded', function () {
    const datePicker = document.getElementById('datePicker');

    // Event listener for when a date is selected or manually entered
    datePicker.addEventListener('change', function () {
        const selectedDate = this.value;
        alert(`You selected: ${selectedDate}`); // Replace this with any action you need
        // Here you can add any function to process the selected or entered date
    });

    // Optional: Add more functionality as needed, such as validation
});
