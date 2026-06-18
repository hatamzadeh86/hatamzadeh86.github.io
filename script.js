const skills = [
"Python",
"Machine Learning",
"Artificial Intelligence",
"Data Science",
"Git & GitHub",
"Pytorch",
"Deep Learning"
];

const container = document.getElementById("skills-container");

if(container){

skills.forEach(skill=>{

const card=document.createElement("div");

card.className="skill-card";

card.innerHTML=skill;

container.appendChild(card);

});

}
