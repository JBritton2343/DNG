/* eslint-disable */
let pronoun = ['the', 'our', 'your'];
let adj = ['great', 'galactic', 'diabolic'];
let noun = ['apple', 'bear', 'coyote'];
let ext = ['com', 'org', 'edu'];


  //write your code here
  const domainNameGen = (pronounArr, adjArr, nounArr, extArr) => {

      for(let i=0; i<pronounArr.length; i++){
        for(let j=0; j<adjArr.length; j++){
          for(let k=0; k<nounArr.length; k++){
            for(let l=0; l<extArr.length; l++){
              
            }
          }
        }
      }
      let string = `${pronounArr[i]}${adjArr[j]}
              ${nounArr[k]}.${extArr[l]}`
      return string;
    }
      

     

      
    
   

     
  let dngList = document.getElementById("myDNG");
  myDNG.innerHTML=domainNameGen(pronoun, adj, noun, ext);
  console.log(dngList);


