
let matrix = [
    [ null, null, null ],
    [ null, null, null ],
    [ null, null, null ],
]

matrix[1][2] = 'O';
matrix[1][1] = 'X';

//matrix[3][3] = 'O';
matrix[0][0] = 'X';
matrix[2][2] = 'O';
matrix[0][2] = 'X';
matrix[1][0] = 'O';
matrix[2][1] = 'O';
matrix[0][1] = 'X';

function sayHi(name) {
    console.log(`Hi there, ${name}!`)
}



let people = ['Alzavier','Brandon','Brandy','Keith','Chris'];

for (let student of people) {
    
    if (student !== 'Keith') {
        sayHi(student)
    }
    
}