const conn = require('./connection');

const getAll = async () => {
    const tasks = await conn.execute('SELECT * FROM tasks');
    return tasks;
};

// const showAll = (res) => {
//     console.log('result -', res)
//     return res
// }

// conn.connect(function(erro) {
//     console.log('Conexão realizada com successo!');
// });

// conn.query('SELECT * FROM tasks', function(error, rows, fields) {
//     if(!error) {
//         showAll(rows)
//         // console.log('result -', rows)
//     } else {
//         console.log('Error:', error)
//     }
// });

module.exports = {
    getAll
};