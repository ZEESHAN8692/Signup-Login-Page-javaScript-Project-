const signUp = () => {
  const signUpButton = document.getElementById("signup-btn");
  signUpButton.addEventListener("click", (e) => {
    e.preventDefault();
    const signUpEmail = document.getElementById("signup-email").value;
    const signUpPassword = document.getElementById("signup-password").value;

    if (signUpEmail && signUpPassword) {
      localStorage.setItem("signUpEmail", signUpEmail);
      localStorage.setItem("signUpPassword", signUpPassword);
      // alert("Sign Up Successfully");
      Swal.fire({
        title: "Sign Up Successful!",
        icon: "success",
        draggable: true,
      }).then((result) => {
        if (result) {
          window.location.href = "index.html";
        }
      });
    } else if (!signUpPassword && !signUpEmail) {
      alert("Please Enter Value");
    }
  });
};
signUp();
