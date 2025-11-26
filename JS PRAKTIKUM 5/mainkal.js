let layar = document.querySelector('input[type="text"]'); 
let operatorSaatIni = null;
let operanPertama = null;
let menungguOperanKedua = false;  

const tombolTombol = document.querySelectorAll('button');
const petaOperator = {
    '+': '+',
    '-': '-',
    'x': '*',
    ':': '/'
};

function masukkanAngka(angka) {
     if (menungguOperanKedua === true) {
        layar.value = angka;
        menungguOperanKedua = false;
    } else {
        if (layar.value === '0') {
            layar.value = angka;
         } else {
            layar.value += angka;
         }
    }
}

function lakukanOperasi(operatorBerikutnya) {
    const nilaiInput = parseFloat(layar.value);

    if (isNaN(nilaiInput)) return;

    if (operanPertama === null) {
        operanPertama = nilaiInput;
    } else if (!menungguOperanKedua) {
        const hasil = hitung(operanPertama, nilaiInput, operatorSaatIni);
        layar.value = hasil;
        operanPertama = hasil;
    }

    menungguOperanKedua = true;
    operatorSaatIni = operatorBerikutnya;
}

function hitung(angka1, angka2, operator) {
    if (operator === '+') return angka1 + angka2;
    if (operator === '-') return angka1 - angka2;
    if (operator === '*') return angka1 * angka2;
    if (operator === '/') {
        if (angka2 === 0) {
            alert("Error: Tidak bisa dibagi dengan nol!");
            return 'Error'; 
        }
        return angka1 / angka2;
    }
    return angka2;
}

function tanganiSamaDengan() {
    if (operatorSaatIni && operanPertama !== null && !menungguOperanKedua) {
        const nilaiInput = parseFloat(layar.value);

        const hasil = hitung(operanPertama, nilaiInput, operatorSaatIni);

        layar.value = hasil;

        operanPertama = null;
        operatorSaatIni = null;
        menungguOperanKedua = false;
    }
}

function bersihkanKalkulator() {
    layar.value = '0';
    operanPertama = null;
    operatorSaatIni = null;
    menungguOperanKedua = false;
}

tombolTombol.forEach(tombol => {
     tombol.addEventListener('click', (peristiwa) => {
        const teksTombol = peristiwa.target.textContent;

        if (teksTombol === '=') {
             tanganiSamaDengan();
         } else if (teksTombol === 'C') { 
             bersihkanKalkulator();
        } else if (petaOperator.hasOwnProperty(teksTombol)) {
            lakukanOperasi(petaOperator[teksTombol]);
        } else if (!isNaN(parseFloat(teksTombol)) || teksTombol === '.') {
            masukkanAngka(teksTombol);
        }
    });
});

layar.value = 0;