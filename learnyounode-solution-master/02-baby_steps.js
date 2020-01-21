//baby steps


// for test argument 
// if(process.argv.length < 3) {
//     console.log('Please specify a file to read');
//     return;
// 

let sum=0;
for(let i=2;i<process.argv.length;i++){
    sum+=Number(process.argv[i]);
}
console.log(sum)