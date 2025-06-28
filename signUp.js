const myname = document.getElementById("myname").value;
const date = document.getElementById("date").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

signUpForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (myname === "" || date === "" || email === "" || password === "") {
    alert("All field required");
  }

  const userData = {
    myname: myname,
    date: date,
    email: email,
    password: password,
  };

  localStorage.setItem("users", JSON.stringify(userData));
  alert("sign up successfully");

  setTimeout(() => {
    window.location.href = "signin.html";
  }, 1500);
});



function signIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const storedPassword = localStorage.getItem(email);
  if (storedPassword === password) {
    alert("Login successful!");
  } else {
    alert("Invalid username or password");
  }
}
