function populateModels() {
    const make = document.getElementById('make');
    const model = document.getElementById('model');
    let option = make.options[make.selectedIndex].text;

    if (option === 'Toyota') {
        const newModel = document.createElement('option');
        newModel.textContent = "Corolla";
        model.appendChild(newModel);
    }
}

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

