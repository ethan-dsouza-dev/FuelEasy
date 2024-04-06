const make = document.getElementById('make');

// EFFECTS: creates a list of all models of selected make and adds 
//          them as option under the "model" drop-down box.
function populateModels() {
    const model = document.getElementById('model');
    let option = make.options[make.selectedIndex].text;
    let dropdownModels = [];
    if (option === 'Toyota') {
        dropdownModels = ["4Runner",
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
        
    } else if (option == 'Ford') {
        dropdownModels = ["Ford F-Series", 
        "Ford Escort",
        "Ford Model T",
        "Ford Fiesta", 
        "Ford Focus", 
        "Ford Mustang", 
        "Ford Transit", 
        "Ford Taurus", 
        "Ford Explorer", 
        "Ford LTD", 
        "Ford EcoSport", 
        "Ford Expedition", 
        "Ford Edge", 
        "Ford Ranger", 
        "Ford Transit Connect", 
        "Ford Maverick", 
        "Ford Fusion", 
        "Ford Mustang Mach-E", 
        "Ford Bronco Sport", 
        "Ford GT"];
    } else if (option == 'Chevrolet') {
        dropdownModels = ["Blazer", 
        "Camaro", 
        "Cavalier", 
        "Celebrity", 
        "Colorado", 
        "Equinox", 
        "Malibu", 
        "Silverado 1500", 
        "Spark", 
        "Suburban", 
        "Tahoe", 
        "Trailblazer", 
        "Traverse", 
        "Trax"];
    } else if (option == 'Volvo') {
        dropdownModels = ["C40", "S60", "S90", "V60", "V60 CC", "V90", "V90 CC", "XC40", "XC60", "XC60 II", "XC90"];
    }

    model.innerHTML = '<option>Select Model</option>'
    dropdownModels.forEach((dropdownModel) => {
        const newModel = document.createElement('option');
        newModel.textContent = dropdownModel;
        model.appendChild(newModel);
    });
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

function calculateCost() {
    let distance = getDistance();
    let kmpl = getFuelConsumption();
    let fuelPrice = getFuelPrice();
    return (distance / kmpl) * fuelPrice;
}

// EFFECTS: updates the text in the calculator to reflect the result
function updateResult() {
    const text = document.querySelector('.result');
    let result = calculateCost();
    result = Math.round(result * 100) / 100;
    console.log(result);
    text.textContent = `Your estimated cost: \$${result}`;
}

make.addEventListener('change', populateModels);

const btn = document.getElementById('calculate-btn');
btn.addEventListener('click', updateResult);
