/* eslint-disable */
let pronoun = ['the', 'our', 'your', 'his', 'her'];
let adj = ['great', 'galactic', 'massive', 'diabolic'];
let noun = ['apple', 'bear', 'coyote', 'shark', 'jogger', 'racoon'];
let ext = ['com', 'org', 'gov', 'edu']

window.onload = function() {
  //write your code here
  function domainNameGen(pronounArr, adjArr, nounArr, extArr) {
    let domainName = "";
    for(let i = 0; i < pronounArr.length; i++){
      for(let j = 0; j < pronounArr.length[i]; j++);
    
    }
      for(let m = 0; m < adjArr.length; m++){
        for(let n = 0; n < adjArr.length[m]; n++);
      }
      for (let k = 0; k < nounArr.length; k++){
        for(let l= 0; k < nounArr.length[k]; l++);
      }
      for(let w = 0; w < extArr.length; w++){

      }
          
     

    
    return `${myPronoun}` + `${myAdj}` + `${myNoun}` + `.` + `${myExt}`;
  }

  let dngList = document.getElementById("myDNG");
  myDNG.innerHTML=domainNameGen(pronoun, adj, noun, ext);
  console.log(dngList);
}; 
