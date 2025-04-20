import { convertAngle, angleUnit } from "./functions.js";
import { convertDensity, densityUnit } from "./functions.js";
import { convertLight, lightUnit } from "./functions.js";
import { convertSound, soundUnit } from "./functions.js";
import { convertFuelEfficiency, fuelEfficiencyUnit } from "./functions.js";
import { convertFrequency, frequencyUnit } from "./functions.js";
import { convertData, dataUnit } from "./functions.js";
import { convertCurrency, currencyUnit } from "./functions.js";
import { convertLength, lengthUnit } from "./functions.js";
import { convertArea, areaUnit } from "./functions.js";
import { convertVolume, volumeUnit } from "./functions.js";
import { convertWeight, weightUnit } from "./functions.js";
import { convertTemperature } from "./functions.js";
import { convertPressure, pressureUnit } from "./functions.js";
import { convertTime, timeUnit } from "./functions.js";
import { convertPower, powerUnit } from "./functions.js";
import { convertSpeed, speedUnit } from "./functions.js";
import { convertEnergy, energyUnit } from "./functions.js";

"use strict";
let currencyData = [];
let lengthData = [];
let areaData = [];
let volumeData = [];
let weightData = [];
let temperatureData = [];
let pressureData = [];
let timeData = [];
let powerData = [];
let speedData = [];
let dataData = [];
let frequencyData = [];
let densityData = [];
let energyData = [];
let angleData = [];
let lightData = [];
let soundData = [];
let fuelEfficiencyData = [];

const measurementDataMap = {
    "Currency": {
        data: currencyData,
        convert: convertCurrency,
        unit: currencyUnit
    },
    "Length": {
        data: lengthData,
        convert: convertLength,
        unit: lengthUnit
    },
    "Area": {
        data: areaData,
        convert: convertArea,
        unit: areaUnit
    },
    "Volume": {
        data: volumeData,
        convert: convertVolume,
        unit: volumeUnit
    },
    "Weight": {
        data: weightData,
        convert: convertWeight,
        unit: weightUnit
    },
    "Temperature": {
        data: temperatureData,
        convert: convertTemperature
    },
    "Pressure": {
        data: pressureData,
        convert: convertPressure,
        unit: pressureUnit
    },
    "Time": {
        data: timeData,
        convert: convertTime,
        unit: timeUnit
    },
    "Power": {
        data: powerData,
        convert: convertPower,
        unit: powerUnit
    },
    "Speed": {
        data: speedData,
        convert: convertSpeed,
        unit: speedUnit
    },
    "Data": {
        data: dataData,
        convert: convertData,
        unit: dataUnit
    },
    "Frequency": {
        data: frequencyData,
        convert: convertFrequency,
        unit: frequencyUnit
    },
    "Density": {
        data: densityData,
        convert: convertDensity,
        unit: densityUnit
    },
    "Energy": {
        data: energyData,
        convert: convertEnergy,
        unit: energyUnit
    },
    "Angle": {
        data: angleData,
        convert: convertAngle,
        unit: angleUnit
    },
    "Light": {
        data: lightData,
        convert: convertLight,
        unit: lightUnit
    },
    "Sound": {
        data: soundData,
        convert: convertSound,
        unit: soundUnit
    },
    "Fuel Efficiency": {
        data: fuelEfficiencyData,
        convert: convertFuelEfficiency,
        unit: fuelEfficiencyUnit
    }
};

async function fetchData() {
    try {
        const response = await fetch('dataset.json');
        const data = await response.json();
        
        Object.keys(measurementDataMap).forEach((key, index) => {
            measurementDataMap[key].data = data[index.toString()];
        });

    } catch (error) {
        console.log("Error:", error);
    }
}

fetchData();

document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll(".dropdown");
    const Measurements = document.querySelectorAll(".Measurement");
    const title = document.querySelector(".title");
    const symbols = document.querySelector(".symbols");
    const Quantity = document.querySelector(".Quantity");
    const reset = document.querySelector(".btn1");
    const input = document.querySelector(".input-number");
    const output = document.querySelector(".output-number");
    const buttoninputs = document.querySelectorAll(".dropdown-button");

    let selectedMeasurement = '';
    let selectedFromUnit = '';
    let selectedToUnit = '';

    Measurements.forEach((measurement) => {
        measurement.addEventListener("click", () => {
            Quantity.style.display = "block";
            title.style.display = "none";
            symbols.style.display = "none";

            Quantity.insertAdjacentElement("beforebegin", measurement);
            measurement.style.borderRadius = "50%";

            dropdowns.forEach((dropdown) => {
                const dropdownContent = dropdown.querySelector(".dropdown-content");
                dropdownContent.innerHTML = '';

                const measurementType = measurement.textContent.trim();
                selectedMeasurement = measurementType;

                if (measurementDataMap[measurementType]) {
                    measurementDataMap[measurementType].data.forEach(item => {
                        let itemElement = document.createElement("div");
                        itemElement.classList.add("item");
                        itemElement.textContent = item[Object.keys(item)[0]];
                        console.log(itemElement.textContent);
                        dropdownContent.appendChild(itemElement);

                        itemElement.addEventListener("click", () => {
                            const button = dropdown.querySelector(".dropdown-button");
                            button.textContent = itemElement.textContent;
                            console.log(button.textContent);
                            dropdown.classList.remove("active");    
                            if (dropdown.classList.contains('from-unit')) {
                                selectedFromUnit = itemElement.textContent;
                            } else if (dropdown.classList.contains('to-unit')) {
                                selectedToUnit = itemElement.textContent;
                            }
                        });
                    });
                }
            });
        });
    });

    input.addEventListener('input', () => {
        const value = parseFloat(input.value);
        console.log("Selected Measurement:", selectedMeasurement);
        console.log("Selected From Unit:", selectedFromUnit);
        console.log("Selected To Unit:", selectedToUnit);
        console.log("Input Value:", value);
    
        if (selectedMeasurement && selectedFromUnit && selectedToUnit && !isNaN(value)) {
            const { convert, unit } = measurementDataMap[selectedMeasurement];
            console.log("Unit Object:", unit);
    
            const fromUnitKey = selectedFromUnit;
            const toUnitKey =  selectedToUnit;
            console.log("From Unit Key:", fromUnitKey);
            console.log("To Unit Key:", toUnitKey);
    
            if (fromUnitKey && toUnitKey) {
                output.value = convert(value, fromUnitKey, toUnitKey);
            } else {
                console.error("Invalid units provided");
                output.value = "Invalid units provided";
            }
        } else {
            output.value = "";
        }
    });

    reset.addEventListener("click", () => {
        buttoninputs.forEach((buttoninput) => {
            buttoninput.innerHTML = `Select <i class="fa-solid fa-chevron-down" id="chevron"></i>`;
        });
        input.value = "";
        output.value = "";
        selectedMeasurement = '';
        selectedFromUnit = '';
        selectedToUnit = '';
    });

    dropdowns.forEach((dropdown) => {
        const button = dropdown.querySelector(".dropdown-button");
        const content = dropdown.querySelector(".dropdown-content");
        const chevron = button.querySelector("i");

        button.onclick = () => {
            dropdowns.forEach((otherDropdown) => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove("active");
                    const otherChevron = otherDropdown.querySelector("i");
                    if (otherChevron) {
                        otherChevron.classList.remove("rotate");
                    }
                }
            });

            dropdown.classList.toggle("active");
            chevron.classList.toggle("rotate");
        };

        const items = content.querySelectorAll(".item");
        items.forEach((item) => {
            item.onclick = (e) => {
                e.stopPropagation();
                button.innerHTML = `${item.textContent} <i class="fa-solid fa-chevron-down" id="chevron"></i>`;
                dropdown.classList.remove("active");
                chevron.classList.remove("rotate");
            };
        });
    });

    window.onclick = (event) => {
        if (!event.target.closest(".dropdown")) {
            dropdowns.forEach((dropdown) => {
                dropdown.classList.remove("active");
                const chevron = dropdown.querySelector("i");
                if (chevron) {
                    chevron.classList.remove("rotate");
                }
            });
        }
    };
});