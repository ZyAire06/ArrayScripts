let myScores = [92, 98, 84, 76, 89, 99, 100];
console.log(myScores);

let yourScores = [82, 98, 94, 88, 92, 100, 100];

let sum = 0; 
function getAverage(myScores) {
     let numMyScores = myScores.length;
    for(let i=0; i < numMyScores; i++){
        console.log(`i is ${i}`);
        let avg =(sum/numMyScores).toFixed(2);
        
       return avg;
    }

    
}

getAverage(myScores);