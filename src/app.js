/* eslint-disable */
let pronoun = ['the', 'our', 'your', 'his', 'her'];
let adj = ['great', 'galactic', 'massive', 'diabolic'];
let noun = ['apple', 'bear', 'coyote', 'shark', 'jogger', 'racoon'];

window.onload = function() {
  //write your code here
  function DNG(pronounArr, adjArr, nounArr) {
    let randPronoun = genRanNum(pronounArr.length);
    let myPronoun = pronounArr[randPronoun];
    console.log(myPronoun);

    let randadj = genRanNum(adjArr.length);
    let myAdj = adjArr[randAdj];
    console.log(myAdj);

    let randNoun = genRanNum(nounArr.length);
    let myNoun = nounArr[randNoun];
    console.log(myNoun);

    
    return `${myPronoun}` + `${myAdj}` + `${myNoun}` + `.com`;
  }

  let myDNG = document.getElementById("myDNG");
  myExcuse.innerHTML=DNG(pronoun, adj, noun);
  console.log(myDNG);
}; 
function genRanNum(max) {
  return Math.floor(Math.random() * max);
}
