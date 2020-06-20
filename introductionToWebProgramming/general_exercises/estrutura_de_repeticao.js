const classStudentsA = [
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
    },
    {
        name: 'mais um student',
        grade: 7.8
    }
];

const classStudentsB = [
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
    let sum = 0;
    for (let i = 0; i < students.length; i++) {
        sum += students[i].grade
    };
    return sum / students.length;

}

function sendMessage(average, group) {
    if (average > 5) {
        console.log(`A média  da ${group} foi de ${average}, parabéns`);
    } else {
        console.log(`A média da ${group} é menor que 5`);
    };
}

const average1 = calculateAverage(classStudentsA);
const average2 = calculateAverage(classStudentsB);

sendMessage(average1, 'group A');
sendMessage(average2, 'group B');


