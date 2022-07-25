/* eslint-disable */
let pronoun = ['the', 'our', 'your', 'his', 'her'];
let adj = ['great', 'galactic', 'massive', 'diabolic'];
let noun = ['apple', 'bear', 'coyote', 'shark', 'jogger', 'racoon'];
let ext = ['com', 'org', 'gov', 'edu']

window.onload = function() {
  //write your code here
  function domainNameGen(pronounArr, adjArr, nounArr, extArr) {
    let domainName = "";
    for(let i = 0; i < Array.length; i++){
      for(let r = 0; r < arr[i].length; r++){
        for(let p = 0; p < arr[r].length; p++){
          for(let t = 0; t<arr[p].length; t++ ){

          }
        }

      }
    }
    

    
    return `${myPronoun}` + `${myAdj}` + `${myNoun}` + `.` + `${myExt}`;
  }

  let myDNG = document.getElementById("myDNG");
  myDNG.innerHTML=domainNameGen(pronoun, adj, noun, ext);
  console.log(myDNG);
}; 
