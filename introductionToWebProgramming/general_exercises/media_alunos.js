const classStudentA = [
    {
        name: 'thalys',
        grade: 9.8
    },
    {
        name: 'Diego',
        grade: 10
    },
    {
        name: 'fulano',
        grade: 6
    }
];

const classStudentB = [
    {
        name: 'Osvaldo',
        grade: 7.5
    },
    {
        name: 'Arthur',
        grade: 8.6
    },
    {
        name: 'Murilo',
        grade: 9
    }
];

function calculateAverage(students) {
    return ((students[0].grade + students[1].grade + students[2].grade) / 3);
}

function sendMessage(average, group) {
    if (average > 5) {
        console.log(`A média  da ${group} foi de ${average}, parabéns`);
    } else {
        console.log(`A média da ${group} é menor que 5`);
    }
}

const average1 = calculateAverage(classStudentA);
const average2 = calculateAverage(classStudentB);

sendMessage(average1, 'group A');
sendMessage(average2, 'group B');


