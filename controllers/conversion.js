const decimal = document.getElementById("decimal");
const hex = document.getElementById("hex");

function decimalToHex() {
    hex.value = parseInt(decimal.value).toString(16).toUpperCase();
}

function hexToDecimal() {
    decimal.value = parseInt(hex.value, 16);
    hex.value = hex.value.toUpperCase();
}
function ok()
{
    console.log(ok);
}


