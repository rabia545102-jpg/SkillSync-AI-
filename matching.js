// Demo Students (8 Matching Pairs)

const users = [

{
name:"Rabia",
college:"MJCET",
branch:"CSE",
teach:"Java",
learn:"Python",
days:"Monday, Wednesday, Friday",
time:"6:00 PM - 7:00 PM",
score:"98%"
},

{
name:"Ahmed",
college:"MJCET",
branch:"CSE",
teach:"Python",
learn:"Java",
days:"Monday, Wednesday, Friday",
time:"6:00 PM - 7:00 PM",
score:"98%"
},

{
name:"Sarah",
college:"Osmania University",
branch:"IT",
teach:"HTML",
learn:"CSS",
days:"Tuesday, Thursday",
time:"5:00 PM - 6:00 PM",
score:"97%"
},

{
name:"Rahul",
college:"Osmania University",
branch:"IT",
teach:"CSS",
learn:"HTML",
days:"Tuesday, Thursday",
time:"5:00 PM - 6:00 PM",
score:"97%"
},

{
name:"Priya",
college:"JNTUH",
branch:"CSE",
teach:"C++",
learn:"Machine Learning",
days:"Weekends",
time:"10:00 AM - 11:00 AM",
score:"96%"
},

{
name:"Karthik",
college:"JNTUH",
branch:"AI & DS",
teach:"Machine Learning",
learn:"C++",
days:"Weekends",
time:"10:00 AM - 11:00 AM",
score:"96%"
},

{
name:"Aisha",
college:"CBIT",
branch:"ECE",
teach:"Artificial Intelligence",
learn:"Web Development",
days:"Everyday",
time:"7:00 PM - 8:00 PM",
score:"99%"
},

{
name:"Vikram",
college:"CBIT",
branch:"CSE",
teach:"Web Development",
learn:"Artificial Intelligence",
days:"Everyday",
time:"7:00 PM - 8:00 PM",
score:"99%"
},

{
name:"Sneha",
college:"VNR VJIET",
branch:"CSE",
teach:"JavaScript",
learn:"Python",
days:"Monday, Friday",
time:"8:00 PM - 9:00 PM",
score:"95%"
},

{
name:"Arjun",
college:"VNR VJIET",
branch:"IT",
teach:"Python",
learn:"JavaScript",
days:"Monday, Friday",
time:"8:00 PM - 9:00 PM",
score:"95%"
},

{
name:"Neha",
college:"GNITS",
branch:"CSE",
teach:"SQL",
learn:"Java",
days:"Tuesday, Saturday",
time:"4:00 PM - 5:00 PM",
score:"94%"
},

{
name:"Rohan",
college:"GNITS",
branch:"IT",
teach:"Java",
learn:"SQL",
days:"Tuesday, Saturday",
time:"4:00 PM - 5:00 PM",
score:"94%"
},

{
name:"Meera",
college:"Stanley",
branch:"CSE",
teach:"React",
learn:"Node.js",
days:"Wednesday, Friday",
time:"6:00 PM - 7:00 PM",
score:"97%"
},

{
name:"Aditya",
college:"Stanley",
branch:"IT",
teach:"Node.js",
learn:"React",
days:"Wednesday, Friday",
time:"6:00 PM - 7:00 PM",
score:"97%"
},

{
name:"Fatima",
college:"Muffakham Jah",
branch:"AI & ML",
teach:"Data Science",
learn:"Artificial Intelligence",
days:"Weekends",
time:"3:00 PM - 4:00 PM",
score:"96%"
},

{
name:"Imran",
college:"Muffakham Jah",
branch:"CSE",
teach:"Artificial Intelligence",
learn:"Data Science",
days:"Weekends",
time:"3:00 PM - 4:00 PM",
score:"96%"
}

];

// Logged-in user
const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!currentUser) {
    alert("Please login first!");
    window.location.href = "login.html";
}

// Show current user details
document.getElementById("name").textContent = currentUser.name;
document.getElementById("teach").textContent = currentUser.teach;
document.getElementById("learn").textContent = currentUser.learn;

function findMatch() {

    const result = document.getElementById("result");
    const matchList = document.getElementById("matchList");

    result.style.display = "block";
    matchList.innerHTML = "";

    const matches = users.filter(user =>
        user.teach === currentUser.learn &&
        user.learn === currentUser.teach
    );

    if (matches.length === 0) {
        matchList.innerHTML = `
        <h3>❌ No Match Found</h3>
        <p>No student currently matches your skills.</p>`;
        return;
    }

    matches.forEach(user => {

        matchList.innerHTML += `
        <div class="card" style="margin-top:20px;">

            <h2>${user.name}</h2>

            <p><strong>College:</strong> ${user.college}</p>

            <p><strong>Branch:</strong> ${user.branch}</p>

            <p><strong>Can Teach:</strong> ${user.teach}</p>

            <p><strong>Wants to Learn:</strong> ${user.learn}</p>

            <p><strong>Available Days:</strong> ${user.days}</p>

            <p><strong>Available Time:</strong> ${user.time}</p>

            <p style="color:limegreen;font-weight:bold;">
            🤖 AI Match Score: ${user.score}
            </p>

            <button class="login-btn"
            onclick="requestSession('${user.name}')">
            Request Session
            </button>

        </div>
        `;
    });
}
function requestSession(name) {

    localStorage.setItem("matchedTutor", name);

    alert("✅ Session request sent to " + name + " successfully!");

    window.location.href = "agreement.html";

}
