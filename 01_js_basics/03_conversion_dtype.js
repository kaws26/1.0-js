let score1="99";
let score2=null;
let score3="45tyuok";
let score4=Number(score1);
let score5=Number(score2);//gives 0 value
let score6=Number(score3);//gives a NaN value
console.table([typeof score4,typeof score5,typeof score6,score4,score5,score6]);