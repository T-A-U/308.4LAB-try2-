//Had help, didnt understand/will practice with freecodecamp

let list = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26\n01,JC,Shepard,2024\n02,Luci,chaos rep,2024` ;

let array = list.split("\n");



let rows = [];
for (let i = 0; i < array.length; i++){
    rows.push(array[i].split(","));
}


let rowsTwo = rows.slice(1);


  const trueList = rowsTwo.map(row => {
    return {
      id: row[0],
      name: row[1],
      occupation: row[2],
      age: row[3]
    };
  });





  //  1 
 trueList.pop();


 //  2 
let person = { id: "48", name: "Barry", occupation: "Runner", age: "25" } 

  trueList.splice(1, 0, person); 


  //   3 
trueList.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })

// console.log(trueList);


// 4
let averageAge;
let ageCombined = 0;

for (let i = 0; i < trueList.length; i++){

  ageCombined += parseInt(trueList[i].age);

 averageAge = ageCombined / trueList.length;
    
}




//last question

let show = trueList.map(getData);
function getData(rows) {
  return [rows.id,rows.name,rows.occupation,rows.age].join(",");
}
let header = 'id,name,occupation,age';
show.unshift(header);


let csvData = show.toString();

console.log(trueList);
console.log(show);
console.log(csvData);