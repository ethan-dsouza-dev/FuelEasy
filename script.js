function getFuelConsumption() {
    return 14.0;
}

function getDistance() {
    return document.getElementById('distance').value;
}

function getFuelPrice() {
    return 2.62;
}

function calculateCost(kmpl, distance, fuelPrice) {
    return (distance / kmpl) * fuelPrice;
}

