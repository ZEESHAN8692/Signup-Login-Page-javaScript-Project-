let a;
let b;
const signUp = () => {
  // const signUpForm = document.getElementById("signUpForm");
  // signUpForm.addEventListener("submit", (e) => {
  //   e.preventDefault();
  const signUpButton = document.getElementById("signup-btn");
  signUpButton.addEventListener("click", (e) => {
    e.preventDefault();
    const signUpEmail = document.getElementById("signup-email").value;
    const signUpPassword = document.getElementById("signup-password").value;

    if (signUpEmail && signUpPassword) {
      a = localStorage.setItem("signUpEmail", signUpEmail);
      b = localStorage.setItem("signUpPassword", signUpPassword);
      alert("Sign Up Successfull");
    } else if (!signUpPassword && !signUpEmail) {
      alert("Please Enter Value");
    }
  });
  // });
};
signUp();
console.log(a);
function Login(EmailSignUp, EmailPasword) {}
