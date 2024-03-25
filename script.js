let greetings = ["Hi", "Hello", "Hola", "Hey", "SUP", "Yo", "Howdy"];
let names = ["Andrei", "Michael", "John", "Angelina", "Sofia", "Alisha", "Sarah", "Michael", "John", "Angelina", "Sofia", "Alisha", "Sarah", "Michael", "John", "Angelina", "Sofia", "Alisha", "Sarah"];
let jobs = ["Developer", "Designer", "Chef", "Teacher", "Engineer", "Doctor", "Lawyer", "Politician", "Engineer", "Doctor", "Lawyer", "Politician", "Engineer", "Doctor", "Lawyer", "Politician"];

function generateRandomSentence() {
    let greeting = greetings[Math.floor(Math.random() * greetings.length)];
    let name = names[Math.floor(Math.random() * names.length)];
    let job = jobs[Math.floor(Math.random() * jobs.length)];
    let newSentence = `${greeting}, my name is ${name} and I am a ${job}.`;
    return newSentence;
}

let paragraph = document.getElementById("message");
paragraph.innerHTML = generateRandomSentence();

let button = document.getElementById("btn");
console.log(button)
button.addEventListener("click", function() {
    let newSentence = generateRandomSentence();
    paragraph.innerHTML = newSentence;
});
