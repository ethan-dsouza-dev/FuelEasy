// EFFECTS: creates a list of all models of selected make and adds 
//          them as option under the "model" drop-down box.
function populateModels() {
    const make = document.getElementById('make');
    const model = document.getElementById('model');
    let option = make.options[make.selectedIndex].text;

    if (option === 'Toyota') {
        const toyota_models = ["4Runner",
                                "86",
                                "Alphard",
                                "Aurion",
                                "Auris",
                                "Avalon",
                                "Avanza",
                                "Avensis",
                                "bB",
                                "C-HR",
                                "Caldina",
                                "Camry",
                                "Celica",
                                "Century",
                                "Coaster",
                                "Corolla",
                                "Corolla Cross"];
                                
        toyota_models.forEach((toyotaModel) => {
            const newModel = document.createElement('option');
            newModel.textContent = toyotaModel;
            model.appendChild(newModel);
        });
        
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

