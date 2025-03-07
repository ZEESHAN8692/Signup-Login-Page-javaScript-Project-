const Login = () => {
  const loginButton = document.getElementById("login-btn");
  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;

    const sighUpEmail = localStorage.getItem("signUpEmail");
    const signUpPassword = localStorage.getItem("signUpPassword");

    if (loginEmail === sighUpEmail && loginPassword === signUpPassword) {
      alert("Login Successfull");
      window.location.href = "home.html";
    } else if (loginEmail !== sighUpEmail) {
      alert("Wrong Email Id");
    } else if (loginPassword !== signUpPassword) {
      alert("Wrong password");
    } else if (!loginEmail && !loginPassword) {
      alert("Please Enter Value");
    }
  });
  localStorage.getItem("signUpEmail");
  localStorage.getItem("signUpPassword");
};
Login();

function Logout() {
  alert("are sure!");
  window.location.href = "../login.html";
}
