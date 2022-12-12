/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload =
function generator() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let siteType = [".org", ".com", ".gov"];
  // console.log("Hello Rigo from the console!");
  for (let i = 0; i < pronoun.length; i++)
    for (let c = 0; c < adj.length; c++)
      for (let k = 0; k < noun.length; k++)
        for (let l = 0; l < siteType.length; l++)
          console.log(pronoun[i] + adj[c] + noun[k] + siteType[l]);
}
console.log(generator());
