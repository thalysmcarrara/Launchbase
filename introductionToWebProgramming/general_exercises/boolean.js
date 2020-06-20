const groupStudentsA = [
    {
        name: 'thalys',
        grade: 9.8
    },
    {
        name: 'Diego',
        grade: 3
    },
    {
        name: 'fulano',
        grade: 4
    },
    {
        name: 'mais um student',
        grade: 7.8
    }
];

const groupStudentsB = [
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

function senMessage(average, group) {
    if (average > 5) {
        console.log(`A média  da ${group} foi de ${average}, parabéns`);
    } else {
        console.log(`A média da ${group} é menor que 5`);
    };
}

const average1 = calculateAverage(groupStudentsA);
const average2 = calculateAverage(groupStudentsB);

senMessage(average1, 'group A');
senMessage(average2, 'group B');



function markAsFlunked(student) {
    student.flunked = false;
    if (student.grade < 5) {
        student.flunked = true;
    }
}


markAsFlunked(groupStudentsA);

function senMessageReprovado(student) {
    if (student.flunked) {
        console.log(`O student ${student.name} está flunked`);
    }
}

function studentReprovado(students) {
    for (let student of students) {
        markAsFlunked(student);
        senMessageReprovado(student);
    }
}

studentReprovado(groupStudentsA);
studentReprovado(groupStudentsB);

