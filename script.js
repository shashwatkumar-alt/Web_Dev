var a = {name: 'shashwat', type : 'student', semester : '4'};
var b = a;      // copying with reference.
var c = {...a}; // copying it primitively.              ... this 3 dots are spread operators.
b.semester = '5';

// for(let i = 0;i<500;i++){
//     console.log(i);
// }