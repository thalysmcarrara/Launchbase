const name = 'Thalys';
const height = 1.74;
const weight = 53;
const gender = 'M';

const imc = weight / (height * height);

if (imc > 30) {
    console.log('voce esta acima do weight');
} else {
    console.log('voce nao esta acima do weight');
}