/* eslint-disable */
let pronoun = ['the', 'our', 'your', 'his', 'her'];
let adj = ['great', 'galactic', 'massive', 'diabolic'];
let noun = ['apple', 'bear', 'coyote', 'shark', 'jogger', 'racoon'];
let ext = ['com', 'org', 'gov', 'edu']

window.onload = function() {
  //write your code here
  function DNG(pronounArr, adjArr, nounArr) {
    let randPronoun = genRanNum(pronounArr.length);
    let myPronoun = pronounArr[randPronoun];
    console.log(myPronoun);

    let randAdj = genRanNum(adjArr.length);
    let myAdj = adjArr[randAdj];
    console.log(myAdj);

    let randNoun = genRanNum(nounArr.length);
    let myNoun = nounArr[randNoun];
    console.log(myNoun);

    let randExt = genRanNum(extArr.length);
    let myExt = extArr[randExt];
    console.log(myExt);

    
    return `${myPronoun}` + `${myAdj}` + `${myNoun}` + `.` + `${myExt}`;
  }

  let myDNG = document.getElementById("myDNG");
  myDNG.innerHTML=DNG(pronoun, adj, noun, ext);
  console.log(myDNG);
}; 
function genRanNum(max) {
  return Math.floor(Math.random() * max);
}
