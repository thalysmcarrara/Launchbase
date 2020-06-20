const programmer = {
    name: 'Thalys',
    age: 22,
    technology: [
        {
            name: 'Javascript',
            specialty: 'web/mobile'
        },
        {
            name: 'C++',
            specialty: 'desktop'
        },
        {
            name: 'Python',
            specialty: 'Data Science'
        }

    ]
};

console.log(`O programmer ${programmer.name} tem ${programmer.age} anos e usa a tecnologia ${programmer.technology[0].name} com specialty em ${programmer.technology[0].specialty}`);