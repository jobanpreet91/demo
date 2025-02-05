function initMap() {
    var location = { lat: -32.567, lng: 151.178 }; // Singleton, NSW coordinates
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });
    var marker = new google.maps.Marker({ position: location, map: map });
}

// Filter Menu by Category
function filterCategory(category) {
    let items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// Search Menu Items
function filterMenu() {
    let input = document.getElementById('search').value.toLowerCase();
    let items = document.querySelectorAll('.menu-item');

    items.forEach(item => {
        let name = item.getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (name.includes(input)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const timeSelect = document.getElementById("time");
    const tableSelect = document.getElementById("table");
    const dateInput = document.getElementById("date");
    const form = document.getElementById("booking-form");
    const confirmation = document.getElementById("confirmation");

    // Available time slots
    const availableTimes = ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM"];

    // Available tables
    const availableTables = ["Table 1 (Window)", "Table 2 (Corner)", "Table 3 (Outdoor)", "Table 4 (Near Bar)"];

    // Populate time slots
    availableTimes.forEach(time => {
        let option = document.createElement("option");
        option.value = time;
        option.textContent = time;
        timeSelect.appendChild(option);
    });

    // Populate tables
    availableTables.forEach(table => {
        let option = document.createElement("option");
        option.value = table;
        option.textContent = table;
        tableSelect.appendChild(option);
    });

    // Handle form submission
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let selectedDate = dateInput.value;
        let selectedTime = timeSelect.value;
        let selectedTable = tableSelect.value;
        let guests = document.getElementById("guests").value;

        if (selectedDate && selectedTime && selectedTable && guests) {
            confirmation.textContent = 'Your booking for ${guests} guests at ${selectedTable} on ${selectedDate} at ${selectedTime} has been confirmed!';
            confirmation.classList.remove("hidden");
            form.reset();
        }
    });
});

function initMap() {
    const cafeLocation = { lat: -32.56399, lng: 151.17884 }; // Replace with your actual coordinates
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: cafeLocation,
    });

    new google.maps.Marker({
        position: cafeLocation,
        map: map,
        title: "Bites & Brews Café",
    });
}