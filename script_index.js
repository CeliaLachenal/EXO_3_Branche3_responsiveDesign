document.getElementById("ok").addEventListener("click", function () {
  let inputValue = email.value;

  //fonction qui permet de vérifier si l'email est valide
  function validateEmail(email) {
    let emailReg = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i
    );
    return emailReg.test(inputValue);
  }

  /* const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; */
  let imgCaution = document.getElementById("caution");
  /* console.log(inputValue); */
  if (inputValue.length === 0) {
    erreur.classList = this.remove;
    document.getElementById("erreur").classList.add("red");
    document.getElementById("erreur").innerText =
      "Erreur : vous n'avez pas indiqué votre email.";
    imgCaution.style.visibility = "visible";
  } 
  else if (!validateEmail(email)) {
    document.getElementById("erreur").innerText =
      "Votre mail n'est pas conforme.";
    imgCaution.style.visibility = "visible";
    erreur.classList = this.remove;
    document.getElementById("erreur").classList.add("red");

    //console.log("email non conforme");
  } else {
    erreur.classList = this.remove;
    document.getElementById("erreur").classList.add("green");
    document.getElementById("erreur").innerText =
      "Merci, un email de confirmation vous a été envoyé.";
      imgCaution.style.visibility = "hidden";
      email.value = " ";
      
  }
});
