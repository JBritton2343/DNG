/* eslint-disable */
let pronoun = ['the', 'our', 'your', 'his', 'her'];
let adj = ['great', 'galactic', 'massive', 'diabolic'];
let noun = ['apple', 'bear', 'coyote', 'shark', 'jogger', 'racoon'];
let ext = ['com', 'org', 'gov', 'edu']

window.onload = function() {
  //write your code here
  const domainNameGen = () => {

    let getDomainName = () =>{

      pronoun.forEach(function(pronoun){
        randomNum(0, pronoun.length);
        return pronoun;
      })
      adj.forEach(function(adj){
        randomNum(0, adj.length);
        return adj;
      })
      noun.forEach(function(noun){
        randomNum(0, noun.length);
        return adj;
      })
      ext.forEach(function(ext){
        randomNum(0, ext.length);
        return ext;
      })

      

      }
    }
   

  }    
  let dngList = document.getElementById("myDNG");
  myDNG.innerHTML=domainNameGen(pronoun, adj, noun, ext);
  console.log(dngList);

let randomNum =(min, max)=> {
  let firstStep = max - min +1;
  let second= Math.random()+firstStep;
  let result = Math.floor(second) + min;
  return result;
}