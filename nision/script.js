// Login Form Submission
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Check if the username exists in local storage
  if (localStorage.getItem(username) !== null) {
    var savedPassword = localStorage.getItem(username);
    // Check if the password matches
    if (savedPassword === password) {
      // Save username and password to session storage
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('password', password);

      window.location.href = 'grades.html';
    } else {
      alert('Invalid password');
    }
  } else {
    alert('Invalid username');
  }
});

// Signup Form Submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Check if the username already exists in local storage
  if (localStorage.getItem(username) !== null) {
    alert('Username already exists. Please choose a different username.');
  } else {
    // Store the username and password in local storage
    localStorage.setItem(username, password);

    // Save username and password to session storage
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);

    // Redirect to the login page
    window.location.href = 'login.html';
  }
});
