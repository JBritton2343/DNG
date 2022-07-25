/* eslint-disable */
let pronoun = ['the', 'our', 'your', 'his', 'her'];
let adj = ['great', 'galactic', 'massive', 'diabolic'];
let noun = ['apple', 'bear', 'coyote', 'shark', 'jogger', 'racoon'];
let ext = ['com', 'org', 'gov', 'edu']

window.onload = function() {
  //write your code here
  const domainNameGen = () => {

    let domainName = () =>
    `${prounoun[randomNum(pronoun.length)]}${adj[randomNum(adj.length)]}
    ${noun[randomNum(noun.length)]}.${ext[randomNum(ext.length)]}`
  }    
  let dngList = document.getElementById("myDNG");
  myDNG.innerHTML=domainNameGen();
  console.log(dngList);
}; 
let randomNum =(max)=> Math.floor(Math.random() * max);