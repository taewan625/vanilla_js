// classList _ i control class seperatery very cool     developer.mozilla.org
// className : change everything, doesnt care about before class

// const h1 = document.querySelector(".hello h1");
// // This function is basic one
// function handleh1Click() {
//   const clickedClass = "clicked";
//   if (h1.classList.contains(clickedClass)) {
//     // classList have property like contains, remove, add . so this mean only thinking about clickedClass
//     h1.classList.remove(clickedClass); // if clickedClass is true, remove only clickedClass's class
//   } else {
//     h1.classList.add(clickedClass); // else time, add clickedClass's class
//   }
// }
// h1.addEventListener("click", handleh1Click);

// upgrade function toggle!!
// toggle which inside classList function : check class name -> if classname exist toggle remove classnmae else toggle add classname
const h1 = document.querySelector(".hello h1");

function handleh1Click() {
  // const clickedClass = "clicked";     // -- we only use one classname so no need make const
  // h1.classList.toggle(clickedClass);
  h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleh1Click);
