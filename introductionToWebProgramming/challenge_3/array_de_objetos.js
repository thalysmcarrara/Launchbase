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

for (let i = 0; i < users.length; i++) {
    let tecno = users[i].technology.join(', ');
    console.log(`${users[i].name} trabalha com ${tecno}`);

}




