// auth.js
// Shared user-data layer. Every page (signup, login, dashboard, profile,
// matching, schedule, certificate) includes this file BEFORE its own
// script, and uses these functions instead of touching localStorage
// directly. That's what keeps all pages in sync on one data source.

const USERS_KEY = "SkillSyncUsers";        // array of every registered account
const SESSION_KEY = "SkillSyncLoggedInEmail"; // email of whoever is currently logged in

// ---- Reading/writing the full user list ----

function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function addUser(user) {
  const users = getUsers();
  users.push(user);
  saveUsers(users);
}

function findUserByEmail(email) {
  return getUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
}

// ---- Session (who's logged in right now) ----

function setLoggedInUser(email) {
  localStorage.setItem(SESSION_KEY, email.toLowerCase());
}

function getLoggedInEmail() {
  return localStorage.getItem(SESSION_KEY);
}

function getCurrentUser() {
  const email = getLoggedInEmail();
  if (!email) return null;
  return findUserByEmail(email);
}

// Merge changes into the logged-in user's own record only -- never
// touches or overwrites any other account in the array.
function updateCurrentUser(updates) {
  const email = getLoggedInEmail();
  if (!email) return;
  const users = getUsers();
  const index = users.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
  if (index === -1) return;
  users[index] = { ...users[index], ...updates };
  saveUsers(users);
}

function logout() {
  localStorage.removeItem(SESSION_KEY);
}

// Call at the top of any page that requires a logged-in user
// (dashboard, profile, matching, schedule, certificate).
function requireLogin() {
  if (!getCurrentUser()) {
    window.location.href = "login.html";
  }
}
