/* eslist-disable */

window.onload = () => {
  console.log("Hello World");
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
};
let generateExcuse = () => {
  let who = ["My dog", "My Grandma", "His Turtle", "My bird"];
  let action = ["ate", "peed", "crush", "broke"];
  let what = ["my homework", "the key", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when i finished",
    "during my break",
    "while i was studying",
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
