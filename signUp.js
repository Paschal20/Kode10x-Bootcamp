const signUpForm = document.getElementById("signUpForm");
const myname = document.getElementById("myname").value;
const date = document.getElementById("date").value;
const email = document.getElementById("email").value;

signUpForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (myname.trim() === "" && date.trim() === "" && email.trim() ==="") {
    return alert("All field required");
  } else {
    
    userData = {
      myname,
      date,
      email,
    };
    
    localStorage.setItem("users", JSON.stringify(userData));
    alert("sign up successfully");
  }
  setTimeout(() => {
    window.location.href = "signin.html";
  }, 1500);
});
