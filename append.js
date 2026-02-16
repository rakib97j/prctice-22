const select = document.getElementById("main");

const newDoc = document.createElement("section");

newDoc.innerHTML = `
<section>
<h1> this is a heading </h1>
<ul>
<li>1st</li>
<li>2nd</li>
<li>3rd</li>
<li>4th</li>
<li>5th</li>
</ul>
</section>
`;

select.appendChild(newDoc);

// add a div
const otherNew = document.createElement("div");
otherNew.innerHTML = `
<div>
<h1>
ones a heading this is
</h1>
<p> i am rakibul hassan rakib ,i am a student of programing hero also cse dep. i am enjoying codding with PH team. one day i will be a great developer inShaAllha ,pray for me.
</p>
</div>
`;

select.appendChild(otherNew);
