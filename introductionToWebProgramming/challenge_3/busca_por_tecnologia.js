

const users = [
    {
        name: 'Thalys',
        technology: ['HTML', 'CSS']
    },
    {
        name: 'Arthur',
        technology: ['Javascript', 'CSS']
    },
    {
        name: 'Murilo',
        technology: ['HTML', 'Node.js']
    },
];
function workWithCSS(user) {
    for (let i = 0; i < user.technology.length; i++) {
        if (user.technology[i] === 'CSS') {
            return true;
        };
    };
    return false;
}

for (let user of users) {
    let boolean = workWithCSS(user);
    if (boolean) {
        console.log(`O usuário ${user.name} trabalha com CSS`);
    }
}



