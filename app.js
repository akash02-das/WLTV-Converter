const output = document.getElementById('output');
const lbsInput = document.getElementById('lbsInput');

output.style.visibility = 'hidden';

lbsInput.addEventListener('input', weightConvert);

function weightConvert(e) {
    output.style.visibility = 'visible';

    const gmOutput = document.getElementById('gmOutput');
    const kgOutput = document.getElementById('kgOutput');
    const ozOutput = document.getElementById('ozOutput');

    let lbs = e.target.value;

    gmOutput.innerHTML = lbs / 0.0022046;
    kgOutput.innerHTML = lbs / 2.2046;
    ozOutput.innerHTML = lbs * 16;
}