
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("signupForm");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("❌ Passwords do not match!");
            return;
        }

        let users = JSON.parse(localStorage.getItem("SkillSyncUsers")) || [];

        const user = {
            id: Date.now(),
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim().toLowerCase(),
            phone: document.getElementById("phone").value.trim(),
            college: document.getElementById("college").value.trim(),
            branch: document.getElementById("branch").value.trim(),
            teach: document.getElementById("teach").value,
            learn: document.getElementById("learn").value,
            password: password,
            joined: new Date().toLocaleDateString(),
            progress: 0,
            agreement: false,
            quizScore: 0,
            certificate: "Not Issued"
        };

        const exists = users.find(u => u.email === user.email);

        if (exists) {
            alert("❌ Email already exists!");
            return;
        }

        users.push(user);

        localStorage.setItem("SkillSyncUsers", JSON.stringify(users));

        alert("✅ Account Created Successfully!");

        window.location.replace("login.html");

    });

});
