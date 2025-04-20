const currencyUnit = {
    "US Dollar (USD)": 1,
    "Indian Rupee (INR)": 85.1549,
    "Euro (EUR)": 0.9607,
    "British Pound (GBP)": 0.7914,
    "Japanese Yen (JPY)": 156.9419,
    "Australian Dollar (AUD)": 1.6006,
    "Canadian Dollar (CAD)": 1.4386,
    "Swiss Franc (CHF)": 0.8959,
    "Chinese Yuan (CNY)": 7.2966,
};

function convertCurrency(value, fromUnit, toUnit) {
    if (!currencyUnit[fromUnit] || !currencyUnit[toUnit]) {
        throw new Error("Invalid units provided");
    }
    const valueInUSD = value / currencyUnit[fromUnit];
    return valueInUSD * currencyUnit[toUnit];
}

export { convertCurrency, currencyUnit };

const lengthUnit = {
    "meters (m)": 1,
    "decimeters (dm)": 10,
    "centimeters (cm)": 100,
    "millimeters (mm)": 1000,
    "kilometers (km)": 0.001,
    "micrometers (um)": 1e6,
    "nanometers (nm)": 1e9,
    "picometers (pm)": 1e12,
    "inches (in)": 39.37,
    "feet (ft)": 3.28084,
    "miles (mi)": 0.000621371,
    "yards (yd)": 1.09361,
    "nautical miles (nm)": 0.000539957,
    "light years (ly)": 1.057e-16,
};

function convertLength(value, fromUnit, toUnit) {
    if (!lengthUnit[fromUnit] || !lengthUnit[toUnit]) {
        throw new Error("Invalid units provided");
    }
    const valueInMeters = value / lengthUnit[fromUnit];
    return valueInMeters * lengthUnit[toUnit];
}

export { convertLength, lengthUnit };

const areaUnit = {
    "square meters (m²)": 1,
    "square kilometers (km²)": 1e-6,
    "square feet (ft²)": 10.7639,
    "square inches (in²)": 1550,
    "square miles (mi²)": 3.861e-7,
    "acres": 0.000247105,
    "hectares (ha)": 1e-4,
    "are": 0.01,
};

function convertArea(value, fromUnit, toUnit) {
    if (!areaUnit[fromUnit] || !areaUnit[toUnit]) {
        throw new Error("Invalid units provided");
    }
    const valueInSqMeters = value / areaUnit[fromUnit];
    return valueInSqMeters * areaUnit[toUnit];
}

export { convertArea, areaUnit };

const volumeUnit = {
    "liters (L)": 1,
    "cubic meters (m³)": 0.001,
    "cubic centimeters (cm³)": 1000,
    "milliliters (mL)": 1000,
    "gallons (gal)": 0.264172,
    "fluid ounces (fl oz)": 33.814,
    "pints (pt)": 2.11338,
    "quarts (qt)": 1.05669,
    "teaspoons (tsp)": 202.884,
};

function convertVolume(value, fromUnit, toUnit) {
    if (!volumeUnit[fromUnit] || !volumeUnit[toUnit]) {
        throw new Error("Invalid units provided");
    }
    const valueInLiters = value / volumeUnit[fromUnit];
    return valueInLiters * volumeUnit[toUnit];
}

export { convertVolume, volumeUnit };

const weightUnit = {
    "kilograms (kg)": 1,
    "grams (g)": 1000,
    "milligrams (mg)": 1e6,
    "pounds (lb)": 2.20462,
    "ounces (oz)": 35.274,
    "stones (st)": 0.157473,
    "tons (t)": 0.001,
    "metric tons (tonne)": 0.001,
};

function convertWeight(value, fromUnit, toUnit) {
    if (!weightUnit[fromUnit] || !weightUnit[toUnit]) {
        throw new Error("Invalid units provided");
    }
    const valueInKg = value / weightUnit[fromUnit];
    return valueInKg * weightUnit[toUnit];
}

export { convertWeight, weightUnit };

function convertTemperature(value, fromUnit, toUnit) {
    if (fromUnit === "Celsius (°C)" && toUnit === "Fahrenheit (°F)") return (value * 9) / 5 + 32;
    if (fromUnit === "Celsius (°C)" && toUnit === "Kelvin (K)") return value + 273.15;
    if (fromUnit === "Fahrenheit (°F)" && toUnit === "Celsius (°C)") return ((value - 32) * 5) / 9;
    if (fromUnit === "Fahrenheit (°F)" && toUnit === "Kelvin (K)") return ((value - 32) * 5) / 9 + 273.15;
    if (fromUnit === "Kelvin (K)" && toUnit === "Celsius (°C)") return value - 273.15;
    if (fromUnit === "Kelvin (K)" && toUnit === "Fahrenheit (°F)") return ((value - 273.15) * 9) / 5 + 32;
    if (fromUnit === "Celsius (°C)" && toUnit === "Rankine (°R)") return (value * (9 / 5)) + 491.67;
    if (fromUnit === "Celsius (°C)" && toUnit === "Reaumur (°Re)") return (value * 4) / 5;
    if (fromUnit === "Fahrenheit (°F)" && toUnit === "Rankine (°R)") return value + 459.67;
    if (fromUnit === "Fahrenheit (°F)" && toUnit === "Reaumur (°Re)") return (value - 32) * (4 / 9);
    if (fromUnit === "Kelvin (K)" && toUnit === "Rankine (°R)") return value * 1.8;
    if (fromUnit === "Kelvin (K)" && toUnit === "Reaumur (°Re)") return (value - 273.15) / 1.25;
    if (fromUnit === "Rankine (°R)" && toUnit === "Celsius (°C)") return (value - 491.67) * (5 / 9);
    if (fromUnit === "Reaumur (°Re)" && toUnit === "Celsius (°C)") return (value * 5) / 4;
    if (fromUnit === "Rankine (°R)" && toUnit === "Fahrenheit (°F)") return value - 459.67;
    if (fromUnit === "Reaumur (°Re)" && toUnit === "Fahrenheit (°F)") return (value * (9 / 4)) + 32;
    if (fromUnit === "Rankine (°R)" && toUnit === "Kelvin (K)") return value / 1.8;
    if (fromUnit === "Reaumur (°Re)" && toUnit === "Kelvin (K)") return (value * 1.25) + 273.15;

    if (fromUnit === toUnit) return value;
    throw new Error("Invalid units provided");
}

export { convertTemperature };

const pressureUnit = {
    "pascal (Pa)": 1,
    "kilopascal (kPa)": 0.001,
    "megapascal (MPa)": 1e-6,
    "bar": 1e-5,
    "atmosphere (atm)": 9.86923e-6,
    "pounds per square inch (psi)": 0.000145038,
    "torr": 0.00750062,
    "millimeters of mercury (mmHg)": 0.00750062,
    "inches of mercury (inHg)": 0.0002953,
};

function convertPressure(value, fromUnit, toUnit) {
    if (!pressureUnit[fromUnit] || !pressureUnit[toUnit]) {
        throw new Error("Invalid units provided");
    }
    const valueInPa = value / pressureUnit[fromUnit];
    return valueInPa * pressureUnit[toUnit];
}

export { convertPressure, pressureUnit };

const timeUnit = {
    "seconds (s)": 1,
    "minutes (min)": 1 / 60,
    "hours (h)": 1 / 3600,
    "days": 1 / 86400,
    "weeks": 1 / 604800,
    "months": 1 / 2.628e6,
    "years": 1 / 3.154e7,
    "decades": 1 / 3.154e8,
    "centuries": 1 / 3.154e9,
};

function convertTime(value, fromUnit, toUnit) {
    if (!timeUnit[fromUnit] || !timeUnit[toUnit]) {
        throw new Error("Invalid units provided");
    }
    const valueInSeconds = value / timeUnit[fromUnit];
    return valueInSeconds * timeUnit[toUnit];
}

export { convertTime, timeUnit };

const powerUnit = {
    "watts (W)": 1,
    "kilowatts (kW)": 0.001,
    "megawatts (MW)": 1e-6,
    "gigawatts (GW)": 1e-9,
    "horsepower (hp)": 0.00134102,
};

function convertPower(value, fromUnit, toUnit) {
    if (!powerUnit[fromUnit] || !powerUnit[toUnit]) {
        throw new Error("Invalid units provided");
    }
    const valueInWatts = value / powerUnit[fromUnit];
    return valueInWatts * powerUnit[toUnit];
}

export { convertPower, powerUnit };

const speedUnit = {
    "meters per second (m/s)": 1,
    "kilometers per hour (km/h)": 3.6,
    "miles per hour (mph)": 2.23694,
    "feet per second (ft/s)": 3.28084,
    "knots": 1.94384,
    "Mach number": 0.0029386,
};

function convertSpeed(value, fromUnit, toUnit) {
    if (!speedUnit[fromUnit] || !speedUnit[toUnit]) {
        throw new Error("Invalid units provided");
    }
    const valueInMetersPerSecond = value / speedUnit[fromUnit];
    return valueInMetersPerSecond * speedUnit[toUnit];
}

export { convertSpeed, speedUnit };

const energyUnit = {
    "joules (J)": 1,
    "kilojoules (kJ)": 0.001,
    "calories (cal)": 0.239006,
    "kilocalories (kcal)": 0.000239006,
    "electronvolts (eV)": 1.602e-19,
    "watt-hours (Wh)": 0.000277778,
    "kilowatt-hours (kWh)": 2.77778e-7,
    "British thermal units (BTU)": 0.000947817,
};

function convertEnergy(value, fromUnit, toUnit) {
    if (!energyUnit[fromUnit] || !energyUnit[toUnit]) {
        throw new Error("Invalid units provided");
    }
    const valueInJoules = value / energyUnit[fromUnit];
    return valueInJoules * energyUnit[toUnit];
}

export { convertEnergy, energyUnit };

const angleUnit = {
    "degrees (°)": 1,
    "radians (rad)": 0.0174533,
    "gradians (gon)": 1.11111,
    "minutes (arcmin)": 60,
    "seconds (arcsec)": 3600,
};

function convertAngle(value, fromUnit, toUnit) {
    if (!angleUnit[fromUnit] || !angleUnit[toUnit]) {
        throw new Error("Invalid units provided");
    }
    const valueInDegrees = value / angleUnit[fromUnit];
    return valueInDegrees * angleUnit[toUnit];
}

export { convertAngle, angleUnit };

const densityUnit = {
    "kilograms per cubic meter (kg/m³)": 1,
    "grams per cubic centimeter (g/cm³)": 0.001,
    "grams per milliliter (g/mL)": 0.001,
    "pounds per cubic foot (lb/ft³)": 0.06242796,
};

function convertDensity(value, fromUnit, toUnit) {
    if (!densityUnit[fromUnit] || !densityUnit[toUnit]) {
        throw new Error("Invalid units provided");
    }
    const valueInKgPerM3 = value / densityUnit[fromUnit];
    return valueInKgPerM3 * densityUnit[toUnit];
}

export { convertDensity, densityUnit };

const lightUnit = {
    "lux (lx)": 1,
    "lumens (lm)": 1,
    "candelas (cd)": 0.092903,
    "foot-candles (fc)": 0.092903,
    "nits": 0.3183099,
};

function convertLight(value, fromUnit, toUnit) {
    if (!lightUnit[fromUnit] || !lightUnit[toUnit]) {
        throw new Error("Invalid units provided");
    }
    const valueInLux = value / lightUnit[fromUnit];
    return valueInLux * lightUnit[toUnit];
}

export { convertLight, lightUnit };

const soundUnit = {
    "decibels (dB)": 1,
    "decibels SPL (dB SPL)": 1,
    "sones": 0.1,
    "phon": 1,
};

function convertSound(value, fromUnit, toUnit) {
    if (!soundUnit[fromUnit] || !soundUnit[toUnit]) {
        throw new Error("Invalid units provided");
    }
    const valueInDecibel = value / soundUnit[fromUnit];
    return valueInDecibel * soundUnit[toUnit];
}

export { convertSound, soundUnit };

const fuelEfficiencyUnit = {
    "kilometers per liter (km/L)": 1,
    "miles per gallon (mpg)": 2.35214583,
    "liters per 100 kilometers (L/100km)": 100,
    "gallons per 100 miles (gal/100mi)": 100,
};

function convertFuelEfficiency(value, fromUnit, toUnit) {
    if (!fuelEfficiencyUnit[fromUnit] || !fuelEfficiencyUnit[toUnit]) {
        throw new Error("Invalid units provided");
    }
    const valueInKmPerL = value / fuelEfficiencyUnit[fromUnit];
    return valueInKmPerL * fuelEfficiencyUnit[toUnit];
}

export { convertFuelEfficiency, fuelEfficiencyUnit };

const frequencyUnit = {
    "hertz (Hz)": 1,
    "kilohertz (kHz)": 0.001,
    "megahertz (MHz)": 1e-6,
    "gigahertz (GHz)": 1e-9,
    "terahertz (THz)": 1e-12,
};

function convertFrequency(value, fromUnit, toUnit) {
    if (!frequencyUnit[fromUnit] || !frequencyUnit[toUnit]) {
        throw new Error("Invalid units provided");
    }
    const valueInHz = value / frequencyUnit[fromUnit];
    return valueInHz * frequencyUnit[toUnit];
}

export { convertFrequency, frequencyUnit };

const dataUnit = {
    "bytes (B)": 1,
    "kilobytes (KB)": 1e-3,
    "megabytes (MB)": 1e-6,
    "gigabytes (GB)": 1e-9,
    "terabytes (TB)": 1e-12,
    "petabytes (PB)": 1e-15,
    "exabytes (EB)": 1e-18,
    "zettabytes (ZB)": 1e-21,
    "yottabytes (YB)": 1e-24,
    "kilobits (Kb)": 1e-3 / 8,
    "megabits (Mb)": 1e-6 / 8,
};

function convertData(value, fromUnit, toUnit) {
    if (!dataUnit[fromUnit] || !dataUnit[toUnit]) {
        throw new Error("Invalid units provided");
    }
    const valueInBytes = value / dataUnit[fromUnit];
    return valueInBytes * dataUnit[toUnit];
}

export { convertData, dataUnit };