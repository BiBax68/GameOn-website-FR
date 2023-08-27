
document.addEventListener("DOMContentLoaded", function () {

  function init() {

    eventmodal();

    validate();
  }

  init();

});

function eventmodal() {

  const modalBtn = document.querySelectorAll(".modal-btn");
  const closeModalBtn = document.querySelector(".close");

  closeModalBtn.addEventListener("click", closeModal);
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
};

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function launchModal() {
  const modalbg = document.querySelector(".bground");
  modalbg.style.display = "block";
}

function closeModal() {
  const modalbg = document.querySelector(".bground");
  modalbg.style.display = "none";
}

function validate() {

  let sendbtn = document.getElementsByClassName("btn-submit")[0];

  sendbtn.addEventListener("click", (e) => {
    e.preventDefault();

    const form = document.querySelectorAll(".gamingForm");

    if (validationregex(form)) {

      let objectInfo = {
        nom: form[0].children[1].children[2].value,
        prenom: form[0].children[0].children[2].value,
        email: form[0].children[2].children[2].value,
        datedenaissance: form[0].children[3].children[2].value,
        combiendetournois: form[0].children[4].children[2].value,
        conditionutilisation: form[0].children[8].children[0].checked,
      }

      console.log(objectInfo);

      const confirm = document.getElementById("confirmationMsg");

      confirm.classList.add("displayflex");

      let formstyle = document.querySelector(".gamingForm");
      formstyle.style.display = "none";
    } else {

    }
  })

}

function validationregex(form) {

  const stringRegex = /^[a-zA-Z-]+$/;
  const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+).(.\w{2,3})+$/;
  const date_regex = /^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/;

  let control = true;
  if (!form[0].children[0].children[2].value.match(stringRegex) || form[0].children[0].children[2].value.length < 2) {
    document.getElementById("firstNameErrorMsg").innerText = "Veuillez entrer 2 charactères ou plus pour le champ du prénom";
    firstNameErrorMsg.classList.add("error")
    control = false;
  } else {
    document.getElementById("firstNameErrorMsg").innerText = "";
  }

  if (!form[0].children[1].children[2].value.match(stringRegex) || form[0].children[1].children[2].value.length < 2) {
    document.getElementById("lastNameErrorMsg").innerText = "Veuillez entrer 2 charactères ou plus pour le champ du nom";
    lastNameErrorMsg.classList.add("error")
    control = false;
  } else {
    document.getElementById("lastNameErrorMsg").innerText = "";
  }
  if (!form[0].children[2].children[2].value.match(emailRegex)) {
    document.getElementById("emailErrorMsg").innerText = "Veuillez entrer un email correct";
    emailErrorMsg.classList.add("error")
    control = false;
  } else {
    document.getElementById("emailErrorMsg").innerText = "";
  }

  if (!form[0].children[3].children[2].value.match(date_regex)) {
    document.getElementById("birthdateErrorMsg").innerText = "Entrez une date de naissance valide.";
    birthdateErrorMsg.classList.add("error")
    control = false;
  } else {
    document.getElementById("birthdateErrorMsg").innerText = "";
  }

  if (form[0].children[4].children[2].value === "") {
    document.getElementById("quantityErrorMsg").innerText = "Veuillez entrer le nombre de tournois participé.";
    quantityErrorMsg.classList.add("error")
    control = false;
  } else {
    document.getElementById("quantityErrorMsg").innerText = "";
  }
  if (!form[0].children[8].children[0].checked) {
    document.getElementById("CheckboxConditionErrorMsg").innerText = "Veuillez accepté les conditions d'utilisation.";
    CheckboxConditionErrorMsg.classList.add("error")
    control = false;
  } else {
    document.getElementById("CheckboxConditionErrorMsg").innerText = "";
  }

  let compteurlocation = 0;

  for (let i = 1; i < document.getElementById('containerlocation').getElementsByTagName('input').length + 1; i++) {
    let location = document.getElementById("location" + i);
    if (location.checked) {
      compteurlocation++;
    }
  }

  if (compteurlocation >= 0) {
    document.getElementById("CheckboxVilleErrorMsg").innerText = "";
  } else {
    document.getElementById("CheckboxVilleErrorMsg").innerText = "Veuillez selectionné au moins une options.";
    CheckboxVilleErrorMsg.classList.add("error")
    control = false;
  }


  if (control) {
    return true
  } else {
    return false
  }
}