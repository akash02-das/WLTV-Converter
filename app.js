// ############# Weight Converter ################
const kgInput = document.getElementById('kgInput');
const gmInput = document.getElementById('gmInput');
const lbsInput = document.getElementById('lbsInput');
const ozInput = document.getElementById('ozInput');

kgInput.addEventListener('input', kgToConvert);
gmInput.addEventListener('input', gmToConvert);
lbsInput.addEventListener('input', lbsToConvert);
ozInput.addEventListener('input', ozToConvert);

function kgToConvert(e) {
    const kilogram = e.target.value;

    gmInput.value = kilogram * 1000;
    lbsInput.value = kilogram * 2.2046;
    ozInput.value = kilogram * 35.274;
}

function gmToConvert(e) {
    const gram = e.target.value;

    kgInput.value = gram / 1000;
    lbsInput.value = gram * 0.0022046;
    ozInput.value = gram * 0.035274;
}

function lbsToConvert(e) {
    const pound = e.target.value;

    kgInput.value = pound / 2.2046;
    gmInput.value = pound / 0.0022046;
    ozInput.value = pound * 16;
}

function ozToConvert(e) {
    const ounce = e.target.value;

    kgInput.value = ounce / 35.274;
    gmInput.value = ounce / 0.035274;
    lbsInput.value = ounce * 0.0625;
}


// ############ Length Converter ############
const kmInput = document.getElementById('kmInput');
const miInput = document.getElementById('miInput');
const mInput = document.getElementById('mInput');
const ftInput = document.getElementById('ftInput');

kmInput.addEventListener('input', kmToConvert);
miInput.addEventListener('input', miToConvert);
mInput.addEventListener('input', mToConvert);
ftInput.addEventListener('input', ftToConvert);

function kmToConvert(e) {
    const kilometer = e.target.value;

    miInput.value = kilometer * 0.62137;
    mInput.value = kilometer * 1000;
    ftInput.value = kilometer * 3280.8;
}

function miToConvert(e) {
    const mile = e.target.value;

    kmInput.value = mile / 0.62137;
    mInput.value = mile / 0.00062137;
    ftInput.value = mile * 5280;
}

function mToConvert(e) {
    const meter = e.target.value;

    kmInput.value = meter / 1000;
    miInput.value = meter * 0.00062137;
    ftInput.value = meter * 3.2808;
}

function ftToConvert(e) {
    const feet = e.target.value;

    kmInput.value = feet / 3280.8;
    miInput.value = feet * 0.00018939;
    mInput.value = feet / 3.2808;
}

// ############ Temperature Converter ############
const celInput = document.getElementById('celInput');
const fahInput = document.getElementById('fahInput');
const kelInput = document.getElementById('kelInput');

celInput.addEventListener('input', celToConvert);
fahInput.addEventListener('input', fahToConvert);
kelInput.addEventListener('input', kelToConvert);

function celToConvert(e) {
    const celsius = parseFloat(e.target.value);

    fahInput.value = (celsius * 1.8) + 32;
    kelInput.value = (celsius + 273.15);
}

function fahToConvert(e) {
    const fahrenheit = e.target.value;

    celInput.value = (fahrenheit - 32) / 1.8;
    kelInput.value = ((fahrenheit - 32) / 1.8) + 273.15;
}

function kelToConvert(e) {
    const kelvin = e.target.value;

    celInput.value = kelvin - 273.15;
    fahInput.value = ((kelvin - 273.15) * 1.8) + 32;
}

// ############ Volume Converter ############
const ltrInput = document.getElementById('ltrInput');
const mlInput = document.getElementById('mlInput');
const galInput = document.getElementById('galInput');

ltrInput.addEventListener('input', ltrToConvert);
mlInput.addEventListener('input', mlToConvert);
galInput.addEventListener('input', galToConvert);

function ltrToConvert(e) {
    const litre = parseFloat(e.target.value);

    mlInput.value = litre * 1000;
    galInput.value = litre / 3.785;
}

function mlToConvert(e) {
    const mililitre = e.target.value;

    ltrInput.value = mililitre / 1000;
    galInput.value = mililitre / 3785;
}

function galToConvert(e) {
    const gallon = e.target.value;

    ltrInput.value = gallon * 3.785;
    mlInput.value = gallon * 3785;
}