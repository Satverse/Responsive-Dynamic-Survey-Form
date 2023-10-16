var firstName = document.getElementById("firstName");
var LastName = document.getElementById("LastName");
var Email = document.getElementById("Email");
var Mobile = document.getElementById("mobile");
var Github = document.getElementById("github");
var Contribution = document.getElementById("contro");
var pullReq = document.getElementById("pull");
var Linkedin = document.getElementById("Linkedin");
const form = document.getElementById("form");
var Profession = document.getElementById("Profession");
var selectedElement = Profession.options[Profession.selectedIndex].text;
const toast = document.querySelector(".toast");

// function for gender checking

function genderCheck() {
  var gender = " ";
  if (document.getElementById("male").checked) {
    gender = document.getElementById("male").value;
  }
  if (document.getElementById("female").checked) {
    gender = document.getElementById("female").value;
  }

  return gender;
}

// On submit function

form.addEventListener("submit", (e) => {
  e.preventDefault();

//   creating object for storing form data

  let data = {
    FirstName: firstName.value,
    LastName: LastName.value,
    Email: Email.value,
    GithubId: Github.value,
    Contribution: Contribution.value,
    PullRequest: pullReq.value,
    linkedin: Linkedin.value,
    Gender: genderCheck(),
    Profession: selectedElement,
  };


// converting this object to json

  const jsondata = JSON.stringify(data);

//   loging the form data in json format on console

  console.log(jsondata); 

// Clearing value of input filed after submiting

  firstName.value = "";
  LastName.value = "";
  Email.value = "";
  Github.value = "";
  Contribution.value = "";
  pullReq.value = "";
  Linkedin.value = "";
  Mobile.value = "";


// toast part
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast);
toastBootstrap.show();

});
