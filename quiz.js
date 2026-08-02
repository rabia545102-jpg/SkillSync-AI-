const skill = localStorage.getItem("selectedSkill") || "HTML";

document.getElementById("quizTitle").innerHTML =
"📘 " + skill + " Skill Assessment";

const quizzes = {

HTML: [

{
question: "1. What does HTML stand for?",
options: [
"Hyper Text Markup Language",
"High Text Machine Language",
"Hyper Transfer Markup Language",
"Home Tool Markup Language"
],
answer: 0
},

{
question: "2. Which HTML tag is used to create a hyperlink?",
options: [
"<a>",
"<link>",
"<href>",
"<url>"
],
answer: 0
},

{
question: "3. Which tag is used for the largest heading?",
options: [
"<h1>",
"<h6>",
"<head>",
"<title>"
],
answer: 0
},

{
question: "4. Which tag inserts an image?",
options: [
"<img>",
"<image>",
"<picture>",
"<src>"
],
answer: 0
},

{
question: "5. Which tag creates a line break?",
options: [
"<br>",
"<break>",
"<lb>",
"<hr>"
],
answer: 0
},

{
question: "6. Which attribute specifies an image path?",
options: [
"src",
"href",
"alt",
"path"
],
answer: 0
},

{
question: "7. Which tag creates an unordered list?",
options: [
"<ul>",
"<ol>",
"<li>",
"<list>"
],
answer: 0
},

{
question: "8. Which tag creates a table row?",
options: [
"<tr>",
"<td>",
"<table>",
"<th>"
],
answer: 0
},

{
question: "9. Which HTML tag is used for forms?",
options: [
"<form>",
"<input>",
"<label>",
"<button>"
],
answer: 0
},

{
question: "10. HTML is mainly used for?",
options: [
"Creating web pages",
"Programming games",
"Managing databases",
"Operating systems"
],
answer: 0
}
],

CSS: [

{
question: "1. What does CSS stand for?",
options: [
"Cascading Style Sheets",
"Creative Style System",
"Computer Style Sheets",
"Colorful Style Sheets"
],
answer: 0
},

{
question: "2. Which property changes text color?",
options: [
"color",
"text-color",
"font-color",
"background"
],
answer: 0
},

{
question: "3. Which property changes background color?",
options: [
"background-color",
"bgcolor",
"background",
"color"
],
answer: 0
},

{
question: "4. Which property changes font size?",
options: [
"font-size",
"text-size",
"size",
"font-style"
],
answer: 0
},

{
question: "5. Which property adds space inside an element?",
options: [
"padding",
"margin",
"border",
"outline"
],
answer: 0
},

{
question: "6. Which property adds space outside an element?",
options: [
"margin",
"padding",
"border",
"outline"
],
answer: 0
},

{
question: "7. Which selector selects an ID?",
options: [
"#id",
".class",
"*",
"tag"
],
answer: 0
},

{
question: "8. Which selector selects a class?",
options: [
".class",
"#class",
"*",
"@class"
],
answer: 0
},

{
question: "9. CSS is used for?",
options: [
"Styling web pages",
"Creating databases",
"Programming",
"Operating systems"
],
answer: 0
},

{
question: "10. Which property makes text bold?",
options: [
"font-weight",
"font-style",
"text-style",
"bold-text"
],
answer: 0
}
],


Java: [

{
question: "1. Java is a ____ language.",
options: [
"Programming Language",
"Database",
"Browser",
"Operating System"
],
answer: 0
},

{
question: "2. Which keyword is used to create an object?",
options: [
"new",
"create",
"object",
"class"
],
answer: 0
},

{
question: "3. JVM stands for?",
options: [
"Java Virtual Machine",
"Java Variable Machine",
"Joint Virtual Machine",
"Java Verified Machine"
],
answer: 0
},

{
question: "4. Which company developed Java?",
options: [
"Sun Microsystems",
"Google",
"Microsoft",
"Apple"
],
answer: 0
},

{
question: "5. Which method starts a Java program?",
options: [
"main()",
"run()",
"start()",
"execute()"
],
answer: 0
},

{
question: "6. Which symbol ends a Java statement?",
options: [
";",
":",
".",
","
],
answer: 0
},

{
question: "7. Which data type stores whole numbers?",
options: [
"int",
"char",
"boolean",
"float"
],
answer: 0
},

{
question: "8. Which keyword is used for inheritance?",
options: [
"extends",
"inherit",
"parent",
"using"
],
answer: 0
},

{
question: "9. Java mainly follows which programming concept?",
options: [
"Object-Oriented Programming",
"Assembly Language",
"Machine Language",
"Binary Language"
],
answer: 0
},

{
question: "10. Which package is automatically imported in Java?",
options: [
"java.lang",
"java.util",
"java.io",
"java.sql"
],
answer: 0
}
],

Python: [

{
question: "1. Python is a ____ language.",
options: [
"Programming Language",
"Database",
"Browser",
"Operating System"
],
answer: 0
},

{
question: "2. Which function is used to display output?",
options: [
"print()",
"display()",
"show()",
"echo()"
],
answer: 0
},

{
question: "3. Which symbol is used for comments?",
options: [
"#",
"//",
"/* */",
"--"
],
answer: 0
},

{
question: "4. Which keyword is used to define a function?",
options: [
"def",
"function",
"func",
"define"
],
answer: 0
},

{
question: "5. Which data type stores whole numbers?",
options: [
"int",
"string",
"float",
"char"
],
answer: 0
},

{
question: "6. Which collection uses square brackets []?",
options: [
"List",
"Tuple",
"Dictionary",
"Set"
],
answer: 0
},

{
question: "7. Which loop is commonly used to iterate over a sequence?",
options: [
"for",
"repeat",
"foreach",
"loop"
],
answer: 0
},

{
question: "8. Which keyword is used for conditions?",
options: [
"if",
"when",
"check",
"case"
],
answer: 0
},

{
question: "9. Which operator is used for exponentiation?",
options: [
"**",
"^",
"//",
"%"
],
answer: 0
},

{
question: "10. Python is popular because it is?",
options: [
"Easy to read",
"Only for web design",
"Only for databases",
"Only for games"
],
answer: 0
}
],


"C++": [

{
question: "1. C++ is an extension of which language?",
options: [
"C",
"Java",
"Python",
"HTML"
],
answer: 0
},

{
question: "2. Which function is the entry point of a C++ program?",
options: [
"main()",
"start()",
"run()",
"begin()"
],
answer: 0
},

{
question: "3. Which symbol ends a C++ statement?",
options: [
";",
":",
".",
","
],
answer: 0
},

{
question: "4. Which header file is used for input and output?",
options: [
"iostream",
"stdio.h",
"string",
"math.h"
],
answer: 0
},

{
question: "5. Which keyword is used to create an object dynamically?",
options: [
"new",
"create",
"make",
"object"
],
answer: 0
},

{
question: "6. Which operator is used for scope resolution?",
options: [
"::",
".",
"->",
":"
],
answer: 0
},

{
question: "7. Which keyword is used for inheritance access?",
options: [
"public",
"private",
"protected",
"friend"
],
answer: 0
},

{
question: "8. Which concept allows functions with the same name?",
options: [
"Function Overloading",
"Inheritance",
"Encapsulation",
"Abstraction"
],
answer: 0
},

{
question: "9. C++ mainly follows which programming paradigm?",
options: [
"Object-Oriented Programming",
"Assembly Language",
"Machine Language",
"Binary Language"
],
answer: 0
},

{
question: "10. Which operator accesses members through a pointer?",
options: [
"->",
".",
"::",
"*"
],
answer: 0
}
],

AI: [

{
question: "1. What does AI stand for?",
options: [
"Artificial Intelligence",
"Automated Internet",
"Advanced Interface",
"Artificial Internet"
],
answer: 0
},

{
question: "2. AI enables computers to?",
options: [
"Learn and make decisions",
"Only store files",
"Only browse the internet",
"Only print documents"
],
answer: 0
},

{
question: "3. Which of the following is an AI application?",
options: [
"Chatbot",
"Calculator",
"Paint",
"Notepad"
],
answer: 0
},

{
question: "4. AI systems learn mainly from?",
options: [
"Data",
"Paper",
"Keyboard",
"Monitor"
],
answer: 0
},

{
question: "5. Which field is a subset of AI?",
options: [
"Machine Learning",
"HTML",
"CSS",
"Networking"
],
answer: 0
},

{
question: "6. Which company created ChatGPT?",
options: [
"OpenAI",
"Google",
"Microsoft",
"Apple"
],
answer: 0
},

{
question: "7. Which is an example of AI?",
options: [
"Voice Assistant",
"Keyboard",
"Printer",
"Mouse"
],
answer: 0
},

{
question: "8. AI is commonly used in?",
options: [
"Self-driving cars",
"Paper books",
"Pens",
"Tables"
],
answer: 0
},

{
question: "9. AI helps automate?",
options: [
"Tasks",
"Trees",
"Roads",
"Clouds"
],
answer: 0
},

{
question: "10. AI improves by using?",
options: [
"More quality data",
"More keyboards",
"More printers",
"More monitors"
],
answer: 0
}
],

"Machine Learning": [

{
question: "1. Machine Learning is a subset of?",
options: [
"Artificial Intelligence",
"HTML",
"CSS",
"Java"
],
answer: 0
},

{
question: "2. Machine Learning models learn from?",
options: [
"Data",
"Keyboard",
"Monitor",
"Printer"
],
answer: 0
},

{
question: "3. Which is a type of Machine Learning?",
options: [
"Supervised Learning",
"Typing",
"Painting",
"Networking"
],
answer: 0
},

{
question: "4. Which language is widely used for Machine Learning?",
options: [
"Python",
"HTML",
"CSS",
"C"
],
answer: 0
},

{
question: "5. Machine Learning is mainly used for?",
options: [
"Prediction",
"Typing",
"Drawing",
"Printing"
],
answer: 0
},

{
question: "6. Spam email detection uses?",
options: [
"Machine Learning",
"HTML",
"CSS",
"Excel"
],
answer: 0
},

{
question: "7. Training data is used to?",
options: [
"Train the model",
"Delete files",
"Browse websites",
"Format disks"
],
answer: 0
},

{
question: "8. The accuracy of a model depends on?",
options: [
"Quality of data",
"Monitor size",
"Keyboard type",
"Internet speed"
],
answer: 0
},

{
question: "9. Which algorithm is commonly used for classification?",
options: [
"Decision Tree",
"HTML",
"CSS",
"PowerPoint"
],
answer: 0
},

{
question: "10. Machine Learning models improve with?",
options: [
"More relevant data",
"More printers",
"More keyboards",
"More browsers"
],
answer: 0
}
],

"Web Development": [

{
question:"1. Which language is used to structure web pages?",
options:["HTML","CSS","Java","Python"],
answer:0
},

{
question:"2. Which language is used for styling web pages?",
options:["CSS","HTML","Python","Java"],
answer:0
},

{
question:"3. Which language adds interactivity to websites?",
options:["JavaScript","HTML","CSS","SQL"],
answer:0
},

{
question:"4. Which tag links a CSS file?",
options:["<link>","<style>","<css>","<script>"],
answer:0
},

{
question:"5. Which tag links a JavaScript file?",
options:["<script>","<js>","<javascript>","<link>"],
answer:0
},

{
question:"6. Which property changes the background color?",
options:["background-color","color","font-size","margin"],
answer:0
},

{
question:"7. Which HTML element is used for user input?",
options:["<input>","<form>","<button>","<label>"],
answer:0
},

{
question:"8. Which language is used on the server side?",
options:["Node.js","HTML","CSS","Bootstrap"],
answer:0
},

{
question:"9. Which database is commonly used with web applications?",
options:["MySQL","Paint","Excel","PowerPoint"],
answer:0
},

{
question:"10. Full stack development includes?",
options:[
"Frontend and Backend",
"Only HTML",
"Only CSS",
"Only JavaScript"
],
answer:0
}
],

};

const questions = quizzes[skill];

const container = document.getElementById("questionsContainer");

function escapeHtml(str) {
return String(str)
.replace(/&/g, "&amp;")
.replace(/</g, "&lt;")
.replace(/>/g, "&gt;");
}

questions.forEach((q, index) => {

let html = `<div class="question">
<h2>${escapeHtml(q.question)}</h2>`;

q.options.forEach((option, i) => {

html += `
<label>
<input type="radio" name="q${index}" value="${i}">
${escapeHtml(option)}
</label>
`;

});

html += `</div>`;

container.innerHTML += html;

});

function submitQuiz() {

let score = 0;

for (let i = 0; i < questions.length; i++) {

const answer = document.querySelector(`input[name="q${i}"]:checked`);

if (!answer) {

alert("Please answer all questions.");

return;

}

if (Number(answer.value) === questions[i].answer) {

score++;

}

}

localStorage.setItem("quizScore", score);
localStorage.setItem("quizSkill", skill);

if (score >= 7) {

alert(`🎉 Congratulations!\n\nYou scored ${score}/10\nQualified Tutor`);

} else {

alert(`📚 Your score is ${score}/10\nNeeds Improvement`);

}

window.location.href = "dashboard.html";

}
