// let rakib = document.getElementById("ra");
// document.createElement("h1");
// rakib.innerText = "rakib";
// document.body.appendChild(rakib);
// // console.log(rakib);

// const add = document.createElement("h1");
// add.innerText = "ist a heading";

// const show = document.getElementById("rakittb");

// show.appendChild(add);

const add = document.createElement("p");
add.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptate ad suscipit mollitia deleniti dicta corrupti, iusto nobis ab consectetur nam accusamus vel dolore aperiam sequi? Cum sequi necessitatibus fugit?";

const show1 = document.getElementById("rakittb");
show1.appendChild(add);

const css = document.querySelectorAll("p");
for (let color of css) {
  // console.log(color);

  color.style.backgroundColor = "#F54927";
  color.style.padding = "20px";
  color.style.color  = "white";
  color.style.fontSize = "50px";
  color.style.borderRadius = "200px";
}
