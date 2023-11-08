const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const signInForm = document.getElementById("patient-login-form");
const signUpForm = document.getElementById("patient-signup-form");
const SignInFormDoc = document.getElementById("doctor-login-form");
const signUpFormDoc = document.getElementById("doctor-signup-form");


sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// document.getElementById('logout-button').addEventListener('click', function() {
//   window.location.href = 'http://127.0.0.1:5501/frontend/public/html/home.html'; // Replace '/' with the URL of your homepage
// });



const patientSignIn = (event) => {
  event.preventDefault();
  const Email = document.getElementById("patientLogInEmail").value;
  const Password = document.getElementById("patientPass").value;

  const logInData = { Email, Password };


  fetch("http://localhost:8000/api/v1/expert/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(logInData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data?.success) {
        window.location.href = 'http://127.0.0.1:5501/frontend/public/html/home.html';
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred during login. Please try again.");
    });
}


const patientSignUp = (event) => {
  event.preventDefault();
  const FirstName = document.getElementById("fn").value;
  const LastName = document.getElementById("ln").value;
  const Username = document.getElementById("un").value;
  const Email = document.getElementById("patientLogInmail").value;
  const PhoneNumber = document.getElementById("pnumber").value;
  const NID = document.getElementById("nidNo").value;
  const Password = document.getElementById("patientass").value;

  const SignUpData = { FirstName, LastName, Username, Email, PhoneNumber, NID, Password };

  fetch("http://localhost:8000/api/v1/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(SignUpData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data?.success) {
        window.location.href = 'http://127.0.0.1:5501/frontend/public/html/patient_portal.html';
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred during signup. Please try again.");
    });
}

const doctorSignIn = (event) => {
  event.preventDefault();
  const Email = document.getElementById("DoctorLogInEmail");
  const Password = document.getElementById("DoctorLogInPass");

  const loginData = { Email, Password };

  fetch("http://localhost:8000/api/v1/expert/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data?.success) {
        window.location.href = 'http://127.0.0.1:5501/frontend/public/html/home.html';
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred during login. Please try again.");
    });
    //console.log(payload);
}



const doctorSignUp = (event) => {
  event.preventDefault();
  const Username = document.getElementById("unn").value;
  const BMDC_Registration_Number = document.getElementById("bmdcRegNo").value;
  const FullName = document.getElementById("fn").value;
  const Specialization = document.getElementById("specs").value;
  const Email = document.getElementById("DoctorLogInEmail").value;
  const PhoneNumber = document.getElementById("phoneNo").value;
  const Password = document.getElementById("DoctorLogInPass").value;

  const SignUpData = { Username, BMDC_Registration_Number, FullName, Specialization, Email, PhoneNumber, Password };

  fetch("http://localhost:8000/api/v1/expert/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(SignUpData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data?.success) {
        window.location.href = 'http://127.0.0.1:5501/frontend/public/html/doctor_portal.html';
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred during signup. Please try again.");
    });
}

