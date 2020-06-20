const name = 'Louistelson';
const gender = 'M';
const age = 54;
const contribution = 41;

if (gender === 'M') {
    let sum = age + contribution;
    if (sum >= 95) {
        console.log(name + " voce pode se aposentar!");
    } else {
        console.log(name + " voce ainda nao pode se aposentar!");
    }

} else {
    let sum = age + contribution;
    if (sum >= 85) {
        console.log(name + " voce pode se aposentar!");
    } else {
        console.log(name + " voce ainda nao pode se aposentar!");
    }
}