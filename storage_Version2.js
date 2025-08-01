// storage.js
// Utility functions for storing and retrieving D- Journal users and data in localStorage

const USER_STORAGE_KEY = "djournal_users";

// Save a user object to localStorage (by email)
function saveUser(user) {
  let users = JSON.parse(localStorage.getItem(USER_STORAGE_KEY) || "{}");
  users[user.email] = user;
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(users));
}

// Retrieve a user object by email
function getUserByEmail(email) {
  let users = JSON.parse(localStorage.getItem(USER_STORAGE_KEY) || "{}");
  return users[email] || null;
}

// Set the logged in email
function setLoggedInEmail(email) {
  localStorage.setItem("loggedInEmail", email);
}

// Get the logged in email
function getLoggedInEmail() {
  return localStorage.getItem("loggedInEmail");
}

// Remove the logged in email (logout)
function removeLoggedInEmail() {
  localStorage.removeItem("loggedInEmail");
}